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
          phoneNumber: "(214)443-2376",
          city: "dallas",
          state: "tx",
          photo: "romo.png"
        },
        {
          firstName: "jason",
          lastName: "witten",
          email: "number82@dallascowboys.com",
          phoneNumber: "(214)554-7534",
          city: "fort worth",
          state: "tx",
          photo: "witten.png"
        },
        {
          firstName: "dez",
          lastName: "bryant",
          email: "number88@dallascowboys.com",
          phoneNumber: "(214)963-0434",
          city: "dallas",
          state: "tx",
          photo: "bryant.png"
        },
        {
          firstName: "sean",
          lastName: "lee",
          email: "number50@dallascowboys.com",
          phoneNumber: "(214)867-5912",
          city: "frisco",
          state: "tx",
          photo: "lee.png"
        },
        {
          firstName: "dan",
          lastName: "bailey",
          email: "number5@dallascowboys.com",
          phoneNumber: "(214)347-8965",
          city: "irving",
          state: "tx",
          photo: "bailey.png"
        }
      ]
    }
  },
  render() {
    return (
      <main>
        <div className="listView">
          <h1 className="listView__heading">my &lsquo;boys</h1>
          <nav className="listView__contacts">
            {this.props.contacts.map(function(contact, i){
              return <Link to={`/${contact.lastName}/${contact.firstName}/${contact.email}/${contact.phoneNumber}/${contact.city}/${contact.state}/${contact.photo}`} key={i} className="listView__contact"><img className="listView__contact--image" src={`./images/${contact.photo}`}/><li className="listView__contact--fullName">{contact.firstName} {contact.lastName}</li></Link>
            }, this)}
          </nav>
        </div>
        {this.props.children}
      </main>


    )
  }
})
