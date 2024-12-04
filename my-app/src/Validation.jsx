import { useState } from "react";

function Validation() {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const [userErr, setuserErr] = useState(false);
  const [passErr, setpassErr] = useState(false);

  function Submithandler(e) {
    if (user.length < 3 || pass.length < 3) {
        alert("Please enter values.");
    } else {
        alert("All good! Form submitted successfully.");
    }
    e.preventDefault();
  }

  function Userhandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setuserErr(true);
    } else {
      setuserErr(false);
    }
    console.log(e.target.value);
  }

  function passhandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setpassErr(true);
    } else {
      setpassErr(false);
    }
    console.log(e.target.value);
  }

  return (
    <>
      <form onSubmit={Submithandler}>
        <input type="text" onChange={Userhandler} />
        {userErr ? <span>user not found</span> : ""}
        <br /> <br />
        <input type="password" onChange={passhandler} />
        {passErr ? <span>pass not found</span> : ""}
        <br /> <br />
        <button>Login</button>
      </form>
    </>
  );
}

export default Validation;
