
import styles from "@/styles/Button.module.css";
type WarningButtonProps = {
  text: string;
  onClick: ()=>void;
  
};

const WarningButton = ({ text, onClick }: WarningButtonProps) => {
  return <button onClick={onClick} className={styles.buttonWarningStyles}>{text}</button>;
};

export default WarningButton;
