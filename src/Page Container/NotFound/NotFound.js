import React from 'react';
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className='flex flex-col items-center h-screen justify-center'>
            <img className='w-40' src="https://media2.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif?cid=ecf05e4781tn0ms0d45bzbgcmgxdjpkdpr6b42k7tpt3jjj9&rid=giphy.gif&ct=g" alt="Page Not Found" />
            <Link to={'/home'} className='btn-primary btn-sm w-40 h-10'>Home</Link>
        </div>
    );
};

export default NotFound;