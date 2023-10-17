import Component from "./core/component.js";
import Comment from "./src/components/comment.js";

class App extends Component {
  setup() {}
  template() {
    return `
        <div>header</div>
        <div>
            <div data-conponent='comment'></div>
        </div>
        <div>footer</div>

    `;
  }
  mounted() {
    const commnetTarget = document.querySelector('[data-conponent="comment"]');
    new Comment(commnetTarget);
  }
  setEvent() {}
}

export default App;
