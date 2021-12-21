import React from 'react';
import './article.css';

const Article = ({date, title, img}) => {
    return (
        <div className='article'>
            <div className="article__img">
                <img src={img} alt="cover" />
            </div>
            <div className="article__text">
                <p>{date}</p>
                <h3>{title}</h3>
            </div>
            <p>Read Full Article</p>
        </div>
    )
}

export default Article
