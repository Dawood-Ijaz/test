import { useState } from "react";

function Form() {
  const [name, setname] = useState("");
  const [opt, setopt] = useState("");
  const [tnc, settnc] = useState(false);
  function getformdata(event) {
    console.log(name, opt, tnc);
    event.preventDefault();
  }
  return (
    <>
      <form onSubmit={getformdata}>
        <input type="text" onChange={(e) => setname(e.target.value)} /> <br />{" "}
        <br />
        <select onChange={(e) => setopt(e.target.value)}>
          <option>select</option>
          <option>abc</option>
          <option>ghi</option>
        </select>{" "}
        <br /> <br />
        <input
          type="checkbox"
          onChange={(e) => settnc(e.target.checked)}
        />{" "}
        <span>accept tnc</span> <br /> <br />
        <input type="submit" />
      </form>
    </>
  );
}

export default Form;
