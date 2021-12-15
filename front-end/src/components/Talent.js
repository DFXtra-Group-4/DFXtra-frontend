import React, {useState} from 'react';
import './css/TalentCard.css';
import {Link} from "react-router-dom";
// import './ScoreCard.js';
 


function Card() {

    const [fullname, setFullname] = useState('Full name');
    const [industry, setIndustry] = useState('Industry');
    const [bio, setBio] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia libero ipsam pariatur, exercitationem dignissimos error voluptatem provident optio? Labore, libero. Mollitia quaerat rem officia, quasi accusamus tempore minus voluptatibus.');

    const talentCard = () =>{
        return (
           
        <div className='botcard'>
       
        
        <div className='card-container'>
        <img className="image" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" height= "100px" width="100px" />
            <h3> {fullname} </h3>
            <h4>{industry}</h4>
            <p>{bio}</p>
            <button>View Profile</button>
            
            </div>
            </div>
            
        )
    };
    return (
        <div class="flex-container">
            {talentCard()}
            {talentCard()}
            {talentCard()}

            {talentCard()}
               {/* <div className='botcard'>
        
        <div className='card-container'>
        <img className="image" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" height= "100px" width="100px" />
            <h3> {fullname} </h3>
            <h4>{industry}</h4>
            <p>{bio}</p>
            <button>View Profile</button>
            
            </div>
        <div className='card-container'>
        <img className="image" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" height= "100px" width="100px" />
            <h3> {fullname} </h3>
            <h4>{industry}</h4>
            <p>{bio}</p>
            <button>View Profile</button>
            </div>
       
        </div>
        

        <div className='Card2'>
       
        <div className='card-container'>
        <img className="image" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" height= "100px" width="100px" />
            <h3> {fullname} </h3>
            <h4>{industry}</h4>
            <p>{bio}</p>
            <button>View Profile</button>
            </div>

            <div className='botcard'>
        <div className='card-container'>
        <img className="image" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" height= "100px" width="100px" />
            <h3> {fullname} </h3>
            <h4>{industry}</h4>
            <p>{bio}</p>
            <button>View Profile</button>
           
            </div>
       
        </div>
        </div>

        <div className='Card3'>
        
        <div className='card-container'>
        <img className="image" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" height= "100px" width="100px" />
            <h3> {fullname} </h3>
            <h4>{industry}</h4>
            <p>{bio}</p>
           <button>View Profile</button> 
          
            </div>
            <div className='botcard'>
        <div className='upper-container'>
        <div className='card-container'>
        <img className="image" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" height= "100px" width="100px" />
            <h3> {fullname} </h3>
            <h4>{industry}</h4>
            <p>{bio}</p>
            <button>View Profile</button>
            </div>
           
        </div>
        
       
        
        </div>
        </div> */}
        </div>




        
        
    )
};

export default Card;
