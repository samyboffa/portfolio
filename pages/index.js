import { useContext } from "react";
import Header from "../Components/Header";
import Project from "../Components/Project";
import ProjectList from "../Components/ProjectList";
import styleContext from "../Context/MyContext";
import Hero from "../Components/Hero";
import SecondHeader from "../Components/SecondHeader";

export default function Home() {
  const { bgColor } = useContext(styleContext);

  return (
    <div>
      <Hero />
      <SecondHeader />
    </div>
  );
}
