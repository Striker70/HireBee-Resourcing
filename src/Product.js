import { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Display from "./Display";
export default function App() {
  const [data, setdata] = useState([]);
  const [send, setSend] = useState();
  console.log(data);
  const url = "https://upayments-studycase-api.herokuapp.com/api/products";
  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1Ymhhc2lzcGFkaHkzN0BnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vU3RyaWtlcjcwIiwiaWF0IjoxNjYzMzMwMzg3LCJleHAiOjE2NjM3NjIzODd9.yTqOtMZ2e3efv6y18p_Jj66YGArCuRGtWIfOyIu-_ao";
    axios
      .get(url, { headers: { Authorization: `Bearer ${token}` } })

      .then((res) => setdata(res.data.products))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {!send &&
        data.map((e) => {
          return (
            <div class="card" style={{ width: "18px" }}>
              <img
                class="card-img-top"
                src={e.avatar}
                alt="Card image cap"
                style={{ width: "150px" }}
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <button onClick={() => setSend(e)}>Click me</button>
              </div>
            </div>
          );
        })}
      {send && <Display item={send} />}
    </div>
  );
}
