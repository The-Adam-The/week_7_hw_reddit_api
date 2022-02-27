import React from 'react';

const WordDataItem = ({wordName, wordCountNumber}) => {

    return (
        <> 
        <tr>
            <td>{wordName}</td>
            <td className="word-count-data">{wordCountNumber}</td>
        </tr>
        </>
    );
};

export default WordDataItem;