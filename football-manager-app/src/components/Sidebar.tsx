import { useState } from "react";
import FootIcon from "../assets/component-assets/FootIcon";
import { Stack } from "react-bootstrap";
import styles from "@/styles/Sidebar.module.css";
// import "./variables.css";
import HamburgerIsClickedIcon from "../assets/component-assets/HamburgerIsClickedIcon";
import HamburgerIsNotClicked from "../assets/component-assets/HamburgerIsNotClicked";
import PersonIconIsClicked from "../assets/component-assets/PersonIconIsClicked";
import PersonIconIsNotClicked from "../assets/component-assets/PersonIconIsNotClicked";

const Sidebar = () => {
  /** State variables that handle our icon states */
  const [hamburgerIsClicked, setHamburgerIsClicked] = useState<boolean>(true);
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
      className={styles.sidebar}
      
    >
      <div className={styles.icon}>
        <FootIcon />
      </div>

      {/** Essentially what the divs below do is check which icon is clicked then swap them based on that.
       *  if hamburger is clicked and the person icon is not clicked, swap the icons and vice versa
       * i opted to swap the icons to instead of styling because:
       * 1. keep the design as accurate as possible
       * 2. it was much easier & efficient this way based on my current knowledge
       *
       */}
      <div className={styles.sidebarIcons}>
        <div onClick={handleHamClick}>
          {hamburgerIsClicked && !personIsClicked ? (
            <HamburgerIsClickedIcon />
          ) : (
            <HamburgerIsNotClicked />
          )}
        </div>

        <div onClick={handlePersonClick}>
          {personIsClicked && !hamburgerIsClicked ? (
            <PersonIconIsClicked />
          ) : (
            <PersonIconIsNotClicked />
          )}
       
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
