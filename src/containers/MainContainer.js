import React from 'react';
import {useState, useEffect } from 'react';
import WordInfo from '../components/WordInfo'
import GraphInfo from '../components/GraphInfo'
import LinkInput from '../components/LinkInput'

// const unique = require('/node_modules/unique-words');

const MainContainer = () => {



    const [redditPage, setRedditPage] = useState("all");
    const [newRedditPage, setNewRedditPage] = useState("");
    const [redditLoaded, setRedditLoaded] = useState(false);
    const [redditData, setRedditData] = useState("");
    const [wordCount, setWordCount] = useState([]);
    const [graphData, setGraphData] = useState([]);
    
    
    useEffect (()=>{
        fetchRedditPage();
        
    },[]);

    useEffect (() => {
        if (!redditLoaded){
            return 
        }
        getTitleData();
    }, [redditData])

    

    const fetchRedditPage = () => {
        setRedditLoaded(true);
        const urlExtension = `/r/${redditPage}.json`;

        fetch(urlExtension)
        .then(results => results.json())
        .then((data) => {
            setRedditData(data);
        })
        .catch(err => console.error(err));
        console.log("Reddit JSON obtained")
        
    };

    const handleGetTitle = () => {
        getTitleData();
    };
    
    // Functions courtesy of unique-words modules https://www.npmjs.com/package/unique-words
    const split = (...args) => [].concat.apply([], args).join(' ').split(/\W+/);

    const wordCounts = (...args) => {
        return split(...args).reduce((acc, word) => {
          if (word) acc[word] = (acc[word] || 0) + 1;
          return acc;
        }, {});
      };

    const sortWordCount = (wordCount) => {
        const wordList = [];

        for (var word in wordCount) {
            wordList.push([word, wordCount[word]])
        };
        console.log('wordList: ', wordList)

        const filteredWordList = wordList.filter(word =>  word[1] > 1 && word[0].length > 1 && word[0] !== "and" && word[0] !== "to" && 
        word[0] !== "of" && word[0] !== "the" && word[0] !== "is" && word[0] !== "so" && word[0] !== "that" && word[0] !== "this" && word[0] !== "are" 
        && word[0] !== "as" && word[0] !== "by" && word[0] !== 'at');

        console.log("Word list filtered")

        filteredWordList.sort(function(a, b) {
            return a[1] - b[1];
        });
        filteredWordList.reverse()
        console.log('filteredWordList', filteredWordList)
        console.log("Word list sorted")
        console.log('wordList', filteredWordList)
        setWordCount(filteredWordList)
        const convertedNumberWordList = filteredWordList.map(word =>[word[0], word[1].toString()])
        console.log('convertedNumberWordList', convertedNumberWordList);
        const newGraphData = [["word", "times used"],...convertedNumberWordList]
        console.log("new graph data")
        setGraphData(newGraphData)
        console.log('graphData', newGraphData)

      };

    const getTitleData = () => {
        // console.log(redditData.data.children[1].data.title)
        const titles = []
        for (var i=1; i < redditData.data.children.length; i++) {
            titles.push(redditData.data.children[i].data.title)
        }
        console.log("Word List Created")
        const allElements = titles.join();
        const lowerWords = allElements.toLowerCase()
        const wordCountObject = wordCounts(lowerWords)
        sortWordCount(wordCountObject)
        
        
    };

    const selectRedditPage = (event) => {
        setNewRedditPage(event.target.value);
        setRedditPage(newRedditPage)
    };


    return (
    <>  
        <div className="title-box">
            <h1>Reddit Title Word Count</h1>
        </div>
        <div className="main-container">
            <div className="top-container">
                <LinkInput selectRedditPage={selectRedditPage} newRedditPage={newRedditPage} fetchRedditPage={fetchRedditPage} handleGetTitle={handleGetTitle}/>
                <div className="variable-info-box">
                    <h2>Current Reddit page: r/{redditPage}</h2>
                    

                   
                </div>
            </div>
            <div className="bottom-container">
                <WordInfo wordCount={wordCount}/>
                <GraphInfo redditPage={redditPage} graphData={graphData}/>
            </div>
        </div>
    </>
)};

export default MainContainer;