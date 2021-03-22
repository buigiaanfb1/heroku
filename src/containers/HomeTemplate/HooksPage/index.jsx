import React, { useState, useEffect, useCallback, useMemo } from "react";
import Child from "./child.jsx";

export default function HooksPage() {
  const [number, setNumber] = useState(0);
  const handleChange = () => {
    setNumber(number + 1);
  };

  useEffect(() => {
    console.log("useEffect");
  }, []);

  useEffect(() => {
    console.log("useEffect");
  }, [number]);

  useEffect(() => {
    let interval = setInterval(() => {
      console.log("hello cybersoft");
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const showNumber = () => {
    console.log("showNumber");
  };

  const numberUp = () => {
    let i = 0;
    while (i < 1000) i++;
    console.log(i);
    return i;
  };

  const numberUpMemo = useMemo(() => numberUp(), []);

  const showNumberCallBack = useCallback(showNumber, [number]);

  return (
    <div>
      <h3>hook</h3>
      <p>Number: {number}</p>
      <button className="btn btn-success" onClick={handleChange}>
        Click
      </button>
      <p>NumberUp: {numberUpMemo}</p>
      <Child showNumber={showNumberCallBack} />
      <hr />
    </div>
  );
}
