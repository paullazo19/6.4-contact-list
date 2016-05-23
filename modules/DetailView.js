import React from 'react';

export default React.createClass({
  render() {
    console.log("hey", this.props.params.firstName);
    return (
      <main>
        <div className="detailView__header">
          <i className="fa fa-arrow-left detailView__backIcon"></i><img className="detailView__photo" src={`${this.props.photo}`}/>
        </div>
        <h1>{this.props.firstName}</h1>
      </main>
    )
  }
})
