import React from 'react';

const UserCard = function (props) {
    return (
        <div className='user-card'>
            {console.log('props.data: ', props.data)}
            <img className='user-img' src={props.data.picture.large} alt='profile.png' />
            <h2>{props.data.name.first}</h2>
            <p>{props.data.gender}</p>
            <p>
                {props.data.location.city}, {props.data.location.state},{' '}
                {props.data.location.country}
            </p>
            <p>{props.data.phone}</p>
            <p>{props.data.email}</p>
            {/* <h2>Aryan</h2>
            <p>9999999999</p>
            <p>a@mail.com</p> */}
        </div>
    );
};

export default UserCard;
