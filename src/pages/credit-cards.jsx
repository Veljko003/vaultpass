// Imports
import Link from "next/link"

import HeadPage from "@/web/components/HeadPage"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Sidebar from "@/web/components/Sidebar"
import ThemeSwitchButton from "@/web/components/ThemeSwitchButton"
import Button from "@/web/components/Button"

// CreditCards function
const CreditCards = () => {
    return (
        <>
            <HeadPage />
            <Main>
                <ThemeSwitchButton />
                <Sidebar />
                <br />
                <Link href="/formPages/creditCardForm"><Button btnLabel="Add credit card" /></Link>
            </Main>
            <Footer />
        </>
    )
}

export default CreditCards