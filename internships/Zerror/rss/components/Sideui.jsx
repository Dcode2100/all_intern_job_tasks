import React,{useState} from "react";
import Image from "next/image";

const sideui = [
  { title: "VOLUNTEER WITH US", icon: "/favicon.ico", link: "/" },
  { title: "PRESS RELEASES", icon: "/favicon.ico", link: "/" },
  { title: "NATIONAL HERALD", icon: "/favicon.ico", link: "/" },
  { title: "MANIFESTO", icon: "/favicon.ico", link: "/" },
];
const Sideui = () => {
  const [active, setActive] = useState(false);

  
  return (
    <div className="sideui">
      <div  className="sideui-container">
        <ul>
          {sideui.map((item, index) => {
            return (
              <li key={index}>
                <a className="sideui-a-container">
                  <div className="sideui-img">
                    <Image src={`${item.icon}`} fill alt="img1" />
                  </div>
                  <div className="sideui-title">
                    <h3>{item.title}</h3>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sideui;
