import React, { useState } from 'react'
import {Input, Button, Card, Space} from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../redux/features/postSlice';
import { useNavigate } from 'react-router-dom';
import LoadingCard from './LoadingCard';

const CreatePost = () => {
    const [values,setValues]= useState({title: "", body: ""});
    const [showPost, setShowPost]= useState(false);
    const {title, body}= values;
    const dispatch= useDispatch();
    const navigate= useNavigate();
    const {post, loading}= useSelector((state)=> ({...state.app}))

    const handleSubmit= (e)=>{
        e.preventDefault();
        if(title && body){
            dispatch(createPost({values}));
            setValues({title:"", body: ""});
            setShowPost(true);
        } else{
            window.alert("Enter complete details");
        }
    }

    const showPostBlog= ()=>{
        return (
            <>
            {loading? (<LoadingCard count={1}></LoadingCard>):(
                <div className="site-card-border-less-wrapper">
                    <Card type='inner' title={post[0].title}>
                    <p>User Id: {post[0].id}</p>
                    <span>{post[0].body}</span>
                    </Card>
                </div>
            )}
            </>
        )
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create Post</h1>
        <Input
        placeholder='Enter Title'
        type='text'
        value={title}
        onChange={(e)=> setValues({...values, title: e.target.value})}
        style={{width: "400px"}}></Input>
        <br />
        <br />
        <Input.TextArea
        placeholder='Enter body'
        type="text"
        value={body}
        onChange={(e)=> setValues({...values, body: e.target.value})}
        style={{width: "400px"}}
        size='large'></Input.TextArea>
        <br />
        <br />
        <Space style={{margin: 10}}>
        <Button onClick={()=> navigate("/")}>Go back</Button>
        <Button type='primary' htmlType='submit'>Submit</Button>           
        </Space>
      </form>
      <br />
      <br />
      {showPost && <div>{showPostBlog()}</div> }
    </div>
  )
}

export default CreatePost
