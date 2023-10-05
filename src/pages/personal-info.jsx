// Imports
import Link from "next/link"

import HeadPage from "@/web/components/HeadPage"
import Main from "@/web/components/Main"
import Sidebar from "@/web/components/Sidebar"
import Button from "@/web/components/Button"
import DescriptionParagraph from "@/web/components/DescriptionParagraph"
import ListContainer from "@/web/components/ListContainer"

// PersonalInfo function
const PersonalInfo = () => {
    return (
        <>
            <HeadPage />
            <Main>
                <Sidebar />
                <br />
                <Link href="/formPages/personalInfoForm"><Button btnLabel="Add personal info" /></Link>
                <DescriptionParagraph>Save your address, contact and personal info to fill registration forms quickly.</DescriptionParagraph>
                <ListContainer></ListContainer>
            </Main>
        </>
    )
}

export default PersonalInfo