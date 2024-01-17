import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import PostTable from '../../table/PostTable';
import { useQuery } from '@apollo/client';
import { GET_POST_BY_USER } from '../../../utils/Query';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const { user } = useContext(AuthContext)
  const [userPost, setUserPost] = useState(null);
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_POST_BY_USER, {
    context: {
      headers: {
        authorization: `Bearer ${user?.token || ''}`,
      },
    },
  });

  useEffect(() => {
    setUserPost(data?.postByUser)
  }, [data])

  const handleAddOrEditPost = () => {
    navigate('/admin/post/add')
  }

  return (
    <Container className='admin-layout-main'>

      <Row className='p-10'>
        <h3>Post</h3>
      </Row>
      <div className='add-post'>
        <Button className='add-post-btn' onClick={() => handleAddOrEditPost()}>Add</Button>
      </div>
      <Row>
        <PostTable post={userPost} />
      </Row>
    </Container>
  )
}

export default Post