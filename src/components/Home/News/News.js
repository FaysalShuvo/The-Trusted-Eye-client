import React from "react";
import news from "../../../image/news-min.jpg";
import NewsCard from "../NewsCard/NewsCard";

const newsData = [
  {
    title: "Check what happens when you share your info in social media",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Karli doe",
    authorImg: news,
    date: "23 April 2029",
  },
  {
    title: "To help with Food Problem Let's Kill Half of the Universe",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Thanos",
    authorImg: news,
    date: "23 April 2025",
  },
  {
    title: "Lets Kills All The Superhero",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Baron Zemo",
    authorImg: news,
    date: "23 April 2059",
  },
];
const News = () => {
  return (
    <>
      <section className="my-5 py-5">
        <div className="container">
          <h2 className="text-brand text-center font-weight-bold mb-5">
            News About Crime Stuff
          </h2>

          <div className="row  d-flex justify-content-around">
            {newsData.map((news) => (
              <NewsCard key={news.title} news={news} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
