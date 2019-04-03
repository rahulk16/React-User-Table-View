import React from 'react';
import {Divider, Segment} from 'semantic-ui-react';

import {DemoTable} from './DemoTable';
import {DemoFilter} from './DemoFilter';

const queryParams = ['_limit','_order','_sort','q','_page'];

export default class DemoDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      demos: [],
      _sort: 'id',
      _page: 1,
      _order: null,
      _limit: 5,
      q: '',
      totalCount: 0,
      loading: false,
     };
    this.loadData = this.loadData.bind(this);
    this.onChangeLimit = this.onChangeLimit.bind(this);
    this.onSubmitFilter = this.onSubmitFilter.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
    
    this.handleSort = this.handleSort.bind(this);
  }

  directionConverter(order) {
    if (order === 'asc') {
      return 'ascending';
    } else if (order === 'desc') {
      return 'descending';
    } else {
      return null;
    }
  }

  handleSort(clickedColumn) {
    const { _sort, _order } = this.state;

    let newOrder = _order === 'asc' ? 'desc' : 'asc';
    if (_sort !== clickedColumn) {
      newOrder = 'asc';
    }

    this.setState({
      _sort: clickedColumn,
      _page: 1,
      _order: newOrder,
    });

    this.loadData({
      _sort: clickedColumn,
      _page: 1,
      _order: newOrder,
    });
  }

  componentDidMount() {
    this.loadData({});
  }

  onChangeLimit(event, data) {
    if (data.value !== this.state._limit) {
      this.setState({ _limit: data.value, _page: 1  });
      this.loadData({ _limit: data.value, _page: 1  });
    }
  }

  onSubmitFilter(filter) {
    if (filter !== this.state.q) {
      this.setState({ q: filter, _page: 1, loading: true });
      this.loadData({ q: filter, _page: 1 });
    }
  }

  onChangePage(event, data) {
    const {activePage} = data;
    if (activePage !== this.state._page) {
      this.setState({ _page: activePage });
      this.loadData({ _page: activePage });
    }
  }

  

  loadData(params) {
    const current = this.state;
    queryParams.forEach(function(element) {
      if (!(element in params)) {
        params[element] = current[element];
      }
    });

    const esc = encodeURIComponent;
    const query = Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');

    // Make a request without limit first to get the total number of data.
    let totalCountQuery = '';
    if (params.q !== "") {
      totalCountQuery = `q=${params.q}`;
    }

    fetch(`/api/v1/demo?${totalCountQuery}`).then(response => {
      if (response.ok) {
        response.json().then(data => {
          this.setState({ totalCount: data.length });
        })
      } else {
        response.json().then(error => {
          console.log(`Failed to load data: ${error.message}`);
        });
      }
      this.setState({loading: false});
    });

    fetch('/api/v1/demo?' + query).then(response => {
      if (response.ok) {
        response.json().then(data => {
          this.setState({ demos: data });
        })
      } else {
        response.json().then(error => {
          console.log(`Failed to load data: ${error.message}`);
        });
      }
      this.setState({loading: false});
    })
  }

  render() {
    const user=this.state.demos;
    if(user!==null){
      return (
        <div>
        <a href="/"><button className="btn btn-primary"> &lt;&lt; Back</button></a>
          <h3>{user.first_name}</h3>
          <table className="table table-striped">
            <tbody>
                <tr>
                  <td>Company Name</td>
                  <td>{user.company_name}</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>{user.city}</td>
                </tr>
                <tr>
                  <td>State</td>
                  <td>{user.state}</td>
                </tr>
                <tr>
                  <td>ZIP</td>
                  <td>{user.zip}</td>
                </tr>
                <tr>
                  <td>E-mail</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td>Web</td>
                  <td><a href={user.web}>{user.web}</a></td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>{user.age}</td>
                </tr>
            </tbody>
          </table>
        </div>
      )
    }
  }
}
