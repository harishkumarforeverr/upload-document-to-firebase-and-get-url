import React, { useState, useEffect } from "react";
import "./App.scss";
import { GetUrlFromFireBase } from "./firebase";

const AppDragDropDemo = () => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    console.log(url);
  }, [url]);
  return (
    <>
      <GetUrlFromFireBase setUrl={setUrl} />
    </>
  );
};

export default AppDragDropDemo;
