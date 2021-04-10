import React from 'react';
import '../css/File.css';

function File({title, setTitle, selected}){
    
    
    return (
        <div 
            className={selected ? "file-container selected" : "file-container"}
            onClick={() => setTitle(title)}
        >
            {title}
        </div>
    )

}

export default File;