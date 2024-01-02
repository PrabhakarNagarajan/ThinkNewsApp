import React, { useEffect, useState } from "react";
import NewsCard from "../Component/NewsCard";
import LoadingSpinner from "../Component/Spinner/LoadingSpinner";

const Home = () => {
  const [myNews, setMyNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchNews = async () => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=70195248332a4d40b57679d70c140a2d";

    try {
      const response = await fetch(url);
      console.log(response, "sccc");
      const data = await response.json();
      setMyNews(data.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news :", error);
      setLoading(false);
    }
  };
  console.log(myNews);
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="flex justify-center items-center p-20">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-4 gap-10">
          {myNews.map((data) => (
            <NewsCard
              key={data.id}
              title={data.title}
              imageUrl={data.urlToImage}
              description={data.description}
              buttonText="Click Me"
              linkTo={data.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
