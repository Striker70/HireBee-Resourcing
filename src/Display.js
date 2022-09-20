import React from "react";
export default function Display(props) {
  let display = props.item;
  return (
    <>
      {display && (
        <div
          class="card"
          style={{ width: "18rem;", border: "1px solid black" }}
        >
          <img
            className="card-img-top"
            src={display.avatar}
            alt="Card image cap"
            style={{ width: "150px" }}
          />
          <div className="card-body">
            <span className="card-text">{display.name}</span>
            <br />
            <span>description:{display.description}</span>
            <br />
            <span>price:{display.price}</span>
            <br />
            <span>category:{display.category}</span>
            <br />
            <span>developerEmail{display.developerEmail}</span>
          </div>
        </div>
      )}
    </>
  );
}
