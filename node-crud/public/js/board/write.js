const form = document.querySelector("#writeform");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  //   const title = e.target.title.value;
  //   const writer = e.target.writer.value;
  //   const content = e.target.content.value;

  const {
    title: { value: title },
    writer: { value: writer },
    content: { value: content },
  } = e.target;

  console.log(titlte, writer, content);

  console.log("submit!");
});
