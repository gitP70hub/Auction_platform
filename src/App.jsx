import './App.css';
import './index.css';
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx"; 
import LogIn from "./pages/LogIn.jsx"; 
import AuctionListing from "./pages/AuctionListing.jsx"; 

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/auctionlisting" element={<AuctionListing />} />

    </Routes>
  );
}

export default App
