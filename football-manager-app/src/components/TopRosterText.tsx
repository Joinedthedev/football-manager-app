import styles from "@/styles/RosterSection.module.css";
type TopRosterTextsProps ={
    text:string;
}
const TopRosterText = ({text}:TopRosterTextsProps) => {
  return (
    <p className={styles.rosterDetailsText}>{text}</p>
  )
}

export default TopRosterText