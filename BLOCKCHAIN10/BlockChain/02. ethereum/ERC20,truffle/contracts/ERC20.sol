// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "./IERCO20.sol";

// class implements
contract ERC20 is IERC20 {
    // 우리의 토큰의 내용을 작성;
    
    // 토큰의 이름 풀네임 
    string public name;

    // 토큰의 심볼(토큰의 단위를 표현) ETH 등
    string public symbol;

    // 토큰의 소수점 자리 기본 18자리의 단위로 지정해준다.
    uint8 public decimals = 18;

    // 토큰의 총 발행량
    // 이미 선언되어 있는 메서드를 interface의 메서드 가상 함수로 되어있고 내용이 없다. 
    // override 상속 받은 가상함수를 상태변수로 정의 해서 사용 덮어쓰기
    uint public override totalSupply;

    // 완전 과거 버전의 ERC20 컨트랙트에는 상태변수로 포함이 되어있었는데 
    // owner 컨트랙트가 추가되면서
    address private owner;

    // 토큰의 량을 가지고 있을 상태 변수
    mapping(address => uint) public balances;
    /*
        {0x1 : 100}
     */

    // 토큰의 소유권을 위임받은 내용을 관리할 상태변수
    mapping(address => mapping(address => uint)) public override allowance;
    /*
        {
            0x1 : {
                    0x2 :10,
            }
        }
     */

    // 생성자 함수
    constructor(string memory _name, string memory _symbol, uint256 _amount){
        // 가스비 절감 memory 구문으로 
        // CA를 생성하는 단게에서 컨트랙트 배포 단계
        // 최초에 딱 한번 발생하는 생성자 함수를 실행시키는 사람은 무조건 컨트랙트 배포자이다. 
        owner = msg.sender;
        name = _name; // mmtoken
        symbol = _symbol;// STK
        // 촐발행 시킬것.
        // 토큰의 량 만큼 넣을건데
        // 소수점이 붙기 때문에 단위를 맞춰주자.
        // 10000 * 10 ** decimals
        mint(_amount * (10 ** decimals));
    }

    // 토큰을 발행하는 함수 
    function mint(uint amount) internal {
        balances[msg.sender] += amount;
        // 생성자 함수에 호출을 하면
        // 컨트랙트 배포자가 발행량 만큼을 발행
        // 상타변수에 업데이트 된다. 배포자의 계정에 발행한 수만큼 
        totalSupply += amount;
    }

    // 소유권 이전 메서드
    // 다른 지갑으로 소유권을 이전 해주는 메서드
    // 상태 데이터변경
    function transfer(address to, uint amount) external override returns(bool){
        // 검증식 이 사람이 돈이 있는지 확인을 하고
        // require(address(msg.sender).balance > amount);
        balances[msg.sender] -= amount;
        balances[to] += amount;
        // 트랜잭션 발생후 로그에 내용이 
        // 0 1 2
        // msg.sender, to, amount 순서대로 로그를 확인할 수 있다.
        emit Transfer(msg.sender, to, amount);

        return true;
    }

    // 누군가에게 소유권울 넘겨주는 메서드 
    function approve(address spender, uint amount) external override returns(bool){
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender,spender,amount);
        return true;
    }

    // 소유권을 가지고 있는 계정이 토큰을 보내는 경우
    function transferFrom(address spender,address to,uint amount) external override returns(bool){
        // 소유권이 있는지 확인
        // msg.sender 호출한 사람 = 내가 누구에게 위임을 받았고 
        // 위임 받은 사람의 토큰을 다른 계정으로 보낸다.
        // spender == 0x1  의 지갑에서 받은 토큰을 보낸다.
        // 내가 0x1 계정에서 amount 보내는 량 만큼 위임을 받았는지 확인
        require(allowance[spender][msg.sender] >= amount);

        allowance[spender][msg.sender] -= amount;
        /*
            {
                0x1 : {
                    0x2 : 10000,
                }
            }
         */
        balances[spender] -= amount;
        balances[to] += amount;
        return true;
    }
    function balanceOf(address account) external view returns (uint) {
        return balances[account];
    }

    // receive 이미 작성되어있는 특별한 함수
    // 호출되는 시기가 정해져 있다
    // CA에 이더를 보낼 경우 transfer 가 발생했을때 호출되는 함수. 

    receive() external payable {
        // 누군가 토큰을 얻고 싶어 발행자가
        // 토큰을 보내줘야한는데
        // 토큰으 가격을 정해서 이더를 받은량 만큼에서 
        // 토큰의 갯수를 정해서 이더를 보낸사람한테 토큰의 소유권을 주는 기능을 작성하고 싶을 때 
        uint amount = msg.value * 20;

        // mint가 발행자만 발행할 수 있게 작성을 했다 가정을 하고
        // 이후 발행은 어떻게 하지?
        // 발행은 배포자만 한다
        if(msg.sender == owner) {
            mint(amount);
        }

        require(balances[owner] >= amount);
        balances[owner] -= amount;
        balances[msg.sender] += amount;

    }
} 