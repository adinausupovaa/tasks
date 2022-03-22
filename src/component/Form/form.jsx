import React, { useState } from "react";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  function addTask() {
    let newObj = {
      email,
      password,
      password2,
      id: Date.now(),
    };
    if (!email || !password || !password2) {
      return alert("Fill in");
    }
    if (password === password2) {
      props.handleTask(newObj);
      props.setIsLogin(true);
    } else {
      return alert("Write similar password");
    }
  }
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", width: "250px" }}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email"
          type="text"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="password"
          type="text"
        />
        <input
          onChange={(e) => setPassword2(e.target.value)}
          value={password2}
          placeholder="confirm password"
          type="text"
        />
        <button onClick={() => addTask()}>Continue</button>
      </div>
    </div>
  );
};

export default Form;
