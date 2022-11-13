import React, { useState } from 'react'
import { useEffect } from 'react';


const Newscard = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
      getData();
        
    
    }, [])
    
     async function getData() {
        const data = await fetch('https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&topics=technology&apikey=FWFECLKMR783C985');
        const c = await data.json();
        // setNews(news.feed.slice(0, 4));
        
        setNews(c.feed);
        
      
    }
    
  

  // Generate JSX code for Display each item
  const renderList = news.map((item, index) => 
                               <div key={index}>{item.title}<img src={item.banner_image}></img></div>
                             );
  return (
    <div className="app">
      <div>The List contains:</div>
      {renderList}
    </div>
  );
}

export default Newscard

    
  
     