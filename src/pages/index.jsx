import HeadPage from "@/web/components/HeadPage"
import Title from "@/web/components/Title"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"

export default function Welcome() {
  return (
      <>
        <HeadPage pageTitle="VaultPass" />
        <Title titleLabel="VaultPass" />
        <Main></Main>
        <Footer />
      </>
  )
}