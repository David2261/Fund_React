import React, {useState} from 'react';
import MyButton from './UI/button/MyButton.jsx';
import MyInput from './UI/input/MyInput.jsx';

const PostForm = ({create}) => {
	const [post, setPost] = useState({title: '', body: ''});

	const addNewPost = (e) => {
	    e.preventDefault()
	    const newPost = {
	    	...post, id: Date.now()
	    }
	    create(newPost)
	    setPost({title: '', body: ''})
	}


    return (
    	<div>
	        <form>
		        <MyInput 
		        value={post.title}
		        onChange={e => setPost({...post, title: e.target.value})} 
		        type="text" placeholder='Название поста' />

		        <MyInput
		        value={post.body} 
		        onChange={e => setPost({...post, body: e.target.value})} 
		        type="text" placeholder='Описсание поста' />

		        <MyButton onClick={addNewPost}>Create</MyButton>
	      	</form>
	    </div>
    );
};


export default PostForm;
