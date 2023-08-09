// Imports
import HeadPage from "@/web/components/HeadPage";
import Main from "@/web/components/Main";
import Footer from "@/web/components/Footer";
import Sidebar from "@/web/components/Sidebar";
import ThemeSwitchButton from "@/web/components/ThemeSwitchButton";
import Button from "@/web/components/Button";

// Passwords function
const Passwords = () => {
  return (
    <>
      <HeadPage />
      <Main>
        <ThemeSwitchButton />
        <Sidebar />
        <br />
        <Button btnLabel="Add password" />
      </Main>
      <Footer />
    </>
  );
};

export default Passwords;
