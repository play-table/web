import './styles/common/reset.css'
import {Mobile, PC} from "./components/config/Responsive";
import classes from "./styles/pages/main.module.css";
import Header from "./components/pages/Layout/Header";
import Slide1 from "./components/pages/Layout/Slide1";
import Section1 from "./components/pages/Layout/Section1";
import Slide2 from "./components/pages/Layout/Slide2";
import Slide3 from "./components/pages/Layout/Slide3";
import Menu from "./components/blocks/Menu";
import SmallButton from "./components/atoms/SmallButton";
import MiniStoreInfo from "./components/blocks/MiniStoreInfo";
import ReviewCard from "./components/blocks/ReviewCard";
import BigOrangeButton from "./components/atoms/BigOrangeButton";
import BigWhiteButton from "./components/atoms/BigWhiteButton";
import RoundButton from "./components/atoms/RoundButton";
import StarBox from "./components/atoms/StarBox";

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
            <SmallButton content="리뷰쓰기" type="orange"/>
            <SmallButton content="06:30"  type="orange"/>
            <SmallButton content="승인"  type="orange"/>
            <SmallButton content="취소"  type="white"/>
            <MiniStoreInfo/>
            <ReviewCard/>
            <BigOrangeButton content="예약 등록하기"/>
            <BigOrangeButton content="웨이팅 등록하기"/>
            <BigOrangeButton content="내 정보 수정"/>
            <BigOrangeButton content="리뷰 작성"/>
            <BigWhiteButton content="닫기"/>
            <BigWhiteButton content="예약 취소"/>
            <BigWhiteButton content="웨이팅 취소"/>
            <RoundButton content="1명" type="click"/>
            <RoundButton content="2명" type="noClick"/>
            <StarBox/>
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
