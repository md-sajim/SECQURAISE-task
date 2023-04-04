import React from 'react';
import './Home.css'
import { FaBars } from 'react-icons/fa';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='laft-bar'>
                <button>
                    <FaBars />
                </button>
            </div>
            <div>
                <div>
                    <h1>tast-1</h1>
                </div>
                <div>
                    tast-2
                </div>
            </div>
        </div>
    );
};

export default Home;