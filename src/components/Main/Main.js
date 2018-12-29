import React from 'react';
import MostPopular from '../MostPopular/MostPopular'
import Ongoings from '../Ongoings/Ongoings'
import NewAnime from '../NewAnime/NewAnime'

const Main = () => {
    return (
        <main>
            <MostPopular/>
            <Ongoings/>
            <NewAnime/>
        </main>
    )
};

export default Main;