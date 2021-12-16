import React, {useState} from 'react';
import './css/ScoreCard.css';


export default function ScoreCard() {

const [fullname, setFullname] = useState('Full name');
    // const [industry, setIndustry] = useState('Industry');
    const [bio, setBio] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia libero ipsam pariatur, exercitationem dignissimos error voluptatem provident optio? Labore, libero. Mollitia quaerat rem officia, quasi accusamus tempore minus voluptatibus.');

    const scoreCard = () => {
        return (
            
        <div className='scoreCard'>
            <div className='headTitle'><h1>Scorecard</h1></div>
        
        <img className="profileImage" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" height= "100px" width="100px" />
            <div className='fullnameHead'><h3> {fullname} </h3>
            </div>
           
            {/* <h4>{industry}</h4> */}
            <div className='boldp'><p>{bio}</p></div>
            <div className='ptags'>
            <p>{bio}</p>
            <p>{bio}</p>
            </div>
            
            <div className='boxes'>
            

           <div className='boxLeft'>
            {/* insert for box left */}
            <p>Box 1</p>

            
            <div className='boxRight'>
            {/* insert for box right */}
            <p>Box 2</p>
            </div>

            <div className='boxBottom'>
            {/* insert for box bottom */}
            <p>Box 3</p>
            </div>
            </div>
            <button>Add to basket</button>
           
            </div>
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