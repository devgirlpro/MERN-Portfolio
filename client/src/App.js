import { BrowserRouter } from 'react-router-dom';
// import Home from './pages/Home';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import AboutMe from './pages/AboutMe';
import Tech from './pages/Tech';
// import Resume from './pages/Resume';
import Experiencess from './pages/Experiencess';
import Works from './pages/Works';
import ContactMe from './pages/ContactMe';
import StarsCanvas from './components/canvas/Stars.jsx';
import Footer from './pages/Footer';
import Loader from './components/Loader';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { SetPortfolioData, ShowLoading, HideLoading } from './redux/rootSlice';

function App() {
  //const [showLoading, setShowLoading] = useState(false);
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get('http://localhost:5000/portfolio');
      dispatch(SetPortfolioData(response.data));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      console.log(error);
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [getPortfolioData]);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <div className="relative z-0 bg-xprimary">
        <Navbar />
        {portfolioData && (
          <>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Hero />
            </div>
            <AboutMe />
            <Tech />
            <Experiencess />
            <Works />
            <div className="relative z-10">
              <ContactMe />
              <StarsCanvas />
              <Footer />
            </div>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;

// return (
//   <BrowserRouter>
//     {loading ? <Loader /> : null}
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<AboutMe />} />
//       <Route path="/exprience" element={<Experiencess />} />
//       <Route path="/project" element={<Projects />} />
//       <Route path="/course" element={<Coursess />} />
//       <Route path="/contact" element={<Contact />} />

//       <Route path="/resume" element={<Resume />} />
//       <Route path="/learn" element={<Learn />} />
//     </Routes>
//   </BrowserRouter>
// );
