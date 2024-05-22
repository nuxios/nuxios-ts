import * as crypto from 'crypto';
import { db } from '../config/supabase';

class Wallet {
  private privateKey: string;
  private publicKey: string;
  private address: string;
  private balance: string;

  constructor() {
    const keyPair = crypto.generateKeyPairSync('ec', {
      namedCurve: 'secp256k1',
      privateKeyEncoding: {
        type: 'sec1',
        format: 'der',
      },
      publicKeyEncoding: {
        type: 'spki',
        format: 'der',
      },
    });

    this.privateKey = keyPair.privateKey.toString('hex');
    this.publicKey = keyPair.publicKey.toString('hex');
    this.address = this.generateAddress(this.publicKey);
    this.balance = '0';
  }

  private generateAddress(publicKey: string): string {
    const hash = crypto.createHash('sha256').update(publicKey).digest('hex');
    const address = hash.slice(0, 40);
    return address;
  }

  public getAddress(): string {
    return this.address;
  }

  public getPublicKey(): string {
    return this.publicKey
  }
  public getPrivateKey(): string {
    return this.privateKey
  }
  public getBalance(): string {
    return this.balance
  }
}

export const wallet = new Wallet();

export async function WalletSummoning(userID: number) {
  const { data, error } = await db.from('wallets').insert({
    address: wallet.getAddress(),
    public_key: wallet.getPublicKey(),
    private_key: wallet.getPrivateKey(),
    balance: wallet.getBalance(),
    user_id: userID
  })

  console.log(error);
  return data;
}