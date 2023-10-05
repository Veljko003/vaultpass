// Imports
import Link from "next/link";

import HeadPage from "@/web/components/HeadPage";
import Main from "@/web/components/Main";
import Sidebar from "@/web/components/Sidebar";
import Button from "@/web/components/Button";
import DescriptionParagraph from "@/web/components/DescriptionParagraph";
import ListContainer from "@/web/components/ListContainer";

// Passwords function
const Passwords = () => {
  return (
    <>
      <HeadPage />
      <Main>
        <Sidebar />
        <br />
        <Link href="/formPages/passwordForm"><Button btnLabel="Add password" /></Link>
        <DescriptionParagraph>Save and protect your passwords for various accounts.</DescriptionParagraph>
        <ListContainer></ListContainer>
      </Main>
    </>
  );
};

export default Passwords;
