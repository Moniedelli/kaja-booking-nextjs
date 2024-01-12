import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import Body from "./components/body/body";
import FooterComponent from "./components/footer/footer";

export default function Home() {
  return (
    <ClientOnly>
      <Container>
        <div className="flex flex-col justify-start  mx-auto">
          <Body />
          <FooterComponent />
        </div>
      </Container>
    </ClientOnly>
  )
}
