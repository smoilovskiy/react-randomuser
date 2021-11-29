import React from "react";

const User = ({ name, location, email, gender, picture, dob, nat }) => {
  return (
    <div className="random-user">
      <div className="user-image">
        <img src={picture.large} alt={name.first} />
      </div>
      <div className="user-details">
          <p className="user-name">{name.first} {name.last}</p>
          <p className="user-gender">{gender}</p>
          <p className="user-email">{email}</p>
          <p className="user-dob">{dob.date.split('T')[0]}</p>
          <p className="user-nat">{nat}</p>
      </div>


    </div>
  );
};

export default User;