import React from "react";

function Programers(props) {
  return (
    <div className="programers">
      {/* <span className='title'>Programers</span> */}
      <div className="programers-container">
        <div className="programers-item">
          <h2 className="programers-name">
            Name Programer: <br />
            {props.name}
          </h2>
          <h3 className="programers-program-lang">
            Programming Language: <br /> {props.lang}
          </h3>
          <h3 className="programers-program-exp">
            Years of Experience:
            {props.exp}
          </h3>
          <h3 className="programers-program-comp">
            Company:
            {props.comp}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Programers;
