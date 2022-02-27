import React from 'react';

const WordDataItem = ({wordName, wordCountNumber}) => {

    return (
        <> 
        <tr>
            <td>{wordName}</td>
            <td>{wordCountNumber}</td>
        </tr>
        </>
    );
};

export default WordDataItem;