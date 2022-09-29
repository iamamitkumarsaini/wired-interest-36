import './App.css';
import Footer from './Components/Footer';
import VideoTag from './Components/Home1';
import DiffPlatforms from './Components/Home2';
import SlidePage from './Components/Home3';
import TeamSection from './Components/Home4';
import Colorful from './Components/Home5';
import Unification from './Components/Home6';
import Navbar from './Components/Navbar';
import AllRoutes from './Pages/AllRoutes';
import Discussion from './Pages/Discussion';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      
      <h2>App.js</h2>
      <VideoTag />
      <DiffPlatforms />
      <SlidePage />
      <TeamSection />
      <Colorful />
      <Unification />
      <Footer />
    </div>
  );
}

export default App;
