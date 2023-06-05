
import Button from './Component/Button';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import './App.css'
import Hero from './Component/Hero';
import Companies from './Component/Companies';
import Programers from './Component/Programers';
import Services from './Component/Services';

//img import
import appleImg from './assets/apple-img.jpeg'
import googleImg from './assets/google-img.jpeg'
import amazonImg from './assets/amazon-img.jpeg'

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        {/* Apple */}
        <div className="company-layout">
          <div className="company-box">
            <Companies
              img= {appleImg}
              name="Apple Inc."
              NumberEmployees="100 employees"
              exp=" 1998"
              comp=" Apple Inc."
            />
            <hr
              style={{ width: "100%", height: "3px", backgroundColor: "black" }}
            />
            <Programers name="John Doe" lang="JavaScript" exp="2" comp="apple" />
            <hr
              style={{ width: "100%", height: "3px", backgroundColor: "black" }}
            />
            <Services title="Web Development" price="100"/>
          </div>
          {/* Google */}
            <div className="company-box">
            <Companies
              img= {googleImg}
              name="Google Inc."
              NumberEmployees="500 employees"
              exp=" 1996"
              comp=" Google Inc."
            />
            <hr
              style={{ width: "100%", height: "3px", backgroundColor: "black" }}
            />
            <Programers name="Nima Doe" lang="Kotlin" exp="5" comp="Google" />
            <hr
              style={{ width: "100%", height: "3px", backgroundColor: "black" }}
            />
            <Services title="Ai Development" price="10000"/>
          </div>
          {/* Amazon */}
            <div className="company-box">
            <Companies
              img= {amazonImg}
              name="Amazon Inc."
              NumberEmployees="500 employees"
              exp=" 1996"
              comp=" Amazon Inc."
            />
            <hr
              style={{ width: "100%", height: "3px", backgroundColor: "black" }}
            />
            <Programers name="Nima Doe" lang="JavaScript" exp="5" comp="Amazon" />
            <hr
              style={{ width: "100%", height: "3px", backgroundColor: "black" }}
            />
            <Services title="Ai Development" price="10000"/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App
