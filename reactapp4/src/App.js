// App.js

import {
    BrowserRouter as Router,
    Routes, Route,
    Link
} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import './App.css';
import ContactPage from './Pages/ContactPage';
import Navbar from './Components/Navbar';
import Blog from './Pages/Blog';


const App = () => {
    return (
        <Router>
            <div>
             {/* Navbar will will added*/}
             <Navbar/>

                <Routes>
                    <Route path="/"
                        element={<HomePage />} />
                    <Route path="/about"
                        element={<AboutPage />} />
                         <Route path="/contact"
                        element={<ContactPage />} />
                          <Route path="/blog"
                        element={<Blog />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;