import React from 'react';
import {Chart} from "react-google-charts"


const GraphInfo = ({redditPage, graphData}) => {
    const options = {
        title: redditPage
    };

    
    console.log(graphData);
      
    

    const localGraphData = [["hello", "goodbye"], ["cheese", 1], [ "chips", 2]];


    return (
        <div className="graph-info-box">
            <h1>This is GraphInfo!</h1>
            {/* <Chart chartType="PieChart" data={localGraphData} options={options} width={"100%"} height={"400px"}/> */}
            <Chart chartType="PieChart" data={graphData} options={options} width={"100%"} height={"400px"}/>

        </div>

    );
};

export default GraphInfo;

//[[ "hello", "goodbye"], ["cheese", "1"], [ "chips", "2"]]