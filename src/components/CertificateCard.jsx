import styles from "./CertificateCard.module.css";
import { SiKubernetes } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";

const CertificateCard = ({ certificate }) => {
  return (
    <>
      <div className={styles.card}>
        <h4>{certificate.certTitle}</h4>
        <p>Issue By: {certificate.issuedBy}</p>
        <p>Issue Date: {certificate.issuedDate}</p>
        {certificate.certTitle.includes(
          "Kubernetes and Cloud Native Associate (KCNA)"
        ) ? (
          <a href="https://www.credly.com/badges/6b220de6-2459-474c-a8f6-dd1a71707aaf/public_url">
            <SiKubernetes />
          </a>
        ) : (
          <a href="https://www.credly.com/badges/43001e25-ce54-4c91-a89b-5c6a70df739b/email">
            <SiMicrosoftazure />
          </a>
        )}
      </div>
    </>
  );
};

export default CertificateCard;
