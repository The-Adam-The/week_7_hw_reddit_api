import React from 'react';
import {useState} from 'react';
import WordInfo from '../components/WordInfo'
import LinkInput from '../components/LinkInput'
import GraphInfo from '../components/GraphInfo'

const MainContainer = () => {

    const [redditPage, setRedditPage] = useState("www.reddit.com");

    const [newRedditPage, setNewRedditPage] = useState("")

    const selectRedditPage = (event) => {
        setNewRedditPage(event.target.value);
    };

    const saveNewRedditPage = (event) => {
        event.preventDefault();
        setRedditPage(newRedditPage);
        setNewRedditPage("");


    }

return (
    <>  
        <div>
            <h2>Current Reddit Link: {redditPage}</h2>
            <h2>New Reddit Link: {newRedditPage}</h2>
            <WordInfo/>
            <LinkInput selectRedditPage={selectRedditPage} newRedditPage={newRedditPage} saveNewRedditPage={saveNewRedditPage}/>
            <GraphInfo/>
        </div>
    </>
)};

export default MainContainer;