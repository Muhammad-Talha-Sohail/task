import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import style from "./App.module.css";

function App() {
  const [array, setArray] = useState(0);
  const [val, setVal] = useState(Array(array).fill(""));
  const [finalValue, setFinalValue] = useState(""); // State to store the final concatenated value

  useEffect(() => {
    setVal(Array(array).fill(""));
  }, [array]);

  function handleSubmit() {
    // Join the values from the first five input fields and set it in the finalValue state

    const joinedValue = val.slice(0, array).join("");
    setFinalValue(joinedValue);
  }

  return (
    <>
      <div className={`${style.header}`}>
        {" "}
        <div className={`container-fluid text-center  py-5 `}>
          How many input fields you want :{" "}
          <input  className={style.inp}
            type="number"
            onChange={(e) => {
              const newSize = parseInt(e.target.value);
              if (newSize !== 0 || newSize.toString.length !== 0) {
                setArray(newSize);
              }
            }}
          />
        </div>
        <div className={style.main}>
          <div>
            <div>
              {val.map((v, index) => {
                return (
                  <input
                    className={style.mapIn}
                    type="text"
                    key={index}
                    maxLength="1"
                    value={v}
                    onChange={(e) => {
                      const updatedVal = [...val];
                      updatedVal[index] = e.target.value;
                      setVal(updatedVal);
                    }}
                  />
                );
              })}
            </div>

            <div className={`container-fluid my-3 w-100`}>
              <input type="button" value="Submit" onClick={handleSubmit} />
            </div>
            <div className={`container-fluid `}>
              <input
                type="text"
                value={finalValue}
                readOnly
                className={`${style.output}`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
