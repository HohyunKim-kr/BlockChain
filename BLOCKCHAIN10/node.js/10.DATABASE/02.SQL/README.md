# SQL

```sh
mysql -uroot -proot

mysql -uroot -p

sudo service mysql start

show databases;

use mysql;

show tables;

select * from user

select Host,User from user;
```

## 개요

- DDL 데이터 정의어
- DML 데이터 조작어
- DCL 데이터 제어어

### (DDL) 데이터 정의어

- CREATE
- SHOW
- DROP
- ALTER

```sql
CREATE DATABASE site;
CREATE SCHEMA site;
SHOW DATABASES;
DROP DATABASE site;
USE site; -- 데이터베이스 선택 명령어
```

```sql
CREATE TABLE board(
  id INT,
  title VARCHAR(200),
  content TEXT,
  writer VARCHAR(20),
  created_AT DATE,
  hit INT
);

show tables; -- 테이블이 있는지 확인
desc board; -- 자신이 만든 테이블의 필드를 확인
```

```sql
ALTER TABLE board RENAME TO boards;
```

### (DML) 데이터 조작어

- INSERT C
- SELECT R
- UPDATE U
- DELETE D

C

```sql
INSERT INTO 테이블명(필드명) values(값...)
INSERT INTO boards(id,title,content,writer,created_AT,hit) values(1, '안녕', '안녕하세요', 'web7722', NOW(), 0);
INSERT INTO boards(id,title,content,writer,created_AT,hit) values(2, '안녕2', '안녕하세요2', 'web7733', NOW(), 0);
```

R

```sql
SELECT * FROM boards;
SELECT title FROM boards;

SELECT * FROM boards WHERE id=2 OR title='안녕'; --filter 느낌 내가 원하는 필드값의 속성 데이터를 가져온다.
```

U

```sql
UPDATE 테이블 SET 필드=값, 필드1=값2 WHERE 조건=값
UPDATE boards SET title='hello world', content='hello world content';  --  where 절을 안넣으면 모든 필드 속성의 데이터가 바뀐다.

UPDATE boards SET title='안녕2', content='안녕하세요' WHERE id=2;
```

```sql
DROP TABLE boards;
DELETE FROM 테이블명 WHERE id=1;
```

### AUTO_INCREMENT

`users`

```sql
CREATE TABLE users(
  id INT,
  name VARCHAR(30),
  PRIMARY KEY(id)
);

INSERT INTO users(id,name) values(1, 'aaa');
INSERT INTO users(id,name) values(2, 'bbb');
INSERT INTO users(id,name) values(3, 'ccc');

DELETE FROM users WHERE id=3;
INSERT INTO users(id,name) values(4, 'ddd');
```

```sql
DROP TABLE users;

CREATE TABLE users(
  id INT AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY(id)
);

INSERT INTO users(name) values('aaa');
INSERT INTO users(name) values('bbb');
INSERT INTO users(name) values('ccc');
DELETE FROM users WHERE id=3;
INSERT INTO users(name) values('ccc');
-- INSERT INTO users(id,name) values(3,'ecc');

DESC users;
```

```sql
DROP TABLE boards;

CREATE TABLE board(
  id INT AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  content TEXT,
  writer VARCHAR(20)  NOT NULL,
  created_at DATETIME DEFAULT now(),
  hit INT DEFAULT 0,
  PRIMARY KEY(id)
);

-- NOT NULL 어떤한 상황에도 값을넣겠다
ALTER TABLE board RENAME TO boards;

INSERT INTO boards(title, content, writer) values('안녕', '안녕하세요', 'web7722');
INSERT INTO boards(title, content, writer) values('안녕1', '안녕하세요1', '1web7722');
INSERT INTO boards(title, content, writer) values('안녕2', '안녕하세요2', '2web7722');
INSERT INTO boards(title, content, writer) values('안녕3', '안녕하세요3', '3web7722');
INSERT INTO boards(title, content, writer) values('안녕4', '안녕하세요4', '4web7722');

select * from boards;


INSERT INTO boards(title, writer) values('안녕', 'web7722');
```

## 제약조건

- AUTO_INCREMENT
- PRIMARY KEY - null을 허용하지 않아요..
- UNIQUE - null 허용합니다.
- NOT NULL
- DEFAULT

### (DCL) 데이터 제어어

- GRANT
- REVOKE

엔티티 - 테이블 필드
레포지토리 - SQL 문법

    - findOne
    - findAll
    - update
    - create
    - delete

- NODEJS 교과서

- 검색기능
- 페이징,100개면, 10개...페이지네이션...
- 좋아요 기능 - User 이후..
- 해쉬태그 기능
- 카테고리 기능
- 댓글, 대댓글

```sql
--  오르차순 내리차순 정렬
SELECT * FROM 테이블명 WHERE 절 ORDER BY 필드 desc, asc
```

```js
class 사람 {}
class 성별 {}
class 직업 {}

의존성 주입
//  상속이란 개념보단 속성값으로 의존성을 주는 것, 웹에서는 상속을 많이 주지 않는다. 이유는 데이터 관리가 효율적이지 않으니까..

class 직업 extends 성별 {}
class 성별 extends 사람 {}

const a = new 사람();
const b = new 직업();

class 직업 {
  constructor(a) {
    this.사람 = a;
  }
}

const job = new 직업(a);

// 자동 ioc di 컨테이너?
```
