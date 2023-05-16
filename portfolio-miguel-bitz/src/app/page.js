import About from "./components/about"
import Header from "./components/header"
import Home from "./components/home"
import Projects from "./components/projects"
import Technologies from "./components/technologies"

export default function App() {
  return (
    <div >
      <Header/>
      <Home />
      <About/>
      <Technologies/>
      <Projects/>
    </div>
  )
}
