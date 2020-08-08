import React from 'react';
import { Link } from 'react-router-dom'
import './page404.css';

const Page404 = () => {

  return (
    <div id="notfound" className="page404">
      <div className="notfound">
        <div className="notfound-404">
          <h3>Oops! Page not found</h3>
          <h1><span>4</span><span>0</span><span>4</span></h1>
        </div>
        <h2>we are sorry, but the page you requested was not found</h2>
        <Link to="/">Go to Home Page</Link>
      </div>
    </div>
  );
}

export default Page404;
