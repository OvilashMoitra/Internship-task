import React from 'react';
import { Link } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
const Navbar = () => {
    return (
        <div class="navbar shadow-lg">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <Link to={'/home'}>RandomUser</Link>
            </div>
            <div class="navbar-end">
                <a href="https://drive.google.com/file/d/19g6PwEG1S0qkQYvXRzx0X8BYiIIZiCv9/view?usp=sharing">Resume <BsDownload className='inline-block' /></a>
            </div>
        </div>
    );
};

export default Navbar;