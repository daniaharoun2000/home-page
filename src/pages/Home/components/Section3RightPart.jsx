import CountdownTimer from './CountdownTimer';
import TopSaveToday from './TopSaveToday';
import Container from "react-bootstrap/Container";
// import SectionTopSaveToday from './SectionTopSaveToday';
// import leavs from '../images/leavs.svg'
import BowsebyCategories from "./BowsebyCategories";
import fiftypercentoffer from './fiftypercentoffer';
function Section3RightPart() {
    
        const THREE_DAYS_IN_MS = 333 * 24 * 60 * 60 * 1000;
        const NOW_IN_MS = new Date().getTime();
      
        const dateTimeAfter333Days = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <div classNameName=" py-2">
      <Container>
        
        
      <div class="title title-flex">
                        <div>
                            <h2>Top Save Today</h2>
                            <span class="title-leaf">
                                <svg class="icon-width">
                                    {/* <use xlink:href="../assets/svg/leaf.svg#leaf"></use> */}
                                </svg>
                            </span>
                            <p>Don't miss this opportunity at a special discount just for this week.</p>
                        </div>
                        <div class="timing-box d-inline-flex">
                            <div class="timing">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='text-overflow-1'class ="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                <h6 class="name text-overflow-1">Expires in :</h6>
                                <div class="time">
                                <CountdownTimer targetDate={dateTimeAfter333Days} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <TopSaveToday/>
                    <BowsebyCategories/>
                <fiftypercentoffer/>
                    
                    </Container></div>
  );}
  export default Section3RightPart;