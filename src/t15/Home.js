import LiftingState from "./Components/LiftingState";
import PureComp from "./Components/PureComp";
import Usememo1 from "./Components/Usememo";
import Usememo from "./Components/Usememo";

const Home = () => {
  // let name = "umar";
  // function parent(temp) {
  //   alert(temp);
  // }

  return (
    <div>
      {/* <LiftingState data={parent} /> */}
      {/* <PureComp /> */}
      <Usememo1 />
    </div>
  );
};

export default Home;
