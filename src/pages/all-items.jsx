// Imports
import HeadPage from "@/web/components/HeadPage"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Sidebar from "@/web/components/Sidebar"

// AllItems function
const AllItems = () => {
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

export default AllItems