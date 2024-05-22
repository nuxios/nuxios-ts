import * as crypto from "crypto";
import CryptoJS from "crypto-js";
import { cardIdentifier } from "./operator";
import { db } from "../config/supabase";
import { WalletSummoning } from "./wallet";

class SummonUserIdentity {
  private randomIdentity: string;
  private seed: string;
  private username!: string;

  constructor() {
    this.randomIdentity = cardIdentifier(12);
    this.seed = crypto.randomBytes(12).toString("hex");
    this.generateUsername();
  }

  private generateUsername(): void {
    const hash = crypto.createHash("sha256").update(this.seed).digest("hex");
    this.username = hash.toString();
  }

  public getUsername(): string {
    return this.username;
  }

  public getIdentifier(): string {
    const combiner = this.randomIdentity + this.username + this.seed;
    const hash = CryptoJS.SHA256(combiner).toString(CryptoJS.enc.Hex);
    return hash;
  }
}

const userIdentity = new SummonUserIdentity();
console.log("Random Username:", userIdentity.getUsername());
console.log("Random Identifier:", userIdentity.getIdentifier());

export async function AccountCreate() {
  const userIdentity = new SummonUserIdentity();

  const { data, error } = await db
    .from('users')
    .insert({ username: userIdentity.getIdentifier() })
    .select();

  if (error) {
    console.error('Error inserting user:', error);
  } else if (data) {
    console.log('User inserted:', data);
    await WalletSummoning(data[0].user_id);
  }
}