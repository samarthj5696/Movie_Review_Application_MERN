import api from "../../axios/AxiosConfig.js";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import "./details.css";

function Details(prop) {
  const [comments, setComments] = useState("");

  console.log(window.location.pathname);
  const movie_id = window.location.pathname.substring(6);
  console.log(prop);
  const decodedToken = jwt_decode(prop.Token);
  console.log(decodedToken.user.id);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submitted");
    setComments("");
    try {
      console.log(movie_id, decodedToken.user.id, comments);
      const response = await api.post("/api/movies/add_comment", {
        ID: movie_id,
        UserId: decodedToken.user.id,
        Comments: comments,
      });
      console.log("response: ", response);
    } catch (err) {
      console.error(err);
    }
  };

  const [Moviedata, setData] = useState("");
  async function movie_data() {
    try {
      const res = await api.post("/api/movies/get_comment", { ID: movie_id });
      setData(res);
      console.log(Moviedata.data.Movie_Name);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    movie_data();
  }, [handleSubmit]);

  return (
    <div className="Main-Container">
      <div className="Main">
        <h2>Movie Name: {Moviedata?.data?.Movie_Name}</h2>
      </div>
      <div style={{ color: "white" }}>
        {Moviedata?.data?.Comments?.map((d) => (
          <div className="CommentStyle">
            <div className="userName">{d?.userId?.username}:</div>
            <div>{d.comment}</div>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          Comment:
          <input
            type="text"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </label>
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Details;
