import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <main>
        <div className="detailView">
          <div className="detailView__header">
            <Link to="/"><i className="fa fa-arrow-left fa-3x detailView__backIcon"></i></Link><img className="detailView__photo" src={`/images/${this.props.params.photo}`}/>
          </div>
          <ul className="detailView__list">
            <li className="detailView__contactItem">
              <i className="fa fa-user fa-3x detailView__contactIcon"></i><p className="detailView__contactInfo detailView__contactName">&nbsp;{this.props.params.firstName} {this.props.params.lastName}</p>
            </li>
            <li className="detailView__contactItem">
              <i className="fa fa-envelope fa-3x detailView__contactIcon"></i><p className="detailView__contactInfo detailView__contactEmail">&nbsp;{this.props.params.email} </p>
            </li>
            <li className="detailView__contactItem">
              <i className="fa fa-mobile-phone fa-5x detailView__contactIcon"></i><p className="detailView__contactInfo">&nbsp;{this.props.params.phoneNumber} </p>
            </li>
            <li className="detailView__contactItem">
              <i className="fa fa-globe fa-3x detailView__contactIcon"></i><p className="detailView__contactInfo ">&nbsp;{this.props.params.city}, <span className="detailView__contactState">{this.props.params.state}</span></p>
            </li>
          </ul>
        </div>
      </main>
    )
  }
})
