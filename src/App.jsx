import React from "react"
import { BrowserRouter as Router , Routes,Route } from "react-router-dom"
import DashBoard from "./pages/DashBoard"
import BalanceCard from "./components/BalanceCard"
import SearchBar from "./components/SearchBar"
import RevenueChart from "./components/RevenueChart"
import AllocatedChart from "./components/AllocatedChart"
import Transection from "./components/Transection"
import DayChart from "./components/DayChart"
import WeakChart from "./components/WeakChart"

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashBoard/>} />
        </Routes>

      </Router>
    </>
  )
}

export default App
