// Imports
import Link from "next/link";

import HeadPage from "@/web/components/HeadPage";
import Main from "@/web/components/Main";
import Sidebar from "@/web/components/ui/Sidebar";
import Button from "@/web/components/ui/buttons/Button";
import DescriptionParagraph from "@/web/components/ui/DescriptionParagraph";
import ListContainer from "@/web/components/ui/containers/ListContainer";

// Passwords function
const Passwords = () => {
  return (
    <>
      <HeadPage />
      <Main>
        <Sidebar />
        <br />
        <Link href="/form-pages/passwordForm"><Button btnLabel="Add password" /></Link>
        <DescriptionParagraph>Save and protect your passwords for various accounts.</DescriptionParagraph>
        <ListContainer></ListContainer>
      </Main>
    </>
  );
};

export default Passwords;
