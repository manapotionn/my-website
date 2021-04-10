import React from 'react';
import '../css/Panel.css';

function Panel({ title, content }) {
    return (
        <div className="panel-container">
            <div className="title-bar">{title}</div>
            <div className="content-container">{content}</div>
        </div>
    )
}

export default Panel;