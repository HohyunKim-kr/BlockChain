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
    const { comments } = this.state;
    const id = comments.length !== 0 ? comments[comments.length - 1].id + 1 : 1;

    comments.push({
      id,
      userid: "kiamea",
      content,
      date: "20231120",
    });
    const newState = [...comments];
    this.setState({ ...this.state, comments: [...newState] });
  }

  deleteItem(id) {
    // id === 1
    const { comments } = this.state;
    const newState = comments.filter((v) => v.id !== id);
    this.setState({ ...this.state, comments: [...newState] });
  }

  updateItem(id, content) {
    const { comments } = this.state;
    const newState = [...comments];

    const index = newState.findIndex((v) => v.id === parseInt(id));
    newState[index].content = content;
    this.setState({ ...this.state, comments: [...newState] });
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
    const deleteItem = this.deleteItem.bind(this);
    const updateItem = this.updateItem.bind(this);
    new CommentList(listTarget, { comments, deleteItem, updateItem });
  }
  setEvent() {}
}

export default Comment;
