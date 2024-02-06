import { useContext } from "react";
import CertificateCard from "./CertificateCard";
import styles from "./CertificationContainer.module.css";
import { MyContext } from "../store/my-store";
const CertificationContainer = () => {
  const { certificates } = useContext(MyContext);
  return (
    <div className={styles.certContainer}>
      <h2 style={{ textAlign: "center" }}>CERTIFICATION</h2>
      <div className={styles.cardsDiv}>
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.certTitle}
            certificate={certificate}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificationContainer;
