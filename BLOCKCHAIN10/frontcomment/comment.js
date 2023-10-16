const Create = document.getElementById("form");
const authorInput = document.getElementById("comment-author");
const commentInput = document.getElementById("comment-text");
const commentsList = document.getElementById("comment_list");
const countElement = document.querySelector(".count");

class Comment {
  constructor() {
    Create.addEventListener("submit", (e) => {
      e.preventDefault();
      const author = authorInput.value;
      const comment = commentInput.value;
      const date = new Date();

      // Create a unique ID for each comment (You can use a more robust approach for generating unique IDs)
      const id = new Date().getTime();

      // Store the comment in localStorage
      localStorage.setItem(
        `comment_${id}`,
        JSON.stringify({ author, comment, date })
      );

      // Clear the input fields
      authorInput.value = "";
      commentInput.value = "";

      // Update the comment count and display comments
      this.updateComments();
    });
  }

  updateComments() {
    const commentCount = localStorage.length;
    countElement.textContent = `댓글 ${commentCount}`;

    commentsList.innerHTML = ""; // Clear existing comments

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("comment_")) {
        const commentData = JSON.parse(localStorage.getItem(key));
        this.displayComment(commentData, key); // Pass the key to the displayComment function
      }
    }
  }

  displayComment(commentData, key) {
    const template = `
      <li class="comment_row">
          <span class="id">${commentData.author}</span>
          <span class="content">${commentData.comment}</span>
          <span class="date">${commentData.date}</span>
          <button class="delete" data-key="${key}">Delete</button>
      </li>`;
    commentsList.innerHTML += template;
  }

  deleteComment(key) {
    localStorage.removeItem(key);
    this.updateComments();
  }
}

const commentory = new Comment();
commentory.updateComments();

// Add event listener to delete buttons
commentsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const key = e.target.getAttribute("data-key");
    commentory.deleteComment(key);
  }
});
