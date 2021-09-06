import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactForm from './components/ContastForm/ContactFormContainer';
import Filter from './components/Filter/FilterContainer';
import ContactList from './components/ContactList/ContactListContainer';
import { filerSuccessActions } from './redux/filterAction';

class App extends Component {
  state = {};

  componentDidMount() {
    const ls = localStorage.getItem('contacts');
    const items = JSON.parse(ls);

    if (!items) return;
    const { fetch } = this.props;
    fetch(items);
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addUser={this.addUser} />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

const mdtp = dispatch => ({
  fetch: contacts => dispatch(filerSuccessActions(contacts)),
});

export default connect(null, mdtp)(App);
