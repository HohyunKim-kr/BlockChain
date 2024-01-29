# truffle

# react web3 hook

# ERC20

- Dapps 개발을 쉽게 개발할 수 있도록 테스트환경도 지원해주는 프레임워크
- 스마트 컨트랙트 컴파일, 배포 및 테스트 기능을 쉽게 할 수 있도록 도와준다.

```sh
npx create-react-app erc20

npm i truffle

npx truffle init

```

- npx truffle init 을 하면 초기 세팅이 되는데 3개의 폴더가 생긴다.

1. contracts : 솔리디티 코드들을 작성한 sol 파일을 담아놓을 폴더 컴파일을 진행하면 build라는 폴더가 생기고 컴파일된 파일들을이 json 파일로 생성된다.
2. migrations : 컨트랙트 배포를 진행할 js 코드 구문 작성
3. test : 테스트 파일 작성 폴더.

truffle.config

- 네트워크 속성과 솔리디티 컴파일 버전 정보 명시

# 컴파일

- contracts 폴더에 솔리디티 파일을 작성하고

```sh
npx truffle compile
```

- .build 폴더가 생성되고 컴파일된 내용이 json 파일로 생성된다.

- 배포를 하거나 컴파일을 진행하면 json 파일의 내용이 변경된다.
- 컴파일 -> 배포

- 배포 내용 컨트랙트 이름
- [번호]_[내용]_[파일명].js
- 1_deploy_Counter.js

```sh
npx truffle migrate
```

- 우리가 이전에 진행했던 하드코딩 부분으로 보면
- npx truffle comile == npx solc --abi --bin "파일경로"
- 배포 구문 작성하고 npx truffle migrate == send Transaction에 바이트 코드를 담아서 네트워크로 요청 보내서 CA주소를 배포된 컨트랙트의 CA주소를 받는 부분

- CA주소를 잃어버리면..
- npx truffle console을 켜고
- Counter.address를 조회하면 마지막으로 배포를 진행 컨트랙트의 주소를 확인할 수 있다.

- 런타임 환경을 지원해준다.

# remix로 배포를 진행 해보자.

- 우리 디스크에 있는 파일의 내용을 요청으로 보내서 remix 환경에서
- 사용해보자.

```sh
npm i -g @remix-project/remixd
# 우리 디스크 폴더 경로의 파일들을 요청
remixd -s "터미널 상에서 어느 경로를 보낼지" --remix-ide "어디의 remix 페이지 경로에 보낼지"

remixd -s "./contracts" --remix-ide "https://remix.ethereum.org/"

remix -s . --remix-ide "https://remix.ethereum.org/"
# 페이지에서 요청을 받아주길 대기중인 상태

# remix 페이지에서 connect to localhost

[
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]


608060405234801561001057600080fd5b5061015d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063209652551461003b5780635524107714610059575b600080fd5b610043610075565b60405161005091906100ae565b60405180910390f35b610073600480360381019061006e91906100fa565b61007e565b005b60008054905090565b6000811161008b57600080fd5b8060008190555050565b6000819050919050565b6100a881610095565b82525050565b60006020820190506100c3600083018461009f565b92915050565b600080fd5b6100d781610095565b81146100e257600080fd5b50565b6000813590506100f4816100ce565b92915050565b6000602082840312156101105761010f6100c9565b5b600061011e848285016100e5565b9150509291505056fea26469706673582212200bacacb188723301bd255a4ddb6962971123ebedbbc971c7ba473398ce2f4f1964736f6c634300080d0033

```

# ERC20

- ERC는 Ethereum Request for Comments 약자
- ERC 20에서 20은 특정 제안의 번호를 매긴 것. 토큰의 생성이나 발행등의 규칙을 의미
- 코도의 내용이 작성되어있는 제안
- 숫자는 큰 의미는 없고 제안의 식별의 숫자라고 보면된다.

# 토큰과 코인

- 토큰과 코인의 차이는
- 토큰이 메인넷이 있느냐 토큰은 메인넷이 없는 것.
- 토큰을 만들면 해당 네트워크의 체인에 포함이 되는데 토큰 자체의 메인넷이 구현되어있지 않으면
  코인이 아니다.

  ```
  (0) 0xb291307396B8002B6689124F18A2fEc0485774cf (1000 ETH)
  (1) 0xd6EA9F13Afa7Ac429a0b40775bFC8c88B3339807 (1000 ETH)
  (2) 0x7AdE7D91920080892FEBDa4b38771844256f538d (1000 ETH)
  (3) 0x84727A4AadbcA09F385e55d99c98572A1cA2Da25 (1000 ETH)
  (4) 0xD0773FBF2874C21966D0A7B947a9270ea81031cb (1000 ETH)
  (5) 0x8bDB9883690bb457359E7c3a0077C900948a187E (1000 ETH)
  (6) 0x3daB14efdCF51B3A3Aa80C2F724177a21DeD8877 (1000 ETH)
  (7) 0x9AB4e595aac3dECbD3dE7cAC9596Dd4922aFcE69 (1000 ETH)
  (8) 0xF6d20959B2F7D01F9Bd08eE94ab13fA018e8A805 (1000 ETH)
  (9) 0xB232373B0408cf02d2e86d4025c21d11cBbBCc53 (1000 ETH)
  ```

# Private Keys

(0) 0x1fc9c0b6955fc224cfb90dde9e87e3a77b23abf33d6413cc4d8523d19aa981f4
(1) 0xf807d2ee61b6313a5ae4212c9e1afb1a85c5e9ff968a8ac357f8a4b2cfe5cd33
(2) 0x0fb8152e888f10025b61f247d8d22cc67c9b33e7d2333fc10660f5fee10a1644
(3) 0x48c646b20356d74893bf97dab814be79aa5e77ec1d576cb0871eef7c5d236927
(4) 0xa31b1709c9bd59394dcb01808f3bdb75c49691c7c4e44b9bd9202d16385d4c21
(5) 0xc667f93a4fd541b918e99b917bbb1d49d4ee878c599e778a58dab85b7456d366
(6) 0x98173ef10172dc4bed3df9ceaa9be4d0d1fff36f64d02ba46c667be5a2942cb3
(7) 0x7b7e95c8fa8baac5e02b3b30323d5760b816ac60b0fc7e6ca0bfaf06896bbb53
(8) 0xd9b9d22b00a4bdef669f5b9990d3e9806259bfb38b12b8b0d89a1c66d5af1138
(9) 0xf23257cf45240a59c9e4ebdb426858a108880e5fed3ed55866245b8528c87a71

````

- ERC20
- ERC20은 이더리움 네트워크에서 가장 표준이 되는 토큰, 대체 가능 토큰 가장 기본적인, 교환의 기능을 가지고 있는 토큰을 정의하는 것.

# contract = {soontoken : {0xdagesfsfsafs : 10000}}

# ERC721은 대체 불가능한 토큰 고유한 토큰 아이디가 있다.

# 우리가 작성한 내용이 오픈 제플린에 포함되어있는지 확인 해보고 가자.

```sh
npm i @openzeppelin/contracts
````
