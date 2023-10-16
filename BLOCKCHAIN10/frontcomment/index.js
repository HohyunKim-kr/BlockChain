const Create = document.getElementById("form");
Create.addEventListener = (e) => {
  e.preventDefault("submit".handleSubmit0);

  const date = new Date();
  const author = document.getElementById("comment-author").value;
  const comment = document.getElementById("comment-text").value;

  const commentsBox = { writer: author, comment: comment, date };

  const row = { id: lastID, content: comment, date };

  localStorage.setItem(`${lastID}`, JSON.stringify(row));
  localStorage.setItem("lastID", lastID);

  // Re-render the comments
  renderComments();
  form.reset();
};
