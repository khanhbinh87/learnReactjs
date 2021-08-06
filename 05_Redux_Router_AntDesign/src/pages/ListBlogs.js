import React from 'react';
import styled from "styled-components";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import LIST_BLOGS from "../fakeDate/blog-posts";

// Bootstrap 12 column => Moi column 4 phan
// Bootstrap 24 column => Moi column 8 phan
const StyledBlog = styled.div`
  border: 2px solid #333;
  height: 100%;
`
const StyledBlogTille = styled.h1`
  
`
const StyledCol = styled(Col)`
  margin-bottom: 30px;
`
export default function ListBlogs() {
  console.log(LIST_BLOGS.objects);

  return (
    <Row gutter={30}>
      {
        LIST_BLOGS.objects.map(blog => {
          return (
            <StyledCol xs={8} key={blog.id}>
              <StyledBlog>
                <StyledBlogTille>
                  <Link to={`/blog/${blog.id}`}>
                    {blog.title}
                  </Link>
                </StyledBlogTille>

              </StyledBlog>
            </StyledCol>
          )
        })
      }
    </Row>
  )
}