import { connect } from 'react-redux';
import { filterInputAction } from '../../redux/filterAction';
import { getFilter } from '../../redux/filterSelector';
import Filter from './Filter';

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  handleFilter: e => dispatch(filterInputAction(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
