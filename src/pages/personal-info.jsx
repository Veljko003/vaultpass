// Imports
import HeadPage from "@/web/components/HeadPage"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Sidebar from "@/web/components/Sidebar"

// PersonalInfo function
const PersonalInfo = () => {
    return (
        <>
            <HeadPage pageTitle="VaultPass" />
            <Main>
                <Sidebar />
            </Main>
            <Footer />
        </>
    )
}

export default PersonalInfo