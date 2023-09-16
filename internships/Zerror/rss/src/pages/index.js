import Vision from "components/about/Vision";
import Footer from "components/Footer";
import Achievementshome from "components/Home/Achievementshome";
import Header from "../../components/header/Header";
import Wingcarousel from "../../components/Wingcarousel";
import Carouselhome from "../../components/Home/Carouselhome";
import Galleryhome from "../../components/Home/Galleryhome";
import Aboutushome from "../../components/Home/Aboutushome";
import Sideui from "components/Sideui";
import HSideui from "components/HSideui";
import Keycarousel from "components/Home/Keycarousel";
import Videosection from "components/Home/Videosection";
export default function Home() {
  return (
    <>
      <div>
        <div className="about-header">
          <Header />
        </div>
        

        <div style={{ marginTop: "5.3rem" }}>
          <Carouselhome />
        </div>

        <Aboutushome />
        <HSideui />

        <Wingcarousel />
        <Videosection/>
        <Achievementshome />

        <Galleryhome />
        <Footer />
      </div>
    </>
  );
}
