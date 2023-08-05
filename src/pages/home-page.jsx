// Imports
import HeadPage from "@/web/components/HeadPage"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Sidebar from "@/web/components/Sidebar"
import Title from "@/web/components/Title"

// HomePage function
const HomePage = () => {
    return (
        <>
            <HeadPage pageTitle="VaultPass" />
            <Main>
                <Sidebar />
                <Title titleLabel="VaultPass" />
            </Main>
            <Footer />
        </>
    )
}

export default HomePage