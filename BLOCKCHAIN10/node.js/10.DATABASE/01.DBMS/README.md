# DATABASE (데이터베이스)

- DB 배우는 형태
- Web Server Router 잘나누기 연습잘되기
- 코드 리뷰

## DB

`정보`를 `저장`하는 `공간`
`하드디스크`

## DBMS(Database Management System)

DB 를 프로그램

DB 데이터를 저장하는 공간
DBMS 데이터를 저장하는 공간을 도와주는 프로그램

Web Server
DBMS

`통신`

## DBMS 종류

- oracle
- mysql
- mariadb
- pstresql
- mssql
- db2
  등등등..

## mysql

Oracle 유료

MySql 무료 <-- X
mariadb

postgreSQL

## 빅데이터

`NOSQL` - DBMS

## 관계형, 비관계형

RDBMS,

## 관계형이란 ?

엑셀(EXCEL)

MYSQL <-- 테이블로 데이터 저장함

## 비관계형 ?

MongoDB <-- 객체형태로 데이터 저장함

## SQL

- DDL
- DML
- DCL

## 설치

**window**

```sh

sudo apt update
sudp apt upgrade
sudo apt install mysql-server
mysql --version

sudo service mysql start
ps -ef | grep mysql

sudo service mysql stop
sudo service mysql status

sudo mysql_secure_installation

# mysql 초기 비밀번호
sudo mysql -uroot -p[비밀번호]

```

```mysql
show database;
use [데이터베이스명]

use mysql;
show tables;

desc user;       -- 컬럼목록 보기
select * from user; -- 레코드를 보는건대
select user,host from user; --
```
