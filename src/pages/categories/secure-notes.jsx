// Imports
import Link from "next/link"

import Main from "@/web/components/Main"
import Sidebar from "@/web/components/ui/Sidebar"
import Button from "@/web/components/ui/buttons/Button"
import DescriptionParagraph from "@/web/components/ui/DescriptionParagraph"
import ListContainer from "@/web/components/ui/containers/ListContainer"

// SecureNotes function
const SecureNotes = () => (
  <>
    <Main>
      <Sidebar />
      <br />
      <Link href="/form-pages/secureNoteForm">
        <Button btnLabel="Add secure note" />
      </Link>
      <DescriptionParagraph>
        Jot down a Wi-Fi code, office security alarm code or your friend&apos;s
        birthday.
      </DescriptionParagraph>
      <ListContainer></ListContainer>
    </Main>
  </>
)

export default SecureNotes
