class Car {
  name;
  link;

  constructor(name, link) {
    this.name = name;
    this.link = link;
  }
}

class Hyundai extends Car {}
class Kia extends Car {}
class Tesla extends Car {}
class Samsung extends Car {}

const carList = [
  new Hyundai("현대", "https://www.hyundai.com/"),
  new Kia(
    "기아",
    "https://www.kia.com/kr?utm_source=google_SA&utm_medium=AD202307&utm_campaign=KiaSales2022_brand&utm_content=keyword_pc&utm_term=%EA%B8%B0%EC%95%84&gclid=Cj0KCQjwnrmlBhDHARIsADJ5b_kAbfoRb1zNA8hlfOYk_7-Fi0gGlnq0iqRkaeCpdhWHG4EGDWmV8G8aAhv_EALw_wcB"
  ),
  new Tesla("테슬라", "https://www.tesla.com/ko_kr"),
  new Samsung(
    "삼성",
    "https://www.renaultkoream.com/new/model/master.jsp?bannerUrl=MASTERSEARCHG2307&bannerSeq=1&utm_source=google&utm_medium=pc_cpc&utm_campaign=RKM_SEA_MASTER_DEFENSIVE_2307&gclid=Cj0KCQjwnrmlBhDHARIsADJ5b_mEDG_Wk1Zz6ZkgEDD1CvCcd6H6Rb3a1xnkaNS8o_uVxNvkB2-YGSkaAiorEALw_wcB"
  ),
];

carList.forEach((item) => {
  console.log(item.name);
  carDiv = document.write(
    "<a href=" + item.link + ">" + "<div>" + item.name + "</div>" + "</a>"
  );
});
