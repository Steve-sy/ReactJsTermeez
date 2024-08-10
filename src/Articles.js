import React, { useEffect, useState } from "react";

const ArticleList = ({ articles }) => {
  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index} style={{ marginBottom: "20px" }}>
            <h2>{article.title}</h2>
            <p>
              <strong>Author:</strong> {article.author}
            </p>
            <p>
              <strong>Source:</strong> {article.source.name}
            </p>
            <p>
              <strong>Published At:</strong>{" "}
              {new Date(article.publishedAt).toLocaleString()}
            </p>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
            <div>
              <img
                src={article.urlToImage}
                alt={article.title}
                style={{ maxWidth: "25%", height: "auto" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=tesla&from=2024-07-10&sortBy=publishedAt&language=en&apiKey=468cfc31e33f484cb4c93a92017b21a1"
        );
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  return <ArticleList articles={articles} />;
};

export default Articles;
