// Imports
import HeadPage from "@/web/components/HeadPage"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Sidebar from "@/web/components/Sidebar"

// PasswordStrengthChecker function
const PasswordStrengthChecker = () => {
    return (
        <>
            <HeadPage />
            <Main>
                <Sidebar />
            </Main>
            <Footer />
        </>
    )
}

export default PasswordStrengthChecker