import React from "react";
import "./templates.css";

import skin1 from "../static/images/skin1.svg"
import skin2 from "../static/images/skin2.svg"
import skin3 from "../static/images/skin3.svg"
import skin4 from "../static/images/skin4.svg"



const Templates = () => {
  return (
    <div className="templates">

      <div className="template-intro">
        <h1>Select a template to get started</h1>
        <p>You can edit and change the template later</p>
      </div>

      <div className="template-styles">

        <div className="template">
          <img src={skin1} alt="" />
          <button className="template-btn">USE TEMPLATE</button>
        </div>

        <div className="template">
        <img src={skin2} alt="" />
        <button className="template-btn">USE TEMPLATE</button>
        </div>

        <div className="template">
        <img src={skin3} alt="" />
        <button className="template-btn">USE TEMPLATE</button>
        </div>

        <div className="template">
        <img src={skin4} alt="" />
        <button className="template-btn">USE TEMPLATE</button>
        </div>

      </div>

    </div>
  );
};

export default Templates;
