import React from "react";

const User = ({ name, location, email, picture }) => {
  return (
    <div className="random-user">
      <div className="user-image">
        <img src={picture.large} alt={name.first} />
      </div>
      <div className="user-details">
          <p className="user-name">{name.first} {name.last}</p>
          <p className="user-email">{email}</p> 
          {/* <p>Country:</p> {location.country} */}
      </div>


    </div>
  );
};

export default User;