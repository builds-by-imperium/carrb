import { Nav } from "./components/nav/Nav";
import Body from "./components/home/Body";
import Footer from "./components/Footer";
import Hero from "./components/home/Hero";
const Home = () => {
  return (
    // <Loader />
    <div className="">
      <Nav />
      <Hero />
      <Body />
      <Footer />
      <div className="bg-[#1049A1] w-full m-0! p-0! h-[23px]"></div>
    </div>
  );
};

export default Home;
