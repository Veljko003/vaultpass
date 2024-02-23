// Imports
import Link from "next/link"

import Main from "@/web/components/Main"
import Sidebar from "@/web/components/ui/Sidebar"
import Button from "@/web/components/ui/buttons/Button"
import DescriptionParagraph from "@/web/components/ui/DescriptionParagraph"
import ListContainer from "@/web/components/ui/containers/ListContainer"

// CreditCards function
const CreditCards = () => (
  <>
    <Main>
      <Sidebar />
      <br />
      <Link href="/form-pages/creditCardForm">
        <Button btnLabel="Add credit card" />
      </Link>
      <DescriptionParagraph>
        Save your credit card information to pay quickly and without rewritting
        over and over again.
      </DescriptionParagraph>
      <ListContainer></ListContainer>
    </Main>
  </>
)

export default CreditCards
