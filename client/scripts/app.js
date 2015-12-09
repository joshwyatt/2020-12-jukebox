// Your ReactJS code here
var App = React.createClass({
  render: function () {
    return <Song name='yamoms'></Song>
  }
});

var Song = React.createClass({
  render: function () {
    return <div className="song">Title: { this.props.name }</div>
  }
})

React.render(<App />, document.getElementById('app'));
