export class Sender {
  account: string; // 보내는 사람의 계정 계정 주소
}

// 영수증
export class Receipt {
  sneder: Sender;
  received: string;
  amount: number;
}
