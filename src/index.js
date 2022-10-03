import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Pages from './pages/Pages';
import Shop from './pages/Shop';
import Team from './pages/Team';
import OurServices from './pages/OurServices';
import Service2 from './pages/Service2';
import Service1 from './pages/Service1';
import Service3 from './pages/Service3';
import Service4 from './pages/Service4';
import Service5 from './pages/Service5';
import Service6 from './pages/Service6';
import PortfolioGrid from './pages/PortfolioGrid';
import PortfolioCobbles from './pages/PortfolioCobbles';
import BlogInformation from './Components/blogInformation';
import Contact from './pages/Contact';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/team-members" element={<Team />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/our-services/brides-bridesmaids-bouquets" element={<Service1 />} />
        <Route path="/our-services/corsages-boutonnieres" element={<Service2 />} />
        <Route path="/our-services/ceremony-main-altar" element={<Service3 />} />
        <Route path="/our-services/aisle-pew-markers" element={<Service4 />} />
        <Route path="/our-services/ceremony-decoration" element={<Service5 />} />
        <Route path="/our-services/tables-cake-decoration" element={<Service6 />} />
        <Route path="/our-services/portfolio-grid" element={<PortfolioGrid />} />
        <Route path="/our-services/portfolio-cobbles" element={<PortfolioCobbles />} />
        <Route path="/blog" element={<BlogInformation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
