import MyNavbar from "../../components/navbar/Navbar";
import "./AddArticle.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function AddArticle() {
  let [formData, setFormData] = useState({});

  const resetformdata = () => {
    setFormData({
      title: "",
      desc: "",
      writter: "",
      image: "",
      category: "",
      readingtime: "",
    });
  };

  const addArticleHandler = () => {
    axios.post("http://localhost:5000/articles", formData);
    Swal.fire({
      title: "مقاله با موفقیت ساخته شد",
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton:false
    });
    resetformdata()
  };

  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <MyNavbar />
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={formData.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder=" عنوان مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              value={formData.desc}
              name="desc"
              onChange={formHandler}
              type="text"
              placeholder="یک توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={formData.writter}
              name="writter"
              onChange={formHandler}
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={formData.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder=" موضوع مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={formData.image}
              name="image"
              onChange={formHandler}
              type="text"
              placeholder="آدرس عکس مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control
              value={formData.readingtime}
              name="readingtime"
              onChange={formHandler}
              type="number"
              placeholder=""
            />
          </Form.Group>

          <Button onClick={addArticleHandler} variant="primary" type="button">
            ساختن مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddArticle;
