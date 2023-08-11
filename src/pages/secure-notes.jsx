// Imports
import Link from "next/link"

import HeadPage from "@/web/components/HeadPage"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Sidebar from "@/web/components/Sidebar"
import ThemeSwitchButton from "@/web/components/ThemeSwitchButton"
import Button from "@/web/components/Button"

// SecureNotes function
const SecureNotes = () => {
    return (
        <>
            <HeadPage />
            <Main>
                <ThemeSwitchButton />
                <Sidebar />
                <br />
                <Link href="/formPages/secureNoteForm"><Button btnLabel="Add secure note" /></Link>
            </Main>
            <Footer />
        </>
    )
}

export default SecureNotes