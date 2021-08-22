import React from 'react';

const NewsItem = (props) => {

  const { article } = props;

  const { title, urlToImage: image, description, url, author, source } = article;

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-3 mx-auto card p-0">
      <img src={image} className="card-img-top" alt="NewsItemImage" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p>{description}<a href={url}>ReadMore</a></p>
      </div>
      <div className="card-footer">
        <p className="fw-bolder text-end text-bold">- {author}, {source.name}</p>
      </div>
    </div>
  );
};

export default NewsItem;
