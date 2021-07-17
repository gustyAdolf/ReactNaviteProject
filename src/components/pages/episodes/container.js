import { connect } from "react-redux";
import Component from "./view";
import * as episodesActions from "../../../redux/episodes/actions";

const mapStateToProps = (state) => {
  return {
    list: state.episodes.list,
    loading: state.episodes.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initList: () => {
      dispatch(episodesActions.getList());
    },
    setLoading: value => {
      dispatch(episodesActions.setLoading(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
