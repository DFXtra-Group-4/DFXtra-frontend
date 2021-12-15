import React, {useState} from 'react';
import './css/ScoreCard.css';


export default function ScoreCard() {
    const [fullname, setFullname] = useState('Full name')
    const [info, setInfo] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia libero ipsam pariatur, exercitationem dignissimos error voluptatem provident optio? Labore, libero. Mollitia quaerat rem officia, quasi accusamus tempore minus voluptatibus.');
    return (
        <div>
            <div className='score-container'>
            <div className="ScoreCard"></div><h3>Scorecard</h3>
        <img className="profileImage" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" height= "100px" width="100px" />
            
            <div className="profileName"></div><h3>{fullname}</h3>
            <p>{info}</p>
        </div>
        </div>
    )
}
