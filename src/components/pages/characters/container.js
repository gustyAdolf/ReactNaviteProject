import { connect } from "react-redux";
import Component from "./view";
import * as charactersAction from '../../../redux/characters/actions';

const mapStateToProps = state => {
  return {
    list: state.characters.list,
    loading: state.characters.loading
  };
};

const mapDispatchToProps = dispatch => {
  console.log(dispatch);
  return {
    initList: () => {
      dispatch(charactersAction.getList());
    },
    setLoading: value => {
      dispatch(charactersAction.setLoading(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
