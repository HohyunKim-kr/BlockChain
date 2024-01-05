import {
  AuthProps,
  EmailAuthenticator,
  KakaoAuthenticator,
  loginService,
  Login,
} from "./Authent";

// 카카오 로그인 로직과 이메일 로그인 로직을 가지고 있는 객체의 형태
// Startegy 객체를 정의

export interface Startegy {
  email: EmailAuthenticator;
  kakao: KakaoAuthenticator;
}

// 로그인 로직을 사용할 객체
class Auth {
  constructor(
    private readonly authProps: AuthProps,
    private readonly loginService: loginService
  ) {
    this.authProps = authProps;
  }

  // 로그인 로직
  public async login() {
    console.log(this);
    const result = await this.loginService.login("kakao", this.authProps);
    console.log(result);
  }
}

// 로그인 로직 실행

const authPrpos: AuthProps = { email: "ASDAS@NAVER.COM", password: "23123" };

// email 로그인 로직 클래스 동적할당
const _email = new EmailAuthenticator();
const _kakao = new KakaoAuthenticator();

const _startegy: Startegy = {
  email: _email,
  kakao: _kakao,
};

const _loginService = new Login(_startegy);
const auth = new Auth(authPrpos, _loginService);
auth.login();
