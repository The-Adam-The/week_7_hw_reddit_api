import React from 'react';
import {useState, useEffect} from 'react';
import WordInfo from '../components/WordInfo'
import GraphInfo from '../components/GraphInfo'

// const unique = require('/node_modules/unique-words');

const MainContainer = () => {

    // const [redditPage, setRedditPage] = useState("www.reddit.com");
    // const [newRedditPage, setNewRedditPage] = useState("")
    const [redditData, setRedditData] = useState("");
    const [titleList, setTitleList] = useState([]);
    const [wordList, setWordList] = useState([]);


    const fetchRedditPage = () => {
        fetch("/r/worldnews.json")
        .then(results => results.json())
        .then((data) => setRedditData(data))
        .catch(err => console.error(err));
    };

    const handleGetTitle = () => {
        getTitleData();
    }

    const handleRedditAPI = () => {
        fetchRedditPage();
    }
    
    const getTitleData = () => {
        const usableData = redditData.data.children
        // console.log(redditData.data.children[1].data.title)
        const titles = []
      
        for (var i=1; i < redditData.data.children.length; i++) {
            titles.push(redditData.data.children[i].data.title)
        }
        setTitleList(titles)
        console.log(titleList)

        const allElements = titleList.join();
        console.log(allElements)
        const lowerWords = allElements.toLowerCase()
        const words = lowerWords.split(" ");
        setWordList(words);
        console.log(wordList);
        // console.log(unique.counts(wordList))
    };

    // const countWords = () => {

    // }



    

    // const getRedditPage = (event) => {
    //     event.preventDefault();
       
    //     setNewRedditPage("");
    //     fetchRedditPage();
     

    // }


    return (
    <>  
        <div className="main-container">
            <div className="top-container">
                {/* <LinkInput selectRedditPage={selectRedditPage} newRedditPage={newRedditPage} getRedditPage={getRedditPage}/> */}
                <div className="variable-info-box">
                    {/* <h2>Current Reddit Link: {redditPage}</h2> */}
                    {/* <h2>New Reddit Link: {newRedditPage}</h2> */}
                    <button onClick={handleRedditAPI}>Get Reddit Data</button>
                    <button onClick={handleGetTitle}>Push Me</button>

                   
                </div>
            </div>
            <div className="bottom-container">
                <WordInfo/>
                <GraphInfo/>
            </div>
        </div>
    </>
)};

export default MainContainer;