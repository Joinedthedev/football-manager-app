
import styles from "@/styles/Button.module.css";
type PrimaryButtonProps = {
  text: string;
};

const PrimaryButton = ({ text }: PrimaryButtonProps) => {
  return <button className={styles.buttonPrimaryStyles}>{text}</button>;
};

export default PrimaryButton;
