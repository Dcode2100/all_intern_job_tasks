import "@/styles/globals.css";
import "../styles/header.scss";
import "../styles/menuitems.scss";
import "../styles/dropdown.scss";
import "../styles/dubmenu.scss";
import "../styles/form.scss";
import "../styles/btn.scss";
import "../styles/cover.scss";
import "../styles/wing.scss";
import "../styles/gallery.scss";
import '../styles/slickcarousal.css'
import "../styles/footer.scss";
import "../styles/sideui.scss";
import "../styles/bam.scss";
import "../styles/admin.scss";
import "../styles/address.scss";
import "../styles/wingcarousel.scss";
import "../styles/about/ourstory.scss";
import "../styles/about/leadership.scss";
import "../styles/about/about.scss";
import "../styles/about/membercard.scss";
import "../styles/about/vision.scss"
import "../styles/home/carouselhome.scss"
import "../styles/home/achievementshome.scss"
import "../styles/home/hsideui.scss"
import "../styles/contribute.scss"
import "../styles/home/Aboutushome.scss"
import "../styles/home/videosection.scss"
import Cover from "components/Cover";

export default function App({ Component, pageProps }) {
  
  return (
    <div>
      <Cover/>
      <Component {...pageProps} />
      
    </div>
  );
}
