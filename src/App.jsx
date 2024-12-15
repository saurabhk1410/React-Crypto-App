import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import Exchanges from "./Components/Exchanges"
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App