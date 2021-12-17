import React, { useState } from 'react';
import './css/ScoreCard.css';


export default function ScoreCard() {

    const [fullname, setFullname] = useState('Full name');
    // const [industry, setIndustry] = useState('Industry');
    const [bio, setBio] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia libero ipsam pariatur, exercitationem dignissimos error voluptatem provident optio? Labore, libero. Mollitia quaerat rem officia, quasi accusamus tempore minus voluptatibus.');

    const scoreCard = () => {
        return (

            <div className='scoreCard'>
                <div className='headTitle'>
                    <h1>Scorecard</h1>
                </div>
                <img className="cardImg" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" height="100px" width="100px" />
                <div className='fullnameHead'>
                    <h3> {fullname} </h3>
                </div>
                <div className='ptags'>
                    <p>{bio}</p>
                    <p>{bio}</p>
                    <p>{bio}</p>
                </div>
                <div className='box1'>
                </div>
                <div className='box2'>
                </div>
                <div className='box3'>
                </div>
                <button className='cardBtn'>Add to basket</button>

            </div>

        )
    };


    return (
        <div className='container'>
            <div class="flex-container">
                {scoreCard()}


            </div>
        </div>
    )
};