import "./App.css"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
/* import Navbar from "./components/Navbar.jsx" */
import Home from "../src/views/Home/Home.jsx"
import Legal from "../src/views/Legal/Legal.jsx"



function App() {
  return (
    <Router>
{/*         <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/terms" element={<Legal/>} />
        </Routes>
    </Router>
  )
}

export default App