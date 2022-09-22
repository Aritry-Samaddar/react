import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useState } from "react";
export default function Sidebar({ items }) {
  const [flag, setFlag] = useState("");
  const handle = (title) => {
    setFlag(title);
  };
  return (
    <div>
        {console.log("flag",flag)}
      {items.map((item) => (
        <ul>
          <>
            {item.title}
            {item.subItems ?<>{
                flag === item.title ? 
                <RiArrowDropUpLine
                style={{
                  fontSize: "190%",
                  position: "absolute",
                  marginTop: "-6px",
                  cursor: "pointer"
                }}
                onClick={()=>handle("")}
              ></RiArrowDropUpLine> 
              : 
              <RiArrowDropDownLine
              style={{
                fontSize: "190%",
                position: "absolute",
                marginTop: "-6px",
                cursor: "pointer"
              }}
              onClick={()=>handle(item.title)}
            ></RiArrowDropDownLine>
            }</> : <></>
            }
          </>
          {item.subItems && flag===item.title ? 
            <>
              {item.subItems.map((item) => (
                <li style={{ marginLeft: "50px" }}>{item}</li>
              ))}
            </>
           : 
            <></>
          }
        </ul>
      ))}
    </div>
  );
}