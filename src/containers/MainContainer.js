import React from 'react';
import WordInfo from '../components/WordInfo'
import LinkInput from '../components/LinkInput'
import GraphInfo from '../components/GraphInfo'

const MainContainer = () => {


return (
    <>  
        <div>
            <h1>Hello World! This is the MainContainer!</h1>
            <WordInfo/>
            <LinkInput/>
            <GraphInfo/>
        </div>
    </>
)};

export default MainContainer;