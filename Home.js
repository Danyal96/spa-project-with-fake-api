import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import MyNavbar from "../../components/navbar/Navbar";

function Home() {
  const [articles, serArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/articles")
      .then((response) => serArticles(response.data));
  }, []);

  return (
    <>
      <MyNavbar />
      <Container>
        <h1 style={{ marginTop: "20px" }}>لیست مقالات</h1>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 py-3">
          {articles.map((article) => (
            <Col>
              <ArticleItem {...article} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
