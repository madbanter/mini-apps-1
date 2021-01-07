import React from 'react';
import Board from 'Board.jsx';
import Banner from 'Banner.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      message: ''
    };
  }

  render() {
    return (
      <div>
        <Banner message={this.state.message}/>
        <Board board={this.state.board}/>
      </div>
    );
  }
}

export default App;



