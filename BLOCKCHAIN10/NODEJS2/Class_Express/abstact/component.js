class Component {
  target;
  state;
  constructor() {
    this.render;
  }
  template() {
    // throw new Error("자식에서 써라");
  }
  render() {
    this.target.innerHTML = this.template();
  }
}

class App extends Component {
  constructor() {
    super();
  }
  template() {
    return "hello world";
  }
}
