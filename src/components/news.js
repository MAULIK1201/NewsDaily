import React, { Component } from 'react';
import NewsItem from './newsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar';

export class News extends Component {
  static defaultProps = {
    country: 'en',
    category: 'general',
    pageSize: 20,
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: true,
      hasMore: true,
      progress: 0,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Daily`;
  }

  setProgress = (progress) => {
    this.setState({ progress });
  };

  async fetchNews() {
    const { page } = this.state;
    const { country, category, pageSize } = this.props;
    this.setState({ loading: true });
    this.setProgress(30);  // Starting progress
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=5b2424908505475c97b3e26e313d5f22&page=${page}&pageSize=${pageSize}`;
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState({
        loading: false,
        articles: parsedData.articles || [],
        totalResults: parsedData.totalResults || 0,
        hasMore: this.state.page * pageSize < parsedData.totalResults,
      });
      this.setProgress(100);  // Completing progress
      console.log(parsedData);
    } catch (error) {
      this.setState({ loading: false });
      this.setProgress(100);  // Completing progress
      console.error('Error fetching data: ', error);
    }
  }

  async componentDidMount() {
    await this.fetchNews();
  }

  fetchMoreData = async () => {
    const { page, articles } = this.state;
    const { country, category, pageSize } = this.props;
    this.setState({ page: page + 1 });
    this.setProgress(30);  // Starting progress
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=5b2424908505475c97b3e26e313d5f22&page=${page + 1}&pageSize=${pageSize}`;
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState({
        articles: articles.concat(parsedData.articles) || [],
        totalResults: parsedData.totalResults || 0,
        hasMore: articles.length + parsedData.articles.length < parsedData.totalResults,
      });
      this.setProgress(100);  // Completing progress
      console.log(parsedData);
    } catch (error) {
      this.setProgress(100);  // Completing progress
      console.error('Error fetching data: ', error);
    }
  };

  render() {
    const { articles, loading, hasMore, progress } = this.state;

    return (
      <div className='container my-3'>
                <h2 className='text-center' style={{marginTop:"65px"}}>NewsDaily - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>

        <LoadingBar 
          color='#f11946'
          height={3}
          progress={progress} 
          onLoaderFinished={() => this.setProgress(0)} />
        <InfiniteScroll
          dataLength={articles.length}
          next={this.fetchMoreData}
          hasMore={hasMore}
          loader={<Spinner />}
        >
          {loading && <Spinner />}

          <div className='container'>

            <div className='row'>

              {articles.length > 0 ? (
                articles.map((ele) => (
                  <div className='col-md-4' key={ele.url}>
                    <NewsItem
                      title={ele.title ? ele.title.slice(0, 45) + "..." : "No Title"}
                      desc={ele.description ? ele.description.slice(0, 80) + "..." : "No Description"}
                      imgUrl={ele.urlToImage || 'https://www.inampro.nic.in/(S(jwwfrzrzzm1o3rwtrki2osau))/writereaddata/images/no-img.jpg'}
                      newsUrl={ele.url}
                      author={ele.author}
                      publishedAt={ele.publishedAt}
                      source={ele.source.name}
                    />
                  </div>
                ))
              ) : (
                !loading && <p className='text-center'>No news articles available.</p>
              )}
            </div>
          </div>

        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
