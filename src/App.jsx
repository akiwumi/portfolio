import About from "./components/About/About";
import ContactForm from "./components/Contact/ContactForm";
import CustomCursor from "./components/Cursor/CustomCursor";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import useRevealOnScroll from "./hooks/useRevealOnScroll";
import "./styles.css";

export default function App() {
  useRevealOnScroll();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
