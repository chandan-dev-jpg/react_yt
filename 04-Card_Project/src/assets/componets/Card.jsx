// import React from 'react'

const Card = (props) => {
  
  return (
    
    <div > 
      <div className="Card">
        <div className="top">
          <div>
            <img  src={props.img}alt="" />

            <h3>{props.name}</h3>
            <p>{props.role}</p>

            <h3>{props.location}</h3>

            <p>"Building MOdern Web Apps"</p>
          </div>
        </div>

        <div className="center">
          <div>
            <h3>{props.followers}</h3>
            <span>Followers</span>
          </div>
          <div>
            <h3>{props.following}</h3>
            <span>Following</span>
          </div>
        </div>
        <div className="bottom">
          
            <button>Follow</button>
            <button>Message</button>
        
        </div>
      </div>
    </div>
    
  );
};

export default Card;
