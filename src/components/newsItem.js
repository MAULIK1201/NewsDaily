import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  render() {
    let {title, desc, imgUrl, newsUrl, author, publishedAt, source} = this.props;
    return (
      <div className='my-3'>
      
        <div className="card">
        <span className="position-relative start-90 translate-left-x badge rounded-pill bg-danger" style={{zIndex: '1'}}>
            {source}
          </span>
          <img src={imgUrl} className="card-img-top" alt="News" style={{height:'200px'}}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
            <p className="card-text"><small className="text-body-secondary">By {author ? author : 'Unknown'} on {new Date(publishedAt).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    )
  }
}
