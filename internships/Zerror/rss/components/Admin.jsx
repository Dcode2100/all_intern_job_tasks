import React, { useState } from "react";
import { GrBusinessService } from "react-icons/gr";
const Admin = () => {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
  }
  return (
    <>
      <div className="admin ">
        <div className={`navigation ${sidebar ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#">
                <span className="icon1">
                  <ion-icon name="caret-forward-outline"></ion-icon>
                </span>
                <span className="title1">RSS PARTY</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="business-outline"></ion-icon>
                </span>

                <span className="title">Business Activity</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <ion-icon name="analytics-outline"></ion-icon>
                </span>
                <span className="title">Site Activity</span>
              </a>
            </li>
          </ul>
          <div className="toggle-container">
            <div className="toggle flex-all" onClick={showSidebar}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
