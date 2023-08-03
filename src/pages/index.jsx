// Imports
import HeadPage from "@/web/components/HeadPage"
import Title from "@/web/components/Title"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Container from "@/web/components/Container"

// Welcome function
export default function Welcome() {
  return (
      <>
        <HeadPage pageTitle="VaultPass" />
        <Main>
          <Container>
              <Title titleLabel="VaultPass" />
          </Container>
        </Main>
        <Footer />
      </>
  )
}