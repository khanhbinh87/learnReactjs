import React from "react";
import { Breadcrumb, notification } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useParams } from "react-router-dom";

import LIST_BLOGS from "../fakeDate/blog-posts";

/*

ListBlogs -> render ra danh sách bài viết bằng hàm map của array
  - Trong mỗi bài viết sẽ có link trỏ id qua BlogDetail

BlogDetail -> Dùng useParams lấy id về 
  - Khi có trong tay blog_id rồi -> Truyền lên Server lấy nội dung chi tiết của bài viết đó.
  - Giả lập một hàm findBlogById -> tìm Blog trong array fakeData của mình

*/

// id Lấy từ params là string
// id lưu trong listBlogs -> number
function findBlogById(id) {

  let listBlogsServer = LIST_BLOGS.objects;

  let findData = listBlogsServer.find((blog) => {
    return blog.id === parseInt(id)
  })

  return findData;
}


export default function BlogDetail() {
  const { blog_id } = useParams();

  const blog = findBlogById(blog_id);

  const openNotification = type => {
    notification[type]({
      message: 'Có lỗi xảy ra!',
      description: "Bài viết không tồn tại. Vui lòng kiểm tra lại"
    });
  };

  console.log("blog = ", blog);

  if (!blog) {
    openNotification("error");
    return <div></div>
  }

  return (
    <>
      <div style={{ padding: "15px 50px" }}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/"><HomeOutlined /></Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/list-blogs">
              <UserOutlined />
              <span>Danh sách bài viết</span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{blog.title}</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div style={{
        width: "600px",
        margin: "0 auto",
        padding: "100px 0"
      }}>
        <h1>{blog.title} - {blog.id}</h1>
        <div dangerouslySetInnerHTML={{
          __html: blog.post_body
        }}></div>
      </div>
    </>
  )
}