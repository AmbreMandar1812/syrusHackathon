import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

// pages import
import About from "./Pages/About";
import MembersList from "./Pages/MembersList";
import Explore from "./Pages/Explore";
import Proposals from "./Pages/Proposals";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="about" element={<About />} />
        <Route path="members-list" element={<MembersList />} />
        <Route path="proposals" element={<Proposals />} />
      </Routes>
    </Router>
  );
};

export default App;
