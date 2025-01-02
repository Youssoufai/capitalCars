import About from "./components/About";
import Box from "./components/Box";
import Client from "./components/Client";
import Contact from "./components/Contact";
import Deals from "./components/Deals";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Tile from "./components/Tile";

export default function Home() {
  return (
    <>
      <Hero />
      <Tile />
      <Box />
      <Features />
      <About />
      <Deals />
      <Client />
      <Contact />
    </>
  );
}
