import React from "react";

function Companies(props) {
  return (
    <div className="companies">
      {/* <span className='title'>Companies</span> */}
      <div className="companies-container">
        <div className="companies-item">
            <img src={props.img} alt="" />
          <h2 className="companies-name">Name Company: <br /> {props.name}</h2>
          <h3 className="companies-Number-Employees">
            Number of Employees: <br /> {props.NumberEmployees}
          </h3>
          <h3 className="companies-exp">
            Year Founded:
            <br />
            {props.exp}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Companies;
