import React from 'react';
import '../css/File.css';

function File({title, setTitle}){
    return (
        <div onClick={() => setTitle(title)}>{title}</div>
    )

}

export default File;