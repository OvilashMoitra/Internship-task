import React, { useEffect, useState } from 'react';
import Navbar from './../../../src//Components//Navbar//Navbar';
import axios from "axios";
import { GrMail } from "react-icons/gr";
import Footer from '../../Components/Footer/Footer';
const Home = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        fetchUser()
    }, [])
    const fetchUser = async () => {
        const res = await axios.get("https://randomuser.me/api/");
        setUser(res.data);
    };

    // console.log(user);
    // console.log(user?.results?.[0]);

    return (
        <div>
            <Navbar />
            {user?.results?.[0]?.picture?.large ? <div style={{ filter: `drop-shadow(2px -1px 4px #000)` }} className='bg-slate-200 mt-5 mx-auto w-[300px] h-[510px] rounded-md'>
                <img className='w-[286px] h-[286px] mt-2 mx-auto rounded-lg' src={user && user?.results?.[0]?.picture?.large} alt="" />
                <h3 className='text-black text-xl'><strong>Name:</strong> {user?.results?.[0]?.name?.first} {user && user?.results?.[0]?.name?.last}</h3>
                <p className='text-black'><strong>Age:</strong> {user?.results?.[0]?.dob?.age}</p>
                <p className='text-black'> <strong>Gender:</strong> {user?.results?.[0]?.gender}</p>
                <a href={`mailto:${user?.results?.[0]?.email}`} className='text-black'><GrMail className='inline-block h-10' />{user?.results?.[0]?.email}</a>
            </div> : <img className='mx-auto my-7' src={'https://cdn.dribbble.com/users/416315/screenshots/4275501/media/81a14e385dee6f7ca9e90d578b72d2b8.gif'} alt="" />}
            <button className='btn border-green-600 border-2 border-solid w-32 h-10 rounded-md text-green-600 bg-green-100 my-2' onClick={fetchUser}>Get New User</button>
            <Footer />
        </div>

    );
};

export default Home;