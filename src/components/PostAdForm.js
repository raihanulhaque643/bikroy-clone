import React from 'react';
import { useParams } from 'react-router-dom';
import './PostAdForm.css';

const PostAdForm = () => {

    let {subcategory} = useParams();

    return (
        <div>
            PostAdForm Component {subcategory}
        </div>
    )
}

export default PostAdForm;
