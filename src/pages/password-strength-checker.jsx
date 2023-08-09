// Imports
import HeadPage from "@/web/components/HeadPage"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Sidebar from "@/web/components/Sidebar"
import ThemeSwitchButton from "@/web/components/ThemeSwitchButton"

// PasswordStrengthChecker function
const PasswordStrengthChecker = () => {
    return (
        <>
            <HeadPage />
            <Main>
                <ThemeSwitchButton />
                <Sidebar />
            </Main>
            <Footer />
        </>
    )
}

export default PasswordStrengthChecker