import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News =(props)=> {
const  [articles,setArticles]=useState([])
const [loading,setLoading]=useState(true)
const [page,setPage]=useState(1)
const [totalResults,setTotalresults]=useState(0)
const capitalizeFirstLetter=(string)=>{
  return string.charAt(0).toUpperCase()+ string.slice(1)
}
document.title=`${capitalizeFirstLetter(props.category)}- NewsReader`
  const updateNews=async()=>{
    props.setProgress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    setLoading(true);
    let data=await fetch(url);
    let parsedData= await data.json();
    setArticles(parsedData.articles);
    setTotalresults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  useEffect(()=>{
    updateNews();
  },[])
 const handlePrevClick=async ()=>{
   props.setProgress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=53c1de78497b4d669d5624fe9e96dd02&page=${page}&pageSize=${props.pageSize}`;
    setPage(page-1);
   props.setLoading(true);
    let data=await fetch(url);
    let parsedData= await data.json();
    setArticles(parsedData.articles);
    setTotalresults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
   
  }
  const handleNextClick=async ()=>{
    if(page+1<= Math.ceil(totalResults/props.pageSize)){
     props.setProgress(0);
     setPage(page+1);
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
     setLoading(true);
    let data=await fetch(url);
    let parsedData= await data.json();
    setArticles(parsedData.articles);
    setTotalresults(parsedData.totalResults);
    setLoading(false);
     props.setProgress(100);
    }
  }
  
    return (
      <div class="container my-3 ">
        <h3 class="text-center" style={{marginTop:"80px"}}>NewsReader-Top headline</h3>
       <div class="row">
        {loading && <Spinner/>}
       {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        > */}
        {!loading && articles.map((element)=>{
        return <div className="col-md-4 my-3" key={element.url}>
        <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage?element.urlToImage:"https://images.pexels.com/photos/2538121/pexels-photo-2538121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} newsurl={element.url} author={element.author}
        date={element.publishedAt} source={element.source.name}/></div>
        })}
        {/* </InfiniteScroll> */}
        </div>

        <div className='container d-flex justify-content-between my-2'>
        <button disabled={page<=1} type="button" class="btn btn-dark" onClick={handlePrevClick}> &larr;Previous</button>
        <button diasabled={page+1 >Math.ceil(totalResults/props.pageSize)} type="button" class="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )

}
News.defaultProps={
  country: 'in',
  pageSize:8,
  category:"general",
}
News.propType={
country:PropTypes.string,
pageSize:PropTypes.number
}
export default News
