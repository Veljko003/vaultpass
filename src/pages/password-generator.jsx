// Imports
import HeadPage from "@/web/components/HeadPage"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Sidebar from "@/web/components/Sidebar"

// PasswordGenerator function
const PasswordGenerator = () => {
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

export default PasswordGenerator