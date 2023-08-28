import { connect } from "react-redux";
import cardItem from "../Services/Reducers/Reducer";
import Home from "../Components/Home";
const mapStateToProps = (dispatch) => ({
  // AddToCartHandler: (data) => dispatch(cardItem(data)),
});
const mapDispatchToProps = (dispatch) => ({
  AddToCartHandler: (data) => dispatch(cardItem(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
