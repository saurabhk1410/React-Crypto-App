import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import Exchanges from "./Components/Exchanges"
import Coins from "./Components/Coins"
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="/coins" element={<Coins/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App