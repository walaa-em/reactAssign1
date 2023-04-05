
import React, { Component , Fragment } from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';

let routes = createBrowserRouter(
  [
    // { path: '', element: <> <Navbar /> <Header /> <Portfolio /> <About /> <Contact /> <Footer /> </> }

    {path:'' , element: <> <Layout /> </> , children : [

      { path: '', element: <> <Header /> </> },
      { path: 'about', element: <> <About /> </> },
      { path: 'portfolio', element: <> <Portfolio /> </> },
      { path: 'contact', element: <> <Contact /> </> },
      { path: '*', element: <div className='vh-100 d-flex bg-info justify-content-center align-items-center'><h1>Not Found 404</h1></div> },
      { path: 'reactAssign1', element: <> <Header /> </> },

    ]}
  
  ]
)


export default class App extends Component {

  render() {
    return (
      <>
        <RouterProvider router={routes} />

      </>
    )
  }
}
