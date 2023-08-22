import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import About from "./common/About";
import ListReports from "./components/ListReports";
import Footer from './common/Footer';
import Header from './common/Header';
import ErrorPage from './common/ErrorPage';
import Report from './components/Report';
import Instructions from './common/Instructions';


function App() {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between">
    <Router>
        <div>
        <Header />
        <main className="container mb-4">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<ListReports />} />
            <Route path="/:reportId" element={<Report />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/instructions" element={<Instructions/>} />
          </Routes>
        </main>
        </div>
        <Footer />
        </Router>
    </div>
  );
}

export default App;