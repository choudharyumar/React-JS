import ForwardRef from "./Components/ForwardRef";
import LiftingState from "./Components/LiftingState";
import PureComp from "./Components/PureComp";
import Ref from "./Components/Ref";
import UseRef from "./Components/UseRef";
import Usememo1 from "./Components/Usememo";

const Home = () => {
  // let name = "umar";
  // function parent(temp) {
  //   alert(temp);
  // }

  return (
    <div>
      {/* <LiftingState data={parent} /> */}
      {/* <PureComp /> */}
      {/* <Usememo1 /> */}
      {/* <Ref /> */}
      {/* <UseRef /> */}
      <ForwardRef />
    </div>
  );
};

export default Home;
