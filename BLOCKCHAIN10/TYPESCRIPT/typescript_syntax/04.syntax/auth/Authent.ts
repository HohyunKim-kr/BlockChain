// 로그인 가입 프로세스 작성
import { Startegy } from "./auth";

// 로그인을 진행할 때 전달받는 객체의 형태
export interface AuthProps {
  email: string;
  password: string;
}

// 로그인 요청을 받은 이후 응답의 객체 형태
interface AuthentResponse {
  success: boolean;
  message?: string;
}

// authenticator 함수를 포함한 객체의 형태
interface Authenticator {
  // 검증에 대한 요청을 처리하는 함수
  // Promise<AuthentResponse> 함수에서 요청을 받고 처리한 뒤에 응답을 받으면 AuthentResponse 객체의 형태로 반환해주는 함수

  authenticator(credentials: AuthProps): Promise<AuthentResponse>;
  // 함수의 내용은 interface에 정의할 수 없다.
  // 어떤 함수나 변수가 포할될지 정의하는것
}

// 로그인 로직이 두가지 있느넫
// 카카오 로그인, 이메일 로그인

// 객체지향적으로 프로그래밍을 할때 가장 기본적인 패턴
// 전략 패턴

// 장점
// 클래스의 재사용성
// 클래스 마다마다의 내용을 객체지향적으로 따로 분리할 수 있다.
// 기능이 갑자기 추가된 경우 하나의 클래스만 만들어주면 된다.

// 카카오 로그인 로직 클래스 정의
export class KakaoAuthenticator implements Authenticator {
  async authenticator(credentials: AuthProps): Promise<AuthentResponse> {
    console.log("kakao 로그인");
    return { success: true };
  }
}

// 이메일 로그인 로직 클래스 정의
export class EmailAuthenticator implements Authenticator {
  async authenticator(credentials: AuthProps): Promise<AuthentResponse> {
    console.log("이메일 로그인");
    return { success: true };
  }
}

// 로그인 로직에서 사용할 서비스 처리 객체의 형태
export interface loginService {
  // 로그인 로직에서 처리할 login 함수
  // kakao로 할 수 있고 이메일로 할 수 도 있고,
  // type 은 kakao 로그인인지 이메일 로그인인지.
  // 유저의 입력값은 credentials 에
  login(type: string, credentials: AuthProps): Promise<AuthentResponse>;
}

// 로그인 클래스에 로그인 서비스 구조를 상속
export class Login implements loginService {
  // Startegy
  constructor(private readonly startegy: Startegy) {}
  async login(
    type: "email" | "kakao",
    credentials: AuthProps
  ): Promise<AuthentResponse> {
    const result = this.startegy[type].authenticator(credentials);
    return result;
  }
}
