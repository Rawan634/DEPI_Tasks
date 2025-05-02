import { useState, useEffect } from "react";

function Science() {
  const [scienceNews, setScienceNews] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=d5e1f87337874e1da7ed7ae47d980c81`; 

    fetch(url)
      .then((response) => response.json())
      .then((data) => setScienceNews(data.articles))
  }, []);

  return (
    <>
      <h1 className="text-center my-4">Science News</h1>
      <div className="container">
        <div className="row">
          {scienceNews.map((newsItem, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 my-3" key={index}>
              <div className="card" style={{ width: "21rem" }}>
                {newsItem.urlToImage && (
                  <img src={newsItem.urlToImage} className="card-img-top" alt="News" />
                )}
                <div className="card-body">
                  <h5 className="card-title">{newsItem.title}</h5>
                  <p className="card-text">{newsItem.description}</p>
                  <p className="text-muted">{new Date(newsItem.publishedAt).toLocaleDateString()}</p>
                  <a href={newsItem.url} className="btn btn-primary" target="_blank"> Read More </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Science;
