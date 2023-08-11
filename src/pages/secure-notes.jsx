// Imports
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
                <Button btnLabel="Add secure note" />
            </Main>
            <Footer />
        </>
    )
}

export default SecureNotes