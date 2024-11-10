import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/authentication/LoginScreen";
import Register from "./screens/authentication/RegisterScreen";
import MBTITest from "./screens/MBTIScreen";
import CCTest from "./screens/CareerClusterScreen";
import IQTest from "./screens/IQTest";
import EQTest from "./screens/EQTest";
import LeftRightBrainTest from "./screens/LeftRightBrainTest";
import LearningStyleTest from "./screens/LearningStyleTest";
import News from "./screens/NewsScreen";
import MajorTest from "./screens/MajorTestScreen";
import MajorResult from "./screens/MajorResultScreen";
import Ikigai from "./screens/homeComponentsDetail/IkigaiDetail";
import Vikor from "./screens/homeComponentsDetail/VikorDetail";
import WeightedSum from "./screens/homeComponentsDetail/WeightedSumDetail";
import MBTI from "./screens/homeComponentsDetail/MBTIDetail";
import CC from "./screens/homeComponentsDetail/CareerClusterDetail";
import IQ from "./screens/homeComponentsDetail/IqDetail";
import EQ from "./screens/homeComponentsDetail/EqDetail";
import LeftRightBrain from "./screens/homeComponentsDetail/LeftRightBrainDetail";
import LearningStyle from "./screens/homeComponentsDetail/LearningStyleDetail";
import PrivateRoute from "./screens/authentication/PrivateRoute";
import Profile from "./screens/Profile";
import PersonalResult from "./screens/PersonalResult";
import FivePerTest from "./screens/5PerTest";
import FivePer from "./screens/homeComponentsDetail/5PerDetail";

function App() {
  const location = useLocation();
  const excludedRoutes = ['/login', '/register'];

  return (
    <>
      {!excludedRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        {/* HomeScreen */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="*" element={<p>Page not found</p>} />
        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Main Test */}
        <Route path="/majorTest" element={<MajorTest />} />
        <Route path="/majorResult" element={<MajorResult />} />
        {/* Informations */}
        <Route path="/ikigai" element={<Ikigai />} />
        <Route path="/mbtiDetail" element={<MBTI />} />
        <Route path="/ccDetail" element={<CC />} />
        <Route path="/iqDetail" element={<IQ />} />
        <Route path="/eqDetail" element={<EQ />} />
        <Route path="/lrBrainDetail" element={<LeftRightBrain />} />
        <Route path="/learningStyleDetail" element={<LearningStyle />} />
        <Route path="/weightedSum" element={<WeightedSum />} />
        <Route path="/vikor" element={<Vikor />} />
        <Route path="/fivePerDetail" element={<FivePer />} />
        {/* Other Tests */}
        <Route path="/mbti" element={<MBTITest />} />
        <Route path="/career" element={<CCTest />} />
        <Route path="/iq" element={<IQTest />} />
        <Route path="/eq" element={<EQTest />} />
        <Route path="/lrBrain" element={<LeftRightBrainTest />} />
        <Route path="/learningStyle" element={<LearningStyleTest />} />
        <Route path="/fivePer" element={<FivePerTest />} />
        <Route path="/news" element={<News />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/personal" element={<PersonalResult />} />
        </Route>
      </Routes>
      {!excludedRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
