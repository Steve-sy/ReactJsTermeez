import React, { useEffect, useState } from "react";

const ArticleList = ({ articles }) => {
  return (
    <div style={{ padding: "25px" }}>
      <div style={{ textAlign: "center" }}>
        <h1>Articles</h1>
        <div class="mb-3">
          <label for="" class="form-label">
            Search
          </label>
          <input
            type="text"
            class="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder=""
          />
          <small id="helpId" class="form-text text-muted">
            Help text
          </small>
          <input
            name=""
            id=""
            class="btn btn-primary"
            type="button"
            value="Button"
          />
        </div>
      </div>

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
          "https://newsapi.org/v2/everything?q=australia&from=today&sortBy=publishedAt&language=en&apiKey=468cfc31e33f484cb4c93a92017b21a1X"
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
