import { useState } from "react";
import FootIcon from "./FootIcon";
import { Stack } from "react-bootstrap";
import styles from "./Sidebar.module.css";
// import "./variables.css";
import HamburgerIcon from "@/assets/HamburgerClicked.svg";
import HamburgerIconNotClicked from "@/assets/HamburgerIsNotClicked.svg";
import PersonIconIsClicked from "@/assets/PersonIconIsClicked.svg";
import PersonIconIsNotClicked from "@/assets/PersonIconNotClicked.svg"

const Sidebar = () => {
  const [hamburgerIsClicked, setHamburgerIsClicked] = useState<boolean>(false);
  const [personIsClicked, setPersonIsClicked] = useState<boolean>(false);

  const handleHamClick = ()=>{
    setHamburgerIsClicked(true)
    setPersonIsClicked(false)

  }

  const handlePersonClick = ()=>{
    setPersonIsClicked(true)
    setHamburgerIsClicked(false)
  }

  return (
    <div
      className={styles.Sidebar}
      style={{
        height: "100vh",
        width: "60px",
        padding: "0px",
        margin: "0px",
        background: "#111",
      }}
    >
      <div className={styles.icon}>
        <FootIcon />
      </div>

      <Stack gap ={4} className ={styles.sidebarIcons} >
        <div onClick={handleHamClick}>
          {" "}
          <img
            src={
              hamburgerIsClicked && !personIsClicked
                ? HamburgerIcon : HamburgerIconNotClicked
            }
            alt="Hamburger Icon"
          />
        </div>

        <div onClick={handlePersonClick}>
          {" "}
          <img
            src={
              personIsClicked && !hamburgerIsClicked
                ? PersonIconIsClicked
                : PersonIconIsNotClicked
            }
            alt="Hamburger Icon"
          />
        </div>

        
      </Stack>
    </div>
  );
};

export default Sidebar;
