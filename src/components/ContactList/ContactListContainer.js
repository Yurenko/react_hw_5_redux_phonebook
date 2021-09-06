import { connect } from 'react-redux';
import ContactList from './ContactList';
import { inputFilter } from '../../redux/filterSelector';
import { contactDeleteAction } from '../../redux/filterAction';

const mapStateToProps = state => ({
  example: inputFilter(state),
});

const mapDispatchToProps = dispatch => ({
  handleDelete: id => dispatch(contactDeleteAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
