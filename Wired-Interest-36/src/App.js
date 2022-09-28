import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AllRoutes from './Pages/AllRoutes';
import Discussion from './Pages/Discussion';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      
      <h2>App.js</h2>
      <Footer />
    </div>
  );
}

export default App;
