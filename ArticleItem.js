import "./ArticleItem.css";
import Card from "react-bootstrap/Card";
import { BiTime } from "react-icons/bi";
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from "react-router-dom";

function ArticleItem({image,title,desc,readingtime,writter ,id}) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={image}
      />
      <Card.Body>
        <Card.Title className="py-2" >{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Link to={`/article/${id}`}>
        <div className="read-more">
          <span>ادامه مقاله</span>
          <TiArrowLeftThick size="25px" />
        </div>
        </Link>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center py">
        <span>{writter}</span>
        <span>
          <BiTime /> {readingtime} دقیقه
        </span>
      </Card.Footer>
    </Card>
  );
}

export default ArticleItem;
