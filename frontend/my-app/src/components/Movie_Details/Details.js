import { useState } from "react";
// import { useParams } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function Details(prop) {
  // let [id, setId] = useState("");
  // setId(useParams());
  const { temp } = useParams();
  console.log(temp);
  return (
    <div>
      <h4>Details Hello</h4>
      <h3>Id: {temp}</h3>
    </div>
  );
}

export default Details;
