import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);
    // /*
    useEffect(() => {
        setTimeout(() => setTime(time + 1), 1000);
    }, [time]);
    // */
    /*
    useEffect(() => {
        const timer = setInterval(() => setTime(time + 1), 1000);
        console.log('Adding new Interval');
        return function () {
            clearInterval(timer);
            console.log('Removing previous Interval');
        };
    }, [time]);
    */
    return (
        <div>
            <h3>StopWatch</h3>
            <p>Current Time - {time}</p>
        </div>
    );
};

export default Timer;
