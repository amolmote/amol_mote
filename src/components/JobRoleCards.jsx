import styles from "./JobRoleCards.module.css";

const JobRoleCards = ({ role }) => {
  return (
    <div className={styles.card}>
      <h4>{role.designation}</h4>
      <p>
        Date: {role.dateFrom} - {role.dateTill}
      </p>
      <p>{role.summaryAboutRole}</p>
    </div>
  );
};

export default JobRoleCards;
