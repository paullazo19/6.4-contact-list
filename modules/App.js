import React from 'react';
import { Link } from 'react-router';

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
          state: "tx"
        },
        {
          firstName: "jason",
          lastName: "witten",
          email: "number82@dallascowboys.com",
          phoneNumber: "2145547534",
          city: "fort worth",
          state: "tx"
        },
        {
          firstName: "dez",
          lastName: "bryant",
          email: "number88@dallascowboys.com",
          phoneNumber: "2149630434",
          city: "dallas",
          state: "tx"
        },
        {
          firstName: "sean",
          lastName: "lee",
          email: "number50@dallascowboys.com",
          phoneNumber: "2148675912",
          city: "frisco",
          state: "tx"
        },
        {
          firstName: "dan",
          lastName: "bailey",
          email: "number5@dallascowboys.com",
          phoneNumber: "2143478965",
          city: "irving",
          state: "tx"
        }
      ]
    }
  },
  render() {
    console.log(this.props.contacts);
    return (
      <main>
        <h1 className="listView__heading">my &lsquo;boys</h1>
        <div>
          <nav className="contacts">
            {this.props.contacts.map(function(contact, i){
              return <Link to={`/detailView/${contact.firstName}${contact.lastName}`} key={i} className="listView__contact--fullName"> <li>{contact.firstName} {contact.lastName}</li></Link>
            })}
          </nav>
        </div>
        {this.props.children}
      </main>


    )
  }
})
