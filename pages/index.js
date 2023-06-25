import { useContext } from "react";
import Header from "../Components/Header";
import Project from "../Components/Project";
import styleContext from "../Context/MyContext";
import Hero from "../Components/Hero";
import SecondHeader from "../Components/SecondHeader";
import About from "../Components/About";
import Skills from "../Components/Skills/Skills";
import ProjectList from "../Components/Projects/ProjectList";

export default function Home() {
  const { bgColor } = useContext(styleContext);

  return (
    <div>
      <Hero />
      <div className="bg-dark lody">
        <SecondHeader />
        <About />
        <ProjectList />
        <Skills />
      </div>
    </div>
  );
}
