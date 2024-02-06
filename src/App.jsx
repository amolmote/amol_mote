import AboutPage from "./components/AboutPage";
import Navbar from "./components/Navbar";
import "./App.css";
import WorkExperience from "./components/WorkExperience";
import JobRoleContextProvider from "./store/my-store";
import CertificationContainer from "./components/CertificationContainer";
import Resume from "./components/Resume";

export default function App() {
  return (
    <JobRoleContextProvider className="App">
      <Navbar />
      <section id="about">
        <AboutPage />
      </section>
      <section id="work">
        <WorkExperience />
      </section>
      <section id="certifications">
        <CertificationContainer />
      </section>
      <section id="resume">
        <Resume />
      </section>
    </JobRoleContextProvider>
  );
}
