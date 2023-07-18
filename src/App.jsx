import AnimatedCursor from "react-animated-cursor";
import Partner from "./components/Partner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import NavBar from "./components/Navbar";
import Team from "./components/Team";

function App() {
    return (
        <div className="relative">
            <NavBar />
            <Hero />
            <Mission />
            <Partner />
            <Team />
            <Footer />

            <div id="cursor">
                <AnimatedCursor
                    innerSize={8}
                    outerSize={35}
                    innerScale={1}
                    outerScale={2}
                    outerAlpha={0}
                    hasBlendMode={true}
                    innerStyle={{
                        backgroundColor: "#fff",
                    }}
                    outerStyle={{
                        border: "3px solid #fff",
                    }}
                />
            </div>
        </div>
    );
}

export default App;

