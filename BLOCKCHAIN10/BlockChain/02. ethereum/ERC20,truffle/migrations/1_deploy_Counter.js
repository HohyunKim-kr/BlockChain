// 컨트랙트 배포 구문 작성
// json 파일이 필요한데 json 파일 중에서 어떤 파일?
const Counter = artifacts.require("Counter");

module.exports = (deployer) => {
  // json을 가져와서 만든 인스턴스를 가지고
  // 해당 네트워크에 배포를 진행.
  deployer.deploy(Counter);
};
