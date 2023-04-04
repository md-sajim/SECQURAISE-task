import React from 'react';
import './Navber.css'
import { FaSearch, IconName } from "react-icons/fa";

const Navber = () => {
    return (
        <div className='nav_container'>
            <h1>S<span className='logo_smtx'>ECQUR</span><span className='logo_ai'>AI</span><span className='logo_smtx'>SE</span></h1>
            <div className='nav-infocontainer'>
                <div className='search-bar'>
                    <button><FaSearch/></button>
                    <input type="text" />
                </div>
                <p>25</p>
                <p>25</p>
            </div>
        </div>
    );
};

export default Navber;