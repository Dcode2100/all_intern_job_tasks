import Image from "next/image";
import React from "react";
import { GiReceiveMoney } from "react-icons/gi";

const Dubmenu = ({ items }) => {
  return (
    <div className="dubmenu">
      <div className="dubmenu-top">
        <ul className="dubmenu-top-left">
          {items.submenu &&
            items.submenu.map((item, index) => {
              return (
                <li className="box" key={index}>
                  <h4 className="box-heading">{item.heading}</h4>
                  <ul style={{ listStyle: "none" }}>
                    <li className="box-item-container" key={index}>
                      {item.dubmenu.map((itm, index) => {
                        return (
                          <li>
                            <a
                              className="box-items t3"
                              key={index}
                              href={itm.path}
                            >
                              {itm.title}
                            </a>
                          </li>
                        );
                      })}
                    </li>
                  </ul>
                </li>
              );
            })}
        </ul>
        <div className="dubmenu-top-right flex-all">
          <div className="dubmenu-top-right-img">
            <Image
              src="/gallery/galleryimg1.JPG"
              fill
              priority
              alt="dropimage"
            ></Image>
          </div>
        </div>
      </div>
      <div className="dubmenu-bottom">
        <a href="/contribute">
          <GiReceiveMoney
            style={{ color: "var(--primary-color)", fontSize: "1.2rem" }}
          />
          <p>CONTRIBUTE TO RSS </p>
        </a>
      </div>
    </div>
  );
};

export default Dubmenu;
