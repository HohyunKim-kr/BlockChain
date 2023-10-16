class Component {
  target;
  state = {};
  constructor(target) {
    this.target = target;
    this.setup();
    this.render();
  }

  setup() {}
  template() {
    return "";
  }

  setState(newSate) {
    this.state = { ...this.state, ...newSate };
    this.render();
  }

  render() {
    this.target.innerHTML = this.template();
    this.setEvent();
  }

  setEvent() {}
}

export default Component;
