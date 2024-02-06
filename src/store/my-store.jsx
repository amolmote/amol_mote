import { createContext } from "react";

export const MyContext = createContext({ jobRoles: [], certificates: [] });

const JobRoleContextProvider = ({ children }) => {
  const jobRoles = [
    {
      designation: "Sr. Tech Associate",
      dateFrom: "July 2022",
      dateTill: "July 2023",
      summaryAboutRole:
        "As a Senior Technical Associate, I began by focusing on DevOps-related tasks, specifically managing deployment changes in the CI/CD pipeline and making updates to Ansible playbooks. During a brief period, I worked with Scala, where I developed a REST API service that is currently running smoothly in the production environment. Subsequently, I transitioned to working with Java, contributing to various projects within the organization.",
    },
    {
      designation: "Software Engineer 1B",
      dateFrom: "July 2023",
      dateTill: "Jan 2024",
      summaryAboutRole:
        "In my role as a Software Engineer 1B, I undertook the responsibility of a Java Spring-based project, working independently as the sole contributor. My tasks involve the seamless handover and maintenance of the project, including updating vulnerable versions and implementing necessary code fixes. I manage the entire development cycle, from making changes to testing in the UAT environment and finally releasing the updates to the production environment. This role demands a comprehensive and end-to-end approach to ensure the project's integrity and functionality.",
    },
    {
      designation: "Officer; Software Engineer 1B",
      dateFrom: "Jan 2024",
      dateTill: "Present",
      summaryAboutRole:
        "Recognizing my increased responsibilities in maintaining a critical Java Spring-based application. As the sole contributor to the project, I have taken charge of overseeing the entire development cycle. This includes addressing production issues, updating vulnerable versions, and implementing necessary code fixes. My comprehensive approach involves making changes, rigorous testing in the UAT environment, and releasing updates to the production environment. This designation shift reflects the pivotal role I play in ensuring the reliability and functionality of the application.",
    },
  ];

  const certificates = [
    {
      certTitle: "Azure Fundamentals (AZ-900)",
      issuedBy: "Microsoft",
      issuedDate: "Sep 2022",
    },
    {
      certTitle: "Kubernetes and Cloud Native Associate (KCNA)",
      issuedBy: "Cloud Native Computing Foundation (CNCF)",
      issuedDate: "Dec 2022",
    },
  ];
  return (
    <MyContext.Provider value={{ jobRoles, certificates }}>
      {children}
    </MyContext.Provider>
  );
};

export default JobRoleContextProvider;
