import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { getContacts } from '../../redux/filterSelector';
import { contactAddAction } from '../../redux/filterAction';

const mapStateToProps = state => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(contactAddAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
