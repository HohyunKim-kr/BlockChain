console.log("login");

document.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  console.log("Axios");
  const frm = document.querySelector("form");
  frm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const {
      userid: { value: userid },
      userpw: { value: userpw },
    } = e.target;
    console.log(userid, userpw);
    try {
      const { data } = await axios.post("http://localhost:4000/login", {
        userid,
        userpw,
      });
      console.log(data);
    } catch (e) {}
  });
});
