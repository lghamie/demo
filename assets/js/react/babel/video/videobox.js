var SearchBar = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var searchterm = this.refs.searchterm.value.trim();
    if (!searchterm) {
      return;
    }

    this.props.onSearchTermChange(searchterm);
    //this.refs.searchterm.value = '';
    return;
  },
  render: function () {
    return React.createElement(
      "form",
      { className: "SearchBar row", onSubmit: this.handleSubmit },
      React.createElement(
        "div",
        { className: "col-sm-12", style: { marginBottom: '20px' } },
        React.createElement(
          "div",
          { className: "input-group input-group-lg hidden-mobile" },
          React.createElement(
            "div",
            { className: "input-group-btn" },
            React.createElement(
              "button",
              { type: "button", className: "btn btn-default dropdown-toggle", "data-toggle": "dropdown" },
              "Todo ",
              React.createElement("span", { className: "caret" })
            ),
            React.createElement(
              "ul",
              { className: "dropdown-menu" },
              React.createElement(
                "li",
                { className: "active" },
                React.createElement(
                  "a",
                  { href: "javascript:void(0)" },
                  React.createElement("i", { className: "fa fa-check" }),
                  " Todo"
                )
              ),
              React.createElement("li", { className: "divider" }),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "javascript:void(0)" },
                  "Negociación"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "javascript:void(0)" },
                  "Liderazgo"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "javascript:void(0)" },
                  "Ventas"
                )
              )
            )
          ),
          React.createElement("input", { className: "form-control input-lg", type: "text", ref: "searchterm", placeholder: "Buscar videos..." }),
          React.createElement(
            "div",
            { className: "input-group-btn" },
            React.createElement(
              "button",
              { type: "submit", className: "btn btn-default" },
              "   ",
              React.createElement("i", { className: "fa fa-fw fa-search fa-lg" }),
              "   "
            )
          )
        )
      )
    );
  }
});

var SearchableVideoList = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  requestServer: function (titleSearch) {

    var queryUrl = this.props.url + '?';
    if (titleSearch) {
      queryUrl += 'where={"or" :[ ';
      var searchTermsArray = titleSearch.split(" ");
      for (var searchTerm in searchTermsArray) {
        queryUrl += '{"title":{"contains":"' + searchTermsArray[searchTerm] + '"}},';
      }
      queryUrl = queryUrl.slice(0, -1);
      queryUrl += "]}";
    }

    $.ajax({
      url: queryUrl,
      dataType: 'json',
      cache: true,
      success: (function (data) {
        this.setState({ data: data });
      }).bind(this),
      error: (function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }).bind(this)
    });
  },
  onSearchTermChange: function (searchterm) {
    this.requestServer(searchterm);
  },
  componentDidMount: function () {
    this.requestServer();
  },
  render: function () {
    return React.createElement(
      "div",
      { className: "searchBar" },
      React.createElement(SearchBar, { onSearchTermChange: this.onSearchTermChange }),
      React.createElement(VideoList, { data: this.state.data })
    );
  }
});

var VideoList = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  render: function () {
    var videos = this.props.data.map(function (video) {
      return React.createElement(VideoBox, { key: video.id, title: video.title, url: video.url });
    });
    return React.createElement(
      "div",
      { className: "videoList row" },
      videos
    );
  }
});

var VideoBox = React.createClass({
  render: function () {
    return React.createElement(
      "div",
      { className: "videoBox" },
      React.createElement(
        "div",
        { className: "col-xs-12 col-sm-6 col-md-4 col-lg-3", style: { marginBottom: '20px' } },
        React.createElement(
          "div",
          { className: "video-container" },
          React.createElement("iframe", { src: this.props.url, frameBorder: "0", width: "560", height: "349" })
        )
      )
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
ReactDOM.render(React.createElement(SearchableVideoList, { url: "/video" }), document.getElementById('videoresults'));
console.log("Loaded react resources");