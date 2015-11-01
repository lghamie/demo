var SearchBar = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var searchterm = this.refs.searchterm.value.trim();
    if (!searchterm) {
      return;
    }
    
    this.props.onSearchTermChange(searchterm);
    //this.refs.searchterm.value = '';
    return;
  },
  render: function() {
    return (
  <form className="SearchBar row" onSubmit={this.handleSubmit}>
    <div className="col-sm-12" style={{marginBottom: '20px'}}>
      <div className="input-group input-group-lg hidden-mobile">
        <div className="input-group-btn">
          <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
            Todo <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li className="active">
              <a href="javascript:void(0)"><i className="fa fa-check"></i> Todo</a>
            </li>
            <li className="divider"></li>
            <li>
              <a href="javascript:void(0)">Capacitacion</a>
            </li>
            <li>
              <a href="javascript:void(0)">Etc</a>
            </li>
            <li>
              <a href="javascript:void(0)">Etc2</a>
            </li>
          </ul>
        </div>
        <input className="form-control input-lg" type="text" ref="searchterm" placeholder="Buscar de nuevo..."/>
        <div className="input-group-btn">
          <button type="submit" className="btn btn-default" >
            &nbsp;&nbsp;&nbsp;<i className="fa fa-fw fa-search fa-lg"></i>&nbsp;&nbsp;&nbsp;
          </button>
        </div>
      </div>  
    </div>
  </form>
    );
  }
});

var SearchableVideoList = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  requestServer: function (titleSearch){

    var queryUrl = this.props.url + '?';
    if(titleSearch){
      queryUrl += 'where={"or" :[ ';
      var searchTermsArray = titleSearch.split(" ");
      for(var searchTerm in searchTermsArray){
        queryUrl += '{"title":{"contains":"'+ searchTermsArray[searchTerm] +'"}},';
      }
      queryUrl =  queryUrl.slice(0, -1); 
      queryUrl += "]}";
    }
      
  $.ajax({
      url: queryUrl,
      dataType: 'json',
      cache: true,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  onSearchTermChange: function (searchterm){
    this.requestServer(searchterm);
  },
  componentDidMount: function() {
    this.requestServer();    
  },
  render: function() {  
    return (
      <div className="searchBar">
          <SearchBar onSearchTermChange={this.onSearchTermChange}/>
        <VideoList data={this.state.data} />
    </div>
    );
  }
});

var VideoList = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  render: function() {  
    var videos = this.props.data.map(function (video) {
      return (
        <VideoBox  key={video.id} title={video.title} url={video.url}></VideoBox>
      );
    });
    return (
      <div className="videoList row">
        {videos}
      </div>
    );
  }
});

var VideoBox = React.createClass({
  render: function() {
    return (
      <div className="videoBox" >
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{marginBottom: '20px'}}>
      <div className="video-container">
          <iframe src={this.props.url} frameBorder="0" width="560" height="349" ></iframe>
      </div>
    </div>
      </div>
    );
  }
});
/*
$(document).ready(function() {
  console.log("Rendering videobox");
  ReactDOM.render(
    <SearchableVideoList url="/video" />,
    document.getElementById('videoresults')
  );
});
*/    
ReactDOM.render(
    <SearchableVideoList url="/video" />,
    document.getElementById('videoresults')
);
console.log("Loaded react resources");