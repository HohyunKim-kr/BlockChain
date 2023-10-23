const signup = async (userinfo) => {
  try {
    const { data } = await axios.post("http://localhost:4000/users", userinfo);
    if (data.inserted) {
      location.href = "/";
    }
  } catch (e) {
    console.log(e.message);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const frm = document.querySelector("#frm");
  frm.addEventListener("submit", () => {
    e.preventDefault();

    const { value: userid, value: userpw, value: username } = e.target;
    console.log(userid, userpw, username);

    console.log(userid, userpw, username);
    const userinfo = { userid, userpw, username };
    signup(userinfo);
  });
});
