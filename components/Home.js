import React from 'react';
import Plus from '../shared/Plus';
// import '../styles/Home.css'
import HomeWorksContainer from './HomeWorksContainer';
const Home = () => {
    return (
        <div className="home rounded">
            <HomeWorksContainer />
           <Plus />
        </div>
    );
};

export default Home;