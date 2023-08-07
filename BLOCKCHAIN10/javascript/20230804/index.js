// 메서드 멤버변수 인스턴스 인스턴스화

class Job {
  //this. 이생략 프로토타입의 키값으로 들어간다.
  job;
  career;
  constructor(_job, _career) {
    this.job = _job;
    this.career = _career;
  }

  move() {
    console.log("메소드헬로");
  }
}

const job = new Job("학생", "1년");
console.log(job);
console.log(job.move);
job.move();

const job2 = new Job("선생님", "3년");
console.log(job2);

console.log(job === job2);

const job3 = {
  job: "senior developer",
  career: "10",
  ageGroup: {
    group: 30,
    person: {
      name: "ingoo",
      id: "web7722",
    },
  },
  move: function () {
    console.log("helllo world");
  },
};

// 함수값과 함수 호출
console.log(job3.move);

job3.move();
