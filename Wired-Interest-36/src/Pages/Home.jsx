import { Container } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import VideoTag from "../Components/Home1";
import DiffPlatforms from "../Components/Home2";
import SlidePage from "../Components/Home3";
import TeamSection from "../Components/Home4";
import Colorful from "../Components/Home5";
import Unification from "../Components/Home6";
import RotatingDIvs from "../Components/Home7";
import SignupBox from "../Components/Home8";
import WaveLine from "../Components/Home9";
import Navbar from "../Components/Navbar";


function Home () {

    return (

        <div>
             <Navbar />
            <VideoTag />
            <DiffPlatforms />
            <SlidePage />
            <TeamSection />
            <Colorful />
            <Unification />
            <RotatingDIvs />
            <SignupBox />
            <WaveLine />
            <Footer />
        </div>
    )
}

export default Home;