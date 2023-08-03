import React, { useEffect, useState } from 'react'

const CountDown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +new Date('2023-08-03') - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor(difference / (1000 * 60 * 60) % 24),
                minutes: Math.floor(difference / (1000 / 60) % 60),
                seconds: Math.floor(difference / (1000) % 60),
            }
        }

        return timeLeft;
    }

    const timerComponents = Object.keys(timeLeft).map((interval) => {
        if (!timeLeft[interval]) {
            return null;
        }
        return (<span className='text-[25px] tex-[#475ad2]'>
            {timeLeft[interval]} {interval} {" "}
        </span>)
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000);

        return () => clearTimeout(timer);
    })


    return (
        <div>
            {timerComponents.length ? timerComponents : <span className='text-[red] text-[25px]'>Time's Up!</span>}
        </div>
    )
}

export default CountDown;
