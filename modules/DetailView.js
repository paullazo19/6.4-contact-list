import React from 'react';

export default React.createClass({
  render() {
    console.log("yoda", this.props);
    return (
      <main>
        <img src={this.props.photo}/>
      </main>
    )
  }
})
