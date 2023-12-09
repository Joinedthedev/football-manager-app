
import styles from "@/styles/Button.module.css";
import { on } from "events";
type PrimaryButtonProps = {
  text: string;
  onClick: ()=>void
};

const PrimaryButton = ({ text, onClick}: PrimaryButtonProps) => {
  return <button onClick={onClick} className={styles.buttonPrimaryStyles}>{text}</button>;
};

export default PrimaryButton;
