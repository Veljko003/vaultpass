// Imports
import Link from "next/link"

import HeadPage from "@/web/components/HeadPage"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Sidebar from "@/web/components/Sidebar"
import Button from "@/web/components/Button"
import DescriptionParagraph from "@/web/components/DescriptionParagraph"

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
            </Main>
            <Footer />
        </>
    )
}

export default PersonalInfo