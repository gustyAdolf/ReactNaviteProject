import { connect } from "react-redux";
import Component from "./view";
import * as locationsActions from "../../../redux/locations/actions";

const mapStateToProps = (state) => {
  return {
    list: state.locations.list,
    loading: state.locations.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initList: () => {
      dispatch(locationsActions.getList());
    },
    setLoading: value => {
      dispatch(locationsActions.setLoading(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
