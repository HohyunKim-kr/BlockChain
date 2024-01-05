// 할인 함수를 가지고 있는 객체의 형태 정의

interface Discount {
  getDisCountPrice(price: number): Number;
}

// 가격을 받아서 그대로 수정하는 로직을 담당하는 클래스
class FlatDisCount implements Discount {
  private amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  getDisCountPrice(price: number): Number {
    return price - this.amount;
  }
}

// 할인율로 가격 수정하는 로직을 담당하는 클래스
class PercentDiscount implements Discount {
  private amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  getDisCountPrice(price: number): Number {
    return price * (1 - this.amount);
  }
}

// 이벤트 할이
class FlatPercentDiscount implements Discount {
  private flatAmount: number;
  private percent: number;
  constructor(flatAmout: number, percent: number) {
    this.flatAmount = flatAmout;
    this.percent = percent;
  }

  getDisCountPrice(price: number): Number {
    const flatDisCountAmount = price - this.flatAmount;
    return flatDisCountAmount * (1 - this.percent / 100);
  }
}

// 상품의 클래스
class Product2 {
  private name: string;
  private price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}

// 상품 할인 서비스 로직을 담당하는 클래스
class ProductDiscount {
  private product: Product2;
  private discount: Discount;
  constructor(product: Product2, discount: Discount) {
    this.product = product;
    this.discount = discount;
  }

  getPrice() {
    console.log(this.discount.getDisCountPrice(this.product.getPrice()));
  }
}

const _product = new Product2("비트코인", 100000);
const _product2 = new Product2("이더리움", 20000);

const productDiscount = new FlatDisCount(10000);
const productDiscount2 = new FlatDisCount(10);

const productService = new ProductDiscount(_product, productDiscount);
productService.getPrice();

const productService2 = new ProductDiscount(_product2, productDiscount);
productService2.getPrice();
