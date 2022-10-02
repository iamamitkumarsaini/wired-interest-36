import DiscussionPageTop from "../Components/Discussion1";
import FacilitesSection from "../Components/Discussion2";
import MoreWithDiscussion from "../Components/Discussion3";
import Footer from "../Components/Footer";
import DiffPlatforms from "../Components/Home2";
import Unification from "../Components/Home6";
import RotatingDIvs from "../Components/Home7";
import SignupBox from "../Components/Home8";
import WaveLine from "../Components/Home9";
import Navbar from "../Components/Navbar";

function Discussion () {

    return(
        <div>
           <Navbar />
           <DiscussionPageTop />
           <FacilitesSection />
           <DiffPlatforms />
           <MoreWithDiscussion />
           <RotatingDIvs />
           <Unification />
           <SignupBox />
           <WaveLine />
           <Footer />
        </div>
    )
}

export default Discussion;