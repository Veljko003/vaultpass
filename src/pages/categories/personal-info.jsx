// Imports
import Link from "next/link"

import Main from "@/web/components/Main"
import Sidebar from "@/web/components/ui/Sidebar"
import Button from "@/web/components/ui/buttons/Button"
import DescriptionParagraph from "@/web/components/ui/DescriptionParagraph"
import ListContainer from "@/web/components/ui/containers/ListContainer"

// PersonalInfo function
const PersonalInfo = () => (
  <>
    <Main>
      <Sidebar />
      <br />
      <Link href="/form-pages/personalInfoForm">
        <Button btnLabel="Add personal info" />
      </Link>
      <DescriptionParagraph>
        Save your address, contact and personal info to fill registration forms
        quickly.
      </DescriptionParagraph>
      <ListContainer></ListContainer>
    </Main>
  </>
)

export default PersonalInfo
