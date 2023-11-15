import React from 'react';
import './home.css';

const Card = ({title, color}) => {
    return (
        <div className="card" style={{backgroundColor: color}}>
            <h3>{title}</h3>
        </div>
    );
};

const Home = () => {
    const categories = [
        {title: 'Podcasts', color: '#ec9777'},
        {title: 'Made for you', color: '#88ecbb'},
        {title: 'Charts', color: '#77a1d3'},
        {title: 'New releases', color: '#a3fc8e'},
        {title: 'Discover', color: '#d996b6'},
        {title: 'Concerts', color: '#a29494'},
        {title: 'Mood', color: '#e3d79c'},
        {title: 'Decades', color: '#fabc92'},
        {title: 'Latin', color: '#fa6d6d'},
        {title: 'Country', color: '#be897a'},
    ];
    return (
        <div>
            <div className="home-container">
                <div className="home-genres-section">
                    <div className="home-card-container">
                        {categories.map((category, index) => (
                            <Card key={index} title={category.title} color={category.color}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
