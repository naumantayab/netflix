import React from 'react';
import Data from './Data';
import Card from './Cards';

const App =() => (
    <>
        <h1 className='heading_style'>List of top 15 Netflix Series in 2021</h1>

        {Data.map((val, index) => {
            console.log(index);
            return (
                <Card
                    key={val.id}
                    imgs={val.image}
                    title={val.title}
                    name={val.name}
                    link={val.link}
                />
            );
        })}
    </>
);
export default App;