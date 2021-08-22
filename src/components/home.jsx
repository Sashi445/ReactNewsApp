import React from 'react';
import NewsItem from './newsItem';

const Home = (props) => {

    const {articles} = props;

    return <div>
        <div className="row justify-content-start align-items-stretch">
            {articles.map(article => (<NewsItem key={article.author} article={article} />))}
        </div>
    </div>;
}
 
export default Home;