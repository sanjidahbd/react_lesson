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
import BlogEntry from './Pages/BlogEntry';
import BlogEntry1 from './Pages/BlogEntry1';


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
                         <Route path="/blog/new"
                        element={<BlogEntry />} />   {/*usestate */}
                     
                         <Route path="/blog/new1"
                        element={<BlogEntry1 />} />{/*useform */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;