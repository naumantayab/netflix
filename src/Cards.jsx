import React from 'react';
import Heading from './Heading';
import Images from './Images';

function Card(props){
    return(
        <>
                <div className='cards'>
                    <div className='card'>
                        <Images imgs={props.imgs} />
                        <div className="card_info">
                            <span className="card_category"> {props.title} </span>
                            <Heading name={props.name} />
                            <a href={props.link} target="_blank">
                                <button> Watch Now </button>
                            </a>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Card;