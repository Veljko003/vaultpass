// Imports
import HeadPage from "@/web/components/HeadPage"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Sidebar from "@/web/components/Sidebar"
import ThemeSwitchButton from "@/web/components/ThemeSwitchButton"

// AllItems function
const AllItems = () => {
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

export default AllItems