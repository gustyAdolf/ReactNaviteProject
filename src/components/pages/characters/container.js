import { connect } from "react-redux";
import Component from "./view";
import * as charactersAction from "../../../redux/characters/actions";

const mapStateToProps = state => {
  return {
    list: state.characters.list,
    loading: state.characters.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initList: () => {
      dispatch(charactersAction.getList());
    },
    setCharacter: character => {
      dispatch(charactersAction.setItem(character));
    },
    setLoading: value => {
      dispatch(charactersAction.setLoading(value));
    },
    onSubmit: name => dispatch(charactersAction.getCharacterByName(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
