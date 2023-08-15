// Imports
import Link from "next/link"

import HeadPage from "@/web/components/HeadPage"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Sidebar from "@/web/components/Sidebar"
import Button from "@/web/components/Button"

// PersonalInfo function
const PersonalInfo = () => {
    return (
        <>
            <HeadPage />
            <Main>
                <Sidebar />
                <br />
                <Link href="/formPages/personalInfoForm"><Button btnLabel="Add personal info" /></Link>
            </Main>
            <Footer />
        </>
    )
}

export default PersonalInfo