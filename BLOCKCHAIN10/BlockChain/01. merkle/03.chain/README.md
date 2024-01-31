# 블록체인

# 체인이란?

# 체인

- 블록 체인에서 체인이라는 개념은 블록이 서로 연결되는 방식을 말함.
- 블록의 헤더 내용으로 포함되는 이전 블록의 해시값이 체인처럼 첫 블록부터 현재 블록까지 연결해주는 것.
- 블록 체인으로 이루어져 있기 때문에 데이터의 불변성을 검증할 수 있다.!(중요) 블록의 해시값이 변했다는 것은 머클루트나 블록의 내용이 위변조 되었다는 것.(이후 블록의 연결이 끊김 체인 검증 x)
- 블록체인에 블록을 추가할 때 지금 사용하는 합의 알고리즘은 POW 블록의 검증을 거친 후에 체인에 추가.

# 예를 들어서 블록인란 객체 데이터를 가지고 있는 배열

- 블록의 순서를 관리하는 것이 배열과 유사...
- 체인에 추가되는 블록은 순차적으로 추가 된다.
- 블록의 높이로 블록의 조회 인덱스 접근

# 실제로는 key-value 저장소 LevelDB를 사용한다.

- 블록체인의 불변성 검증과는 무관하고 데이터를 조회하는데 사용
- 메타데이터 저장 및 인덱스 관리 및 UTXO 세트 처리 등등
- 실제 블록의 기록을 저장하는게 아니고 블록의 데이터를 검색하느데 사용한다.

<!-- 예 blocks/ 이 폴더 안에 blk00000.dat blk000001.dat -->

# 배열로 우리는 체인을 구현 해보자 ~