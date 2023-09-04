import './styles/common/reset.css'
import {Mobile, PC} from "./components/config/Responsive";
import classes from "./styles/pages/main.module.css";
import Header from "./components/pages/Layout/Header";
import Slide1 from "./components/pages/Layout/Slide1";
import Section1 from "./components/pages/Layout/Section1";
import Slide2 from "./components/pages/Layout/Slide2";
import Slide3 from "./components/pages/Layout/Slide3";
import Menu from "./components/blocks/Menu";

function App() {

  // redux load..
  //const isLogin = useSelector(state => state.loginCheck.loginInfo);

  // redux update..
  //const dispatch = useDispatch();
  //dispatch(loginCheckAction.loginInfoSet(true));

  return (
      <div id='wrap'>
        <main style={{height : '100vh'}}>
          <PC>
            <div className={classes.pcWrap} >
              <p className={classes.pcWrapInner}>화면을 550px 이하로 줄여 주세요.</p>
            </div>
          </PC>
          <Mobile>
            <Header />
            <Slide1 />
            <Section1 />
            <Slide2 />
            <Slide3 />
            <Menu />
          </Mobile>
        </main>
      </div>
  );
}

export default App;
