import styles from "./WorkExperience.module.css";
import JobRoleCards from "./JobRoleCards";
import { useContext } from "react";
import { MyContext } from "../store/my-store";

const WorkExperience = () => {
  const { jobRoles } = useContext(MyContext);

  return (
    <div className={styles.workExperienceContainer}>
      <h2 style={{ textAlign: "center", marginTop: "46px" }}>
        BANK OF AMERICA
      </h2>
      <div className={styles.cardsDiv}>
        {jobRoles.map((role) => (
          <JobRoleCards key={role.designation} role={role} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
