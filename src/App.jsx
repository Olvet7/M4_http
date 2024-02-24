import "./App.css";
import { useState, useEffect } from "react";
import { Audio } from "react-loader-spinner";
import { fetchArticlesWithTopic } from "./articles-api";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { ArticleList } from "./components/ArticleList/ArticleLis";

// 5.Виносимо окремий список статей ArticleList

export default function App() {
  // 3. Стан articles, для збереження результату
  const [articles, setArticles] = useState([]);
  // 6.1 Встановлюємо loading=false
  const [loading, setLoading] = useState(false);
  // 7.1 Стан для error
  const [error, setError] = useState(false);

  // 9.4 Робимо async запит на БД в handleSearch
  const handleSearch = async (topic) => {
    try {
      // Очищаємо попередній запит ("старий список")
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Робота із запитом
    // 1. Оголошення асинхронної функції
    async function fetchArticles() {
      // 6.3 loading > true > false + try...catch
      try {
        setLoading(true);
        // 8.2 Використовуємо HTTP-функцію fetchArticlesWithTopic
        const data = await fetchArticlesWithTopic("react");
        setArticles(data);
      } catch (error) {
        // Обробка помилок
        // 7.2 error > true
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    // 2. Виклик fetchFrticles
    fetchArticles();
  }, []);

  return (
    <>
      {/* //4 */}
      {/* {articles.length > 0 && (
        <ul>
          {articles.map(({ objectId, url, title }) => {
            <li key={objectId}>
              <a href={url} target="blank" rel="noreferrer noopener">
                {title}
              </a>
            </li>;
          })}
        </ul>
      )} */}
      <SearchForm onSearch={handleSearch} />
      <h2>Latest Articles:</h2>
      {/* 6.2 - відмальовуємо загружчик тоді, коли loading true */}
      {loading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      )}
      {/* 7.3 Error */}
      {error && (
        <p>Woops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}

// 8 Рефракторинг - окремо articles-api.js = src/articles-api.js
// ===
// import axios from "axios";
// axios.defaults.baseURL = "<https://hn.algolia.com/api/v1>";
// export const fetchArticlesWithTopic = async topic => {
//   const response = axios.get(`/search?query=${topic}`);
//   return response.data.hits;
// };

// 9.1 Пошук через форму
// буде приймати onSearch={handleSearch} =
// в input напишемо <input type="text" name="topic" placeholder="Search articles..." />
// ===
// const handleSubmit = (evt) => {
//   evt.preventDefault();
//   const form = evt.target;
// const topic = form.elements.topic.value;
//   onSearch(topic);
//   form.reset();
// };
// ===
// 9.2 Якщо текстове поле порожнє, то
// if(form.elements.topic.value.trim() === "") {
//   alert("Please enter search term!")
//   return;
// }
// 9.3 handleSearch в App при сабміті форми (приймає topic із onSearch)
//  const handleSearch = topic => {
// ...
// };
// 9.4 Робимо async запит на БД в handleSearch

// 10 - хук useMemo - import { useMemo } from "react";
