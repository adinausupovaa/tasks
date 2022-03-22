import React, { useState } from "react";
import Counter from "./component/Counter/Counter";
import FormList from "./component/Form/formList";
import Receipts from "./component/Receipts/Receipts";
import Form from "./component/Form/form";

const App = () => {
  const [task, setTask] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  function handleTask(newObj) {
    let newTodos = [...task];
    newTodos.push(newObj);
    setTask(newTodos);
  }
  return (
    <div>
      <Counter />
      <Receipts />

      {isLogin ? (
        <FormList setIsLogin={setIsLogin} task={task} />
      ) : (
        <Form setIsLogin={setIsLogin} handleTask={handleTask} />
      )}
    </div>
  );
};

export default App;
