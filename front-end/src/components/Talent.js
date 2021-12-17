import React, {useState} from 'react';
import './css/Talent.css';
import {Link} from "react-router-dom";
// import './ScoreCard.js';
 

function Card() {
    const [fullname, setFullname] = useState('Full name');
    const [industry, setIndustry] = useState('Industry');
    const [bio, setBio] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia libero ipsam pariatur, exercitationem dignissimos error voluptatem provident optio? Labore, libero. Mollitia quaerat rem officia, quasi accusamus tempore minus voluptatibus.');

    const talentCard = () => {
        return (
            <div className='talentPage'>  
                <div className='topCard'>
        {/* <div className='card-container'> */}
                    <img className="image" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" height= "100px" width="100px" />
                    <h3> {fullname} </h3>
                    <h4>{industry}</h4>
                    <p>{bio}</p>
                    <button>View Profile</button>
                </div>
            </div>
            // </div>
        )
    };
    
    return (
        <>
            <div className='title'>
                <h1>Talent Spotlight</h1>
            </div>
            <div className='spotlightInfo'>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia libero ipsam pariatur, 
                    exercitationem dignissimos error voluptatem provident optio? Labore, libero. Mollitia quaerat rem officia, quasi accusamus tempore minus voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia libero ipsam pariatur, exercitationem dignissimos error voluptatem provident optio? Labore, libero. Mollitia quaerat rem officia, quasi accusamus tempore minus voluptatibus.
                </p>
            </div>
      
            <div className='container'>
                <div class="flex-container">
                    <h2 className='flexContainerh1'>Software Engineering</h2>
                    {talentCard()}
                    {talentCard()}
                    {talentCard()}
                    {talentCard()}
                </div>
                
                <div className='flex-container'>
                    <h2 className='flexContainerh1'>Data science</h2>
                    {talentCard()}
                    {talentCard()}
                    {talentCard()}
                    {talentCard()}
                </div>
            </div>
        </>
    )
    };

export default Card;
