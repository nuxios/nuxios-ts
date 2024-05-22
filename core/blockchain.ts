import Transaction from "./transactions/transaction";
import CryptoJS from "crypto-js";

/** dummy data for transaction */
const newTransaction = new Transaction(
  1,
  1,
  CryptoJS.SHA256("Transaksi").toString(),
  CryptoJS.SHA256("Address").toString(),
  CryptoJS.SHA256("AddressReceiper").toString(),
  0.1,
  0.0005,
  false,
  1,
  2
);

console.log("New Transaction:", newTransaction);
console.log("Transaction History:", newTransaction.TxHistory());