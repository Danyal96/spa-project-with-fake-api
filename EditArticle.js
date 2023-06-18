import axios from "axios";
import { useEffect, useState } from "react";
import { Button,Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import MyNavbar from "../../components/navbar/Navbar";

function EditArticle() {
  const articleId = useParams().articleId;

  let [articleData, setArticleData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/articles/${articleId}`)
      .then((response) => setArticleData(response.data));
  }, []);

  const editArticleHandler = () => {
    axios.put(`http://localhost:5000/articles/${articleId}`,articleData)
    Swal.fire({
        title:'مقاله با موفقیت ویرایش شد',
        timer:1500,
        timerProgressBar:true,
        showConfirmButton:false
    })
  };

  const formHandler = (e)=> {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  };
  

  return (
    <>
      <MyNavbar />
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={articleData.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder=" عنوان مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              value={articleData.desc}
              name="desc"
              onChange={formHandler}
              type="text"
              placeholder="یک توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={articleData.writter}
              name="writter"
              onChange={formHandler}
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={articleData.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder=" موضوع مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={articleData.image}
              name="image"
              onChange={formHandler}
              type="text"
              placeholder="آدرس عکس مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control
              value={articleData.readingtime}
              name="readingtime"
              onChange={formHandler}
              type="number"
              placeholder=""
            />
          </Form.Group>

          <Button onClick={editArticleHandler} variant="primary" type="button">
            ویرایش مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}

export default EditArticle;
