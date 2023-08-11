// Imports
import styles from "@/web/styles/Form.module.css";
import HeadPage from "@/web/components/HeadPage";
import Main from "@/web/components/Main";
import Footer from "@/web/components/Footer";
import Sidebar from "@/web/components/Sidebar";
import ThemeSwitchButton from "@/web/components/ThemeSwitchButton";
import Button from "@/web/components/Button";

// SecureNoteForm function
const SecureNoteForm = () => {
  return (
    <>
      <HeadPage />
      <Main>
        <ThemeSwitchButton />
        <Sidebar />
      </Main>
      <Footer />
    </>
  );
};

export default SecureNoteForm;
