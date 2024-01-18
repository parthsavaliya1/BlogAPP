import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-tagsinput/react-tagsinput.css';
import TagsInput from 'react-tagsinput';
import { Row } from 'react-bootstrap/esm';
import Breadcrumbs from '../../../common/BreadCumbs';
import { useMutation } from '@apollo/client';
import { CREATE_POST } from '../../../utils/Query';
import { useNavigate } from 'react-router-dom/dist';

const AddorEditPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState([]);
    const navigate = useNavigate()


    const [createPost, { loading, error, data }] = useMutation(CREATE_POST);


    const crumbs = [
        { label: 'Home', path: '/admin/post' },
        { label: 'Add Post', path: '/admin/post/add' },
    ];

    const handleTagDelete = (i) => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleTagAddition = (tag) => {
        setTags([...tags, tag]);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (value) => {
        setContent(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const createPostData = {
                title,
                content,
                tags,
            }
            const { data } = await createPost({ variables: { userPost: createPostData } });
            const { postData } = data || {}
            navigate('/admin/post')
        } catch (error) {
            console.error('Error creating user:', error);
        }

    };

    return (
        <Container className="admin-layout-main">
            <Breadcrumbs crumbs={crumbs} />
            <Row className="m-10 mt-20">
                <div className='add-post-grid'>
                    <div md={6} className="post-form-container">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="post-form-grp" controlId="blogTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter title"
                                    value={title}
                                    onChange={handleTitleChange}
                                />
                            </Form.Group>

                            <Form.Group className="post-form-grp" controlId="blogContent">
                                <Form.Label>Content</Form.Label>
                                <ReactQuill value={content} onChange={handleContentChange} />
                            </Form.Group>

                            <Form.Group className="post-form-grp" controlId="blogTags">
                                <Form.Label>Tags</Form.Label>
                                <TagsInput
                                    value={tags}
                                    onChange={(value) => setTags(value)}
                                    addOnBlur={true}
                                    placeholder="Add tags"
                                />
                            </Form.Group>
                            <div className='add-post-btn-main'>
                                <Button className='add-post-btn' type="submit">
                                    Create
                                </Button>
                            </div>

                        </Form>
                    </div>

                    <div md={6} className="live-preview-container">
                        <div className='card post-card'>
                            <div className='p-10 preview-card'>
                                <h2 className='preview-label underline-text'>Live Preview</h2>
                                <div>
                                    <div className='blog-title'>
                                        {title}
                                    </div>

                                    <hr />
                                    <div className='blog-content'>
                                        <div dangerouslySetInnerHTML={{ __html: content }} />
                                    </div>
                                    <div className='blog-tags'>

                                        {tags?.length > 0 && tags?.map((tg,index) => (
                                            <span key={index} className='blog-tag'>
                                                {tg}
                                            </span>
                                        ))}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </Row>
        </Container>
    );
};

export default AddorEditPost;
