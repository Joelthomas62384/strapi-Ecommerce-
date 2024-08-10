import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="xl:w-1/4 md:w-1/2 p-4 ">
                <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg ">
                    <img className="h-72 rounded w-full object-cover object-center mb-6" src={props.image} alt="content" />
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">{props.category}</h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">{props.title}</h2>
                    
                    <p className="leading-relaxed text-base">{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default Card