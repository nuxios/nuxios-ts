import * as crypto from "crypto";
import Transaction from "../transactions/transaction";

class Block {
  constructor(
    public block_id: number,
    public block_hash: string,
    public previous_block_hash: string,
    public merkle_root: string,
    public difficulty: number,
    public nonce: number,
    public timestamp: Date,
    public block_size: number,
    public block_reward: number,
    public miner_address: string,
    public block_version: number,
    public transactions: Transaction[],
    public index: number,
    public hash: string,
    public previousTransaction: Transaction,
    public data: string
  ) {}

  get TxHash() {
    const alg = JSON.stringify(this);
    const dig = crypto.createHash("sha256");
    dig.update(alg).end();
    return dig.digest("hex");
  }
}

console.log()

export default Block;