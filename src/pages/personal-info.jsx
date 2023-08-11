// Imports
import HeadPage from "@/web/components/HeadPage"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Sidebar from "@/web/components/Sidebar"
import ThemeSwitchButton from "@/web/components/ThemeSwitchButton"
import Button from "@/web/components/Button"

// PersonalInfo function
const PersonalInfo = () => {
    return (
        <>
            <HeadPage />
            <Main>
                <ThemeSwitchButton />
                <Sidebar />
                <br />
                <Button btnLabel="Add personal info" />
            </Main>
            <Footer />
        </>
    )
}

export default PersonalInfo