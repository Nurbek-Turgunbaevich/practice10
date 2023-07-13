import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [click, setClick] = useState(false);
  const [state, setState] = useState(true);
  const [test, setTest] = useState(true);
  const [login, setLogin] = useState("Login");
  const [user2, setUser2] = useState([]);
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const [user, setUser] = useState([]);

  const addFunc = (event) => {
    
    setInput(event.target.value);
  };
  const addFunc2 = (event) => {
    setInput2(event.target.value);
  };
  const addFunc3 = (event) => {
    setInput3(event.target.value);
  };

  const dataHandler = () => {
    setClick((prew) => !prew);
  };

  const clickHandler = () => {
    const obj = {
      name: input,
      nameTwo: input2,
      nameThree: input3,
      id: Math.random(),
    };
    setTest((prew) => !prew);
    setLogin("LogUT");
    setUser2((prev) => [...prev, obj]);
    setInput("");
    setInput2("");
    setInput3("");
  };

  useEffect(() => {
    if (input.length > 5 && input2.length > 5 && input3.length > 5) {
      setState(false);
    } else {
      setState(true);
    }
  }, [input, input2, input3]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, [click]);

  return (
    <div className="App">
      <div
        style={{
          border: "3px solid green",
          width: "300px",
          height: "300px",
          margin: "auto",
        }}
      >
        {" "}
        <button style={{ fontSize: "20px" }} onClick={dataHandler}>
          ADD
        </button>
        {user.map((el) => (
          <div key={el.id}>{el.name} </div>
        ))}
      </div>

      <button style={{ padding: "30px 60px", fontSize: "40px" }}>
        {login}
      </button>

      {test && (
        <div
          style={{
            border: "1px solid",
            width: "500px",
            height: "250px",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
            borderRadius: "6px",
            backgroundColor: "bisque",
            marginTop: "20px",
          }}
        >
          <input
            style={{
              border: state === true ? "2px solid red" : "2px solid black",
            }}
            onChange={addFunc}
            placeholder="...text"
            value={input}
            type="text"
          ></input>
          <input
            style={{
              border: state === true ? "2px solid red" : "2px solid black",
            }}
            onChange={addFunc2}
            placeholder="...text"
            value={input2}
            type="text"
          ></input>
          <input
            style={{
              border: state === true ? "2px solid red" : "2px solid black",
            }}
            onChange={addFunc3}
            placeholder="...text"
            value={input3}
            type="text"
          ></input>
          <button disabled={state} onClick={clickHandler}>
            Click
          </button>
        </div>
      )}

      {user2.map((el) => (
        <h1 key={el.id}>
          {el.name} {el.nameTwo} {el.nameThree}{" "}
        </h1>
      ))}
<h1>G<h1>
<h1>T<h1>
    </div>
  );
}

export default App;
