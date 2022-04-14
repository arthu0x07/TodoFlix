import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { MainBanner } from "../../components/MainBanner";
  
export function Home() {
  return (
    <>
      <Wrapper>
        <Header />
        <MainBanner />
      </Wrapper>
    </>
  );
}
