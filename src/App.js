  import './App.css';
  import './pages/about.css';
  import React from 'react';
  import Navbar from './components/Navbar';
  import {
    BrowserRouter as Router,
    Routes,
    Route
  }
  from 'react-router-dom';
  import Home from './pages/index';
  import About from './pages/about';
  import Blogs from './pages/blogs';
  import SignUp from './pages/signup';
  import Contact from './pages/contact';
  import Sessions from './pages/sessions';
  import Test from './pages/test';
  import Student from './pages/student';
  import FooterPage from './components/footer';

  function App() {
    return (
      <Router>
      <Navbar/>

      <Routes>
      <Route exact path = '/home'
       element = {
        <Home/>
      }
      />
      <Route path = '/about'
      element = {
        <About/>
      }
      />
      <Route path = '/contact'
      element = {
        <Contact/>
      }
      />
       <Route path = '/student'
      element = {
        <Student/>
      }
      />  
        <Route path = '/test'
      element = {
        <Test/>
      }
      />  
       <Route path = '/sessions'
      element = {
        <Sessions/>
      }
      />
      <Route path = '/blogs'
      element = {
        <Blogs/>
      }/>
      <Route path = '/sign-up'
      element = {
        <SignUp/>
      }
      />
      </Routes>

      <FooterPage/>
      </Router>
    );
  }

  export default App;
