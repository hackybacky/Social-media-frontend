import "./post.css";
import { MoreVert } from "@material-ui/icons";



export default function Post({ post }) {

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="assets/posts/mypost.jpg"
              alt=""
            />
            <span className="postUsername">
             
            </span>
            <span className="postDate">date </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"></span>
          <img className="postImg" src="assets/posts/mypost.jpg"alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/person/download.png"  alt="" />
            <img className="likeIcon" src="assets/posts/like.png"alt="" />
            <span className="postLikeCounter">people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}