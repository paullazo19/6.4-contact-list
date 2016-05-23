import React from 'react';

export default React.createClass({
  render() {
    console.log("hey", this.props.params.photo);
    return (
      <main>
        <div className="detailView__header">
          <i className="fa fa-arrow-left fa-2x detailView__backIcon"></i><img className="detailView__photo" src={`/images/${this.props.params.photo}`}/>
        </div>
        <ul className="detailView__list">
          <li className="detailView__contactItem">
            <i className="fa fa-user detailView__contactIcon"></i><p className="detailView__contactInfo">&nbsp;{this.props.params.firstName} {this.props.params.lastName}</p>
          </li>
          <li className="detailView__contactItem">
            <i className="fa fa-envelope detailView__contactIcon"></i><p className="detailView__contactInfo detailView__contactEmail">&nbsp;{this.props.params.email} </p>
          </li>
          <li className="detailView__contactItem">
            <i className="fa fa-mobile detailView__contactIcon"></i><p className="detailView__contactInfo">&nbsp;{this.props.params.phoneNumber} </p>
          </li>
          <li className="detailView__contactItem">
            <i className="fa fa-globe detailView__contactIcon"></i><p className="detailView__contactInfo">&nbsp;{this.props.params.city}, {this.props.params.state}</p>
          </li>
        </ul>

      </main>
    )
  }
})
