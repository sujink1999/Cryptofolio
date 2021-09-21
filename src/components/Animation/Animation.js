import React from "react";
import Lottie from "lottie-react";
import Astronaut from '../../assets/lottie/astronaut.json'
import Loader from '../../assets/lottie/loader.json'


import './Animation.css'

export default function EmptyState({text, astronaut, loader}) {

    const getLottie = () => {
        if(astronaut) return Astronaut
        else if (loader) return Loader

        return Loader
    }

    const getClass = () => {
        if(astronaut) return 'astronaut'
        else if (loader) return 'loader'

        return Loader
    }
    

    return (
        <div className="empty-state">
            <Lottie className={getClass()} animationData={getLottie()} />
            {text && (<p>{text}</p>)}
        </div>
    );
};