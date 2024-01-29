import { IBlock } from "@core/interface/block.interface";
import { Faillable } from "@core/interface/failable.interface";
import CryptoModule from "@core/crypto/crypto.module";
import BlockHeader from "./blockHeader";
import { SHA256 } from "crypto-js";
import merkle from "merkle";

// block의 형태를 class로 정의
class Block extends BlockHeader implements IBlock {
  hash: string;
  merkleRoot: string;
  nonce: number;
  difficulty: number;
  data: string[];
  constructor(_previousBlock: Block, _data: string[]) {
    // 부모 블록헤더 생성자 호출
    super(_previousBlock);
    this.merkleRoot = Block.getMerkleRoot(_data); // 머클루트 알고리즘 메서드
    this.hash = Block.createBlockHash(this); // 블록의 모든 내용을 가지고 만든 해시값

    this.nonce = 0; // 블록 생성 당시에 연산작업이 얼마나 반복되었는지 넣을 것.
    this.difficulty = 0; // 블록의 난이도 설정
    this.data = _data;
  }

  // 현재 블록의 해시를 구하는 메서드
  static createBlockHash(_block: Block): string {
    const {
      version,
      timestamp,
      height,
      merkleRoot,
      previousHash,
      difficulty,
      nonce,
    } = _block;
    const value: string = `${version}${timestamp}${height}${merkleRoot}${previousHash}${difficulty}${nonce}`;
    return SHA256(value).toString();
  }

  // 머클루트를 구하는 메서드
  // getMerkleRoot 메서드를 사용할때 매개변수의 타입을 정의하고 싶어.
  // getMerkleRoot<T> 함수 호출시 제너릭에 정의한 타입을 함수 안에서 사용하기 위해
  static getMerkleRoot<T>(_data: T[]): string {
    const merkleTree = merkle("sha256").sync(_data);
    return merkleTree.root();
  }

  // 블록생성
  // 블록의 해시 만드는 메서드
  // 블록의 검증 메서드
  // 마이닝 => 블록 생성 권한을 얻기 위해서 난이도에 맞는 답을 구하는 연산
  static findBlock(generateBlock: Block) {
    let hash: string;
    // 연산의 횟수
    let nonce: number = 0;

    while (true) {
      // 16진수 -> 2진수 변경
      nonce++;
      generateBlock.nonce = nonce;
      hash = Block.createBlockHash(generateBlock);
      // nonce가 증가함으로 블록의 해시값이 변경된다.
      // 정답을 찾아가는 과정
      const binary: string = CryptoModule.hashToBinary(hash);
      console.log(binary);

      const result: boolean = binary.startsWith(
        "0".repeat(generateBlock.difficulty)
      );

      if (result) {
        // 정답을 맞추면
        // 정답을 맞춘 해시를 생성할 블록에 포함시키고
        generateBlock.hash = hash;
        // 실제로 포함시킬 블록을 반환
        return generateBlock;
      }
    }
  }

  // 블록이 유효한지 검증하는 메서드
  static isvalidNewBlock(
    _newBlock: Block,
    _previousBlock: Block
  ): Faillable<Block, string> {
    // 블록의 유효성 검사 실패시 반환식
    if (_previousBlock.height + 1 !== _newBlock.height) {
      return { isError: true, value: "이전 블록의 높이 오류" };
    }
    if (_previousBlock.hash !== _newBlock.previousHash) {
      return { isError: true, value: "이전 블록 해시 비교 오류" };
    }
    if (Block.createBlockHash(_newBlock) !== _newBlock.hash) {
      return { isError: true, value: "블록체해시 오류" };
    }
    // 블록의 유효성 검사 통과
    return { isError: false, value: _newBlock };
  }

  // 블록 추가

  static generateBlock(_previousBlock: Block, _data: string[]): Block {
    const generateBlock = new Block(_previousBlock, _data);
    const newBlock = Block.findBlock(generateBlock);
    return newBlock;
  }
}

export default Block;
