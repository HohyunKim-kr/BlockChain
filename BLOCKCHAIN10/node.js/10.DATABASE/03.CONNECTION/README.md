# DATABASE CONNECTION

```SQL
CREATE DATABASE block10
use block10

CREATE TABLE boards(
      id INT AUTO_INCREMENT,
      title VARCHAR(200) NOT NULL,
      content TEXT,
      writer VARCHAR(20) NOT NULL,
      created_at DATETIME DEFAULT now(),
      hit INT DEFAULT 0,
      PRIMARY KEY(id)
);

SHOW STATUS LIKE 'Threads_connected';

```

NODEJS 환경에서 DB SERVER CONNECTION 할텐데..
// 통신을 도와주는 코드, 드라이버, 마이에스큐엘이 아니다.
`mysql2`

```sh
npm init -y
npm install mysql2
```

```sql
use mysql;
select user,host from user;

root 가 localhost로 뜸
```

```sql
-- 접속이 막혀있으면 속성값을 설정해한다.
-- 계정생성
CREATE USER '아이디'@'%' identified with mysql_native_password by '비밀번호';
FLUSH PRIVILEGES;
```

**root 계정 접속**

```sql

grant all privileges on *.* to '아이디'@'%' with grant option;
```

```sh
sudo service mysql restart

mysql -u아이디 -p

sudo apt install net-tools
sudo netstat -ntlp | grep mysqld

cd /etc/mysql/mysql.conf.d

# mysqld.cnf

sudo vi mysqld.cnf
# bind-address = 0.0.0.0 으로 바꾸기
# 바꾸고 나서 ㅇ리스타트
sudo service mysql restart
```

## DB ConnectionPOOL 활용해서 리스트 만들어보기

```sh
npm install express nunjucks
```
