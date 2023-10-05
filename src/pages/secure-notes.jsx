// Imports
import Link from "next/link"

import HeadPage from "@/web/components/HeadPage"
import Main from "@/web/components/Main"
import Sidebar from "@/web/components/Sidebar"
import Button from "@/web/components/Button"
import DescriptionParagraph from "@/web/components/DescriptionParagraph"
import ListContainer from "@/web/components/ListContainer"

// SecureNotes function
const SecureNotes = () => {
    return (
        <>
            <HeadPage />
            <Main>
                <Sidebar />
                <br />
                <Link href="/formPages/secureNoteForm"><Button btnLabel="Add secure note" /></Link>
                <DescriptionParagraph>Jot down a Wi-Fi code, office security alarm code or your friend&apos;s birthday.</DescriptionParagraph>
                <ListContainer></ListContainer>
            </Main>
        </>
    )
}

export default SecureNotes