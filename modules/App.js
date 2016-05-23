import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps(){
    return {
      team_name: "dallas cowboys",
      contacts: [
        {
          firstName: "tony",
          lastName: "romo",
          email: "number9@dallascowboys.com",
          phoneNumber: "2144432376",
          city: "dallas",
          state: "tx",
          photo: "./images/romo.png"
        },
        {
          firstName: "jason",
          lastName: "witten",
          email: "number82@dallascowboys.com",
          phoneNumber: "2145547534",
          city: "fort worth",
          state: "tx",
          photo: "./images/witten.png"
        },
        {
          firstName: "dez",
          lastName: "bryant",
          email: "number88@dallascowboys.com",
          phoneNumber: "2149630434",
          city: "dallas",
          state: "tx",
          photo: "./images/bryant.png"
        },
        {
          firstName: "sean",
          lastName: "lee",
          email: "number50@dallascowboys.com",
          phoneNumber: "2148675912",
          city: "frisco",
          state: "tx",
          photo: "./images/lee.png"
        },
        {
          firstName: "dan",
          lastName: "bailey",
          email: "number5@dallascowboys.com",
          phoneNumber: "2143478965",
          city: "irving",
          state: "tx",
          photo: "./images/bailey.png"
        }
      ]
    }
  },
  componentDidMount() {
    var id = this.props.params.id
  },
  render() {
    console.log(this.props);
    return (
      <main>
        <div className="listView">
          <h1 className="listView__heading">my &lsquo;boys</h1>
          <nav className="listView__contacts">
            {this.props.contacts.map(function(contact, i){
              return <Link to={`/${contact.lastName}`} key={i} id={i} className="listView__contact"><img className="listView__contact--image" src={contact.photo}/><li className="listView__contact--fullName">{contact.firstName} {contact.lastName}</li></Link>
            }, this)}
          </nav>
        </div>
        {this.props.children}
      </main>


    )
  }
})
