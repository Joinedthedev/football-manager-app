import { useState } from "react";
import FootIcon from "./FootIcon";
import { Stack } from "react-bootstrap";
import styles from "@/styles/Sidebar.module.css";
// import "./variables.css";
import HamburgerIcon from "@/assets/HamburgerClicked.svg";
import HamburgerIconNotClicked from "@/assets/HamburgerIsNotClicked.svg";
import PersonIconIsClicked from "@/assets/PersonIconIsClicked.svg";
import PersonIconIsNotClicked from "@/assets/PersonIconNotClicked.svg";

const Sidebar = () => {
/** State variables that handle our icon states */
  const [hamburgerIsClicked, setHamburgerIsClicked] = useState<boolean>(false);
  const [personIsClicked, setPersonIsClicked] = useState<boolean>(false);

  /**This function handles our hamburger icon. It ensures that it'll be highlighted only when it's clicked*
   * and the person icon isn't clicked
   */
  const handleHamClick = () => {
    setHamburgerIsClicked(true);
    setPersonIsClicked(false);
  };

  /**This function handles our person icon. It ensures that it'll be highlighted only when it's clicked*
   * and the hamburger icon isn't clicked.
   */
  const handlePersonClick = () => {
    setPersonIsClicked(true);
    setHamburgerIsClicked(false);
  };

  return (
    <div
    //Side bar styles for left sidebar
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

{/** Essentially what the divs below do is check which icon is clicke then swap them based on that.
 *  if hamburger is clicked and the person icon is not clicked, swap the icons and vice versa
 * i opted to swap the icons to instead of styling because:
 * 1. keep the design as accurate as possible
 * 2. it was much easier & efficient this way based on my current knowledge
 * 
 */}
      <div className={styles.sidebarIcons}>
        <div onClick={handleHamClick}>
          {" "}
          <img
            src={
              hamburgerIsClicked && !personIsClicked
                ? HamburgerIcon
                : HamburgerIconNotClicked
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
            alt="Person Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
