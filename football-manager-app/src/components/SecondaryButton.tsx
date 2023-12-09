import styles from "@/styles/Button.module.css";
type SecondaryButtonProps = {
  text: string;
  onClick: ()=>void
};

const SecondaryButton = ({ onClick, text }: SecondaryButtonProps) => {
  return <button onClick={onClick} className={styles.buttonSecondaryStyles}>{text}</button>;
};

export default SecondaryButton;
