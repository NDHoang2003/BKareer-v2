import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/authentication/LoginScreen";
import Register from "./screens/authentication/RegisterScreen";
import MBTITest from "./screens/MBTIScreen";
import CCTest from "./screens/CareerClusterScreen";
import News from "./screens/NewsScreen";
import MajorTest from "./screens/MajorTestScreen";
import MajorResult from "./screens/MajorResultScreen";
import Ikigai from "./screens/homeComponentsDetail/IkigaiDetail";
import MBTI from "./screens/homeComponentsDetail/MBTIDetail";
import Vikor from "./screens/homeComponentsDetail/VikorDetail";
import WeightedSum from "./screens/homeComponentsDetail/WeightedSumDetail";
import CC from "./screens/homeComponentsDetail/CareerClusterDetail";
import IQ from "./screens/homeComponentsDetail/IqDetail";
import EQ from "./screens/homeComponentsDetail/EqDetail";
import PrivateRoute from "./screens/authentication/PrivateRoute";
import Profile from "./screens/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="*" element={<p>Page not found</p>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/majorTest" element={<MajorTest />} />
        <Route path="/majorResult" element={<MajorResult />} />
        <Route path="/ikigai" element={<Ikigai />} />
        <Route path="/mbtiDetail" element={<MBTI />} />
        <Route path="/ccDetail" element={<CC />} />
        <Route path="/iq" element={<IQ />} />
        <Route path="/eq" element={<EQ />} />
        <Route path="/weightedSum" element={<WeightedSum />} />
        <Route path="/vikor" element={<Vikor />} />
        <Route path="/mbti" element={<MBTITest />} />
        <Route path="/career" element={<CCTest />} />
        <Route path="/news" element={<News />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
