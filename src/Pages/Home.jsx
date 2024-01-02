import React, { useEffect, useState } from "react";
import NewsCard from "../Component/NewsCard";

const Home = () => {
  const [myNews, setMyNews] = useState([]);
  const fetchNews = async () => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=70195248332a4d40b57679d70c140a2d";
    const response = await fetch(url);
    console.log(response, "sccc");
    const data = await response.json();
    setMyNews(data.articles);
  };
  console.log(myNews);
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className=" m-6">
      <div className="grid grid-cols-3 ">
        {myNews.map((data) => (
          <NewsCard
            title={data.title}
            imageUrl={data.urlToImage}
            description={data.description}
            buttonText="Click Me"
            linkTo={data.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;