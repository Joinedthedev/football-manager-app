
import styles from "@/styles/Button.module.css";

type PrimaryButtonProps = {
  text: string;
  onClick: ()=>void
  
  
};

const PrimaryButton = ({ text, onClick,}: PrimaryButtonProps) => {
  return <button type={"submit"} onClick={onClick} className={styles.buttonPrimaryStyles}>{text}</button>;
};

export default PrimaryButton;
