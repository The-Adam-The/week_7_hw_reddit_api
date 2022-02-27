import React from 'react';
import {useState, useEffect} from 'react';
import WordInfo from '../components/WordInfo'
import GraphInfo from '../components/GraphInfo'

// const unique = require('/node_modules/unique-words');

const MainContainer = () => {

    // const [redditPage, setRedditPage] = useState("www.reddit.com");
    // const [newRedditPage, setNewRedditPage] = useState("")
    const [redditData, setRedditData] = useState("");
    const [wordCount, setWordCount] = useState([]);

    const fetchRedditPage = () => {
        fetch("/r/worldnews.json")
        .then(results => results.json())
        .then((data) => setRedditData(data))
        .catch(err => console.error(err));
    };

    const handleGetTitle = () => {
        getTitleData();
    };
    const handleRedditAPI = () => {
        fetchRedditPage();
    };
    
    // Functions courtesy of unique-words modules https://www.npmjs.com/package/unique-words
    const split = (...args) => [].concat.apply([], args).join(' ').split(/\W+/);

    const wordCounts = (...args) => {
        return split(...args).reduce((acc, word) => {
          if (word) acc[word] = (acc[word] || 0) + 1;
          return acc;
        }, {});
      };

    const sortWordcount = (wordCount) => {
        const wordList = [];

        for (var word in wordCount) {
            wordList.push([word, wordCount[word]])
        };

        const filteredWordList = wordList.filter(word =>  word[1] > 1 && word[0].length > 1 && word[0] != "and" && word[0] != "to" && 
        word[0] != "of" && word[0] != "the" && word[0] != "is" && word[0] != "so" && word[0] != "that" && word[0] !="this" && word[0] != "are" 
        && word[0] != "as" && word[0] != "by" && word[0] != 'at');

        console.log(filteredWordList)

        filteredWordList.sort(function(a, b) {
            return a[1] - b[1];
        });

        filteredWordList.reverse()
        console.log('wordList', filteredWordList)
        setWordCount(filteredWordList)
        return wordList
      };

    const getTitleData = () => {
        const usableData = redditData.data.children
        // console.log(redditData.data.children[1].data.title)
        const titles = []
        for (var i=1; i < redditData.data.children.length; i++) {
            titles.push(redditData.data.children[i].data.title)
        }
        const allElements = titles.join();
        const lowerWords = allElements.toLowerCase()
        const wordCountObject = wordCounts(lowerWords)
        sortWordcount(wordCountObject)
        
    };




    

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
                <WordInfo wordCount={wordCount}/>
                <GraphInfo/>
            </div>
        </div>
    </>
)};

export default MainContainer;