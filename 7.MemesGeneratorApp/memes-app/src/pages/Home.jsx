import React, { useState, useEffect } from 'react';
import MemeCard from '../components/Card';
import { getAllMemes } from '../api/memes';

const HomePage = function () {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAllMemes().then((response) => setData(response.data.memes));
    }, []);
    return (
        <div className='row'>
            {data.map((meme) => (
                <MemeCard img={meme.url} title={meme.name} />
            ))}
        </div>
    );
};

export default HomePage;
