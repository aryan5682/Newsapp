import React from 'react'



const NewsItem=(props)=> {
  
    let { title, description, imageurl, newsurl, author, date,source } = props
    return (
      <div>
         <div class="card my-4">
        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
        <span class="badge rounded-pill bg-danger">{source}</span>
        </div>
          <img src={imageurl} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title} 
            </h5>
            <p class="card-text">{description}</p>
            <p class="card-text"><small class="text-muted">News By {author === null ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank" class="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
  export default NewsItem
