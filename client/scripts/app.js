SC.initialize({
  client_id: SOUND_CLOUD_KEY,
  redirect_uri: 'localhost:3000/'
});

var App = React.createClass({
  render: function () {
    return <Song name='yamoms'></Song>
  }
});

var Song = React.createClass({
  render: function () {
    return <div className="song">Title: { this.props.name }</div>
  }
});

SC.stream('/tracks/49438146').then(function (player) {
  yaMomsPlayer = player;
  player.play();
});


React.render(<App />, document.getElementById('app'));
