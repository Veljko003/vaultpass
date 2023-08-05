// Imports
import HeadPage from "@/web/components/HeadPage"
import Title from "@/web/components/Title"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Container from "@/web/components/Container"
import Button from "@/web/components/Button"

// Welcome function
export default function Welcome() {
  return (
      <>
        <HeadPage pageTitle="VaultPass" />
        <Main>
          <Container>
              <Title titleLabel="VaultPass" />
              <Button btnLabel="Button" />
          </Container>
        </Main>
        <Footer />
      </>
  )
}