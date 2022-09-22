import Sidebar from "./Sidebar";
const Side=()=>{
    const menu = [
        {
          title: "Home"
        },
        {
          title: "Services",
          subItems: ["Cooking", "Cleaning"]
        },
        {
          title: "Contact",
          subItems: ["Cooking", "Cleaning"]
        }
    ];
    return(
        <>
        <Sidebar items={menu}></Sidebar>
        </>
    )
}
export default Side