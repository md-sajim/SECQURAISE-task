import React, { useEffect, useState } from 'react';
import './Home.css'
import { FaBars, FaSlidersH } from 'react-icons/fa';

const Home = () => {
    const [detecteduser, setDectedUser] = useState({})
    const [userdata, setUserData] = useState([])
    useEffect(() => {
        fetch('fackData.json')
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])
    console.log(detecteduser)
    return (
        <div className='home-container'>
            <div className='laft-bar'>
                <button>
                    <FaBars />
                </button>
            </div>
            <div className='details-container'>
                <div>
                    <h1>tast-1</h1>
                </div>
                <div>
                    <div className='evet-header'>
                        <h2>Event</h2>
                        <button><FaSlidersH /></button>
                    </div>
                    <dir className='enter-user'>
                        {
                            userdata.map((entry, id) => <div

                                key={id}
                                className='parsone-container'
                                onClick={() => { setDectedUser(entry) }}


                            >
                                <div>
                                    <h3 style={{ fontWeight: "600", fontSize: "24px" }}>{entry.ID}: {entry.Location}</h3>
                                    <p><small>{entry.Date} {entry.Time}</small></p>
                                </div>
                                <p style={{ fontWeight: "600", fontSize: "20px" }}>Person detected.</p>
                            </div>
                            )
                        }
                    </dir>
                </div>
            </div>
        </div>
    );
};

export default Home;