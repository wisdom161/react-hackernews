import React, { Component } from 'react';
import './styles/App.css';
import Search from './Components/search';
import Table from './Components/table';
import MoreButton from './Components/moreButton';

const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '100';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH ='/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    };
    
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  setSearchTopStories(result) {
    const { hits, page } = result;

    const oldHits = page !== 0 ? this.state.result.hits : [];
    const updatedHits = [
      ...oldHits,
      ...hits
    ];

    this.setState({ result: { hits: updatedHits, page } });
  }
  
  fetchSearchTopStories(searchTerm, page = 0) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error)
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
  }

  onDismiss(id) {
    const updatedHits = this.state.result.hits.filter(item => item.objectID !== id);
    this.setState({ 
      result: {...this.state.result, hits: updatedHits}
    });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
    event.preventDefault();
  }

  render() {
    const { 
      searchTerm, 
      result 
    } = this.state;
    const page = (result && result.page) || 0;
    console.log(page)
    return (
      <div className="page">
        <div className="interactions">
          <Search 
            value={searchTerm} 
            onChange={this.onSearchChange}
            onSearchSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
        </div>
        { result
          && <Table
              list={result.hits} 
              onDismiss={this.onDismiss}
            />
        }
        <div className="interactions">
          <MoreButton 
            fetchSearchTopStories={this.fetchSearchTopStories}
            searchTerm={searchTerm}
            page={page}
          >
            More 
          </MoreButton>
        </div>
      </div>
      );
    }
  }

export default App;
