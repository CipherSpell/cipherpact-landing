import type { NextPage } from "next";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Descriptions from "../sections/Descriptions";
import Heading from "../sections/Heading";
import Roadmap from "../sections/Roadmap";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Heading />
      <Descriptions />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Home;
