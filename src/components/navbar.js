import React, {useState} from 'react';
import LogoImg from '../images/digital_khana_logo.png'
import 'font-awesome/css/font-awesome.min.css';


const Navbar = () => {

  const [searchQuery, setSearchQuery] = useState('');

 const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert('Searching for: ' + searchQuery);
 };

 const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
 };
    
    return (
    <nav className="navbar fixed-top Navbarnav navbar-expand-lg navbar-light bg-transparent">
    <a className="navbar-brand" href="/">
      <img src={LogoImg} alt="digital_khana_Logo" border="0" width="200px" height="50px"/>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse custom-open-menu" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/pricing">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        <li className="nav-item">
        <form onSubmit={handleSearchSubmit}>
            <input type="text" onChange={handleSearchChange} placeholder="Search.." />
            <button type="submit" className='search-icon'><i className="fa fa-search"></i></button>
        </form>
        </li>
      </ul>
    </div>
 </nav>
    );
};

export default Navbar;
