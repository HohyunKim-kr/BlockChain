import {
  TransactionRow,
  TransactionPool,
  TransactionData,
  TxIn,
  TxOut,
  UnspentTxPool,
} from "./interface/transaction.interface";
import { Sender } from "@core/transaction/interface/receipt.interface";
import { SignatureInput } from "elliptic";
import { SHA256 } from "crypto-js";

// 트랜잭션 객체 구조
class Transaction {
  // 블록을 채굴하면 트랜잭션 처리가 된다.
  // 블록 생성권한을 얻고(마이닝 퀴즈를 맞춰서)
  // 블록이 정상적으로 체인에 추가가 되면 트랜잭션이 처리된다.
  // 이때 새로운 블록의 첫번째 트랜잭션으로 특별한 트랜잭션이 추가되는데 코인베이스 트랜잭션
  // 새로운 블록의 첫 거래이자 블록 채굴 보상을 얻는 트랜잭션
  private readonly REWARD = 50; // 채굴자 보상
  private readonly transactionPool: TransactionPool = []; // 아직 처리되지 않은 트랜잭션을 담을 변수

  getPool(): TransactionPool {
    return this.transactionPool;
  }

  createInput(
    myUnspentTxOuts: UnspentTxPool[],
    receiptAmount: number,
    signature: SignatureInput
  ): [TxIn[], number] {
    // 0보다 금액이 큰지 비교
    let targetAmount = 0;

    const txins = myUnspentTxOuts.reduce(acc :TxIn[], unspentTxOut : UnspentTxOut)
  }
}
