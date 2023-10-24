# ORM

`Object-Relational Mapping`
객체
테이블

라이브러리 또는 프레임워크

웹서버 안에서 DB내용을 조작하기 위한 라이브러리이다.
`CRUD`많이 사용하니깐 추상화해놨음.

`테이블 추상화`

`추상화`

컴포넌트
새

```js
const sql = `select * from boards`;
const [result] = pool.query(sql);
```

메서드 이든 함수이든
인자를 넘길 때 객체로 주로넘긴다.

그래서 이 객체.. 어떻게 만들어지는 거니?

```js
// instanceOf
class User {
  name;
  id;
  age;
}
```

## Sequelize

1. sequelize
2. typeORM

써봐야함

repository <-- sequelize 부분
`구현`

`설정`

## Setting

-- 시퀄라이즈는 드라이버가 아니다 드라이버는 따로 설치해야한다

```sh
$ npm init -y
$ npm install sequelize mysql2
```

connection
host,
username,
password,
database,
dialect,

sequelize <-- db connection code 어떻게 되는가?

```js
sequelize.sync();
sequelize.authenticate();
```

```
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| id    | varchar(30)  | NO   | PRI | NULL    |       |
| PW    | varchar(100) | NO   |     | NULL    |       |
| name  | varchar(30)  | NO   |     | NULL    |       |

```
