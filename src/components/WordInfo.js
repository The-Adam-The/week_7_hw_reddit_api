import React from 'react';
import WordDataItem from './WordItem';

const WordInfo = ({wordCount}) => {
    
    const wordDataNodes = wordCount.map((word, index) => {
        return <WordDataItem wordName={word[0]} wordCountNumber={word[1]} key={index}/>
    })




return (

    <div className="word-info-box">
        <h2>Word Info Box</h2>
        <table>
            <th>
                <td>Word</td>
                <td>Number of Mentions</td>
            </th>
            {wordDataNodes}

        </table>
        
    </div>
)
};

export default WordInfo;