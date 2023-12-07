import styles from "@/styles/Button.module.css";
type SecondaryButtonProps = {
  text: string;
};

const SecondaryButton = ({ text }: SecondaryButtonProps) => {
  return <button className={styles.buttonSecondaryStyles}>{text}</button>;
};

export default SecondaryButton;
