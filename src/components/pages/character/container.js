import { connect } from "react-redux";
import Component from "./view";

const mapStateToProps = state => {
  return {};
}
const mapDispatchToProps = dispatch => {
  return {
    getCharacter: id => {

    }
  };

}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
