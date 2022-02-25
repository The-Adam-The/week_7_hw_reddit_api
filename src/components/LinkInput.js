import React from 'react';

const LinkInput = ({newRedditPage, selectRedditPage, saveNewRedditPage} ) => {

    const handleRedditPageInput = (event) => {
        selectRedditPage(event);
    };
    return (
        <>
            <h1>This is the link input!</h1>
            <form onSubmit={saveNewRedditPage}>
                <input type="url" id="new-link" values={newRedditPage} onChange={handleRedditPageInput} />
                <input type="submit" value="Add"/>
            </form>
        </>
    );

};
export default LinkInput;
