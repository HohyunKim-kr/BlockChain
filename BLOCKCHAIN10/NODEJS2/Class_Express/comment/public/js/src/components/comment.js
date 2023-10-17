import Component from "../../core/component.js";
import CommentForm from "../contents/comment/form.js";
import CommentList from "../contents/comment/item.js";

class Comment extends Component {
  setup() {
    this.state = {
      comments: [
        { id: 1, userid: "Web312", content: "hioiii", date: "2321131" },
        { id: 2, userid: "Wessb312", content: "hioisdii", date: "2321131" },
        { id: 3, userid: "Web3s12", content: "hioisdaaii", date: "232113221" },
      ],
    };
  }
  template() {
    return `
    <ul class="comment"> 
        <li class="comment-form"></li>
        <li class="comment-list"></li>        
    </ul>`;
  }

  insertItem(content) {
    const newState = this.state.comments.push({
      id: 4,
      userid: "kiamea",
      content,
      date: "20231120",
    });
    this.setState({ ...this.state, ...newState });
  }

  mounted() {
    const { comments } = this.state;
    const formTarget = document.querySelector(".comment-form");
    const insertItem = this.insertItem.bind(this);
    new CommentForm(formTarget, {
      length: comments.length,
      insertItem,
    });

    const listTarget = document.querySelector(".comment-list");
    new CommentList(listTarget, { comments });
  }
  setEvent() {}
}

export default Comment;
