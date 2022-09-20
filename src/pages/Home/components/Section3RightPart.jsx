
import Container from "react-bootstrap/Container";
import SectionTopSaveToday from './SectionTopSaveToday';
import leavs from '../images/leavs.svg'
function Section3RightPart() {
  return (
    <div classNameName=" py-2">
      <Container><div className="title title-flex">
                        <div>
                            <h2>Top Save Today</h2>
                            {/* <span className="title-leaf">
                               <img src={leavs} className="w-2"/>
                            </span> */}
                            <p>Don't miss this opportunity at a special discount just for this week.</p>
                        </div>
                        {/* <div className="timing-box">
                            <div className="timing">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                <h6 className="name">Expires in :</h6>
                                <div className="time">
                                    <ul>
                                        <li>
                                            <div className="counter">
                                                <div>
                                                    <h6 id="days1">334</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="counter">
                                                <div>
                                                    <h6 id="hours1">10</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="counter">
                                                <div>
                                                    <h6 id="minutes1">35</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="counter">
                                                <div>
                                                    <h6 id="seconds1">45</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <SectionTopSaveToday/>
                    </Container></div>
  );}
  export default Section3RightPart;