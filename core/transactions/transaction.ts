import CryptoJS from "crypto-js";

class Transaction {
  constructor(
    public transaction_id: number,
    public block_id: number,
    public transaction_hash: string,
    public sender_address: string,
    public recipient_address: string,
    public amount: number,
    public fee: number,
    public is_reward_transaction: boolean,
    public input_count: number,
    public output_count: number
  ) {}

  TxHistory() {
    return JSON.stringify(this);
  }
}

export default Transaction;
