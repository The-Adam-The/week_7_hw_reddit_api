import React from 'react';
import {Chart} from "react-google-charts"


const GraphInfo = (redditPage, graphData =[["hello", "goodbye"], ["cheese", "1"], [ "chips", "2"]]) => {
    const options = {
        title: redditPage
    };


    return (
        <div className="graph-info-box">
            <h1>This is GraphInfo!</h1>
            <Chart chartType="PieChart" data={graphData} options={options} width={"100%"} height={"400px"}/>
        </div>

    );
};

export default GraphInfo;

//[[ "hello", "goodbye"], ["cheese", "1"], [ "chips", "2"]]