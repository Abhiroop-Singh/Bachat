import React, { useState } from "react";
import { useEffect } from "react";
import "./card.css";

const NewsCard = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(
      "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&topics=technology&apikey=FWFECLKMR783C985"
    );
    const c = await data.json();
    setNews(c.feed.slice(0, 4));
  }

  // Generate JSX code for Display each item
  const renderList = news.map((item, index) => (
    // <div key={index}>{item.title}<img src={item.banner_image}></img></div>
    <div className="contact-card">
      <img src={item.banner_image} alt="" />
      <h3 className="card-txt">
        <br />
        <br />
        {item.title}
        <br />
        {item.summary.slice(0, 10)}...
        <br />
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </h3>
      <br />
      <br />
    </div>
  ));
  return (
    <section id="news">

    <div className="app">
      <section id="card">
        <br />
        <br />
        <div className="container-card">
          <div className="contacts" b>
            {renderList}
          </div>
        </div>
        <br />
      </section>
    </div>
    </section>
  );
};

export default NewsCard;
