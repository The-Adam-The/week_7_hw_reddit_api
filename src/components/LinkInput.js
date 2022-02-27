import React from 'react';

const LinkInput = ({fetchRedditPage, selectRedditPage, newRedditPage, handleGetTitle} ) => {

    const handleRedditPageInput = (event) => {
        selectRedditPage(event);
    };
    return (
        <div className="link-input-box">
            <h3>This is the link input!</h3>
            <form onSubmit={fetchRedditPage}>
                <p>Please input subreddit name e.g. "all" or "politics"</p>
                <input className="link-input" type="text" id="new_link" values={newRedditPage} onChange={handleRedditPageInput} />
                <input className="link-button" type="submit" value="Add"/>
            </form>
            <button onClick={handleGetTitle}>Analyse Data</button>
        </div>
    );

};
export default LinkInput;
