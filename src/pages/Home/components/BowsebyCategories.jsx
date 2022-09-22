
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

function BowsebyCategories() {
  return (
    <div className=" py-2">
      <Container>
        <Row>
        <div class="title">
                        <h2>Bowse by Categories</h2>
                        <span class="title-leaf">
                            <svg class="icon-width">
                                {/* <use xlink:href="../assets/svg/leaf.svg#leaf"></use> */}
                            </svg>
                        </span>
                        <p>Top Categories Of The Week</p>
                    </div>
        <div className="slick-list draggable">
          <div className="slick-track">
            <Carousel controls={false} indicators={false}>
              <Carousel.Item interval={4000}>
             
                <a
                  href="shop-left-sidebar.html"
                  className="category-box"
                  tabindex="-1"
                >
                  <div>
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg"
                      className="blur-up lazyloaded"
                      alt=""
                    />
                    <h5>Meats &amp; Seafood</h5>
                  </div>
                </a>
              </Carousel.Item>
              <Carousel.Item interval={4000}>
            
                <a
                  href="shop-left-sidebar.html"
                  className="category-box"
                  tabindex="-1"
                >
                  <div>
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/1/breakfast.svg"
                      className="blur-up lazyloaded"
                      alt=""
                    />
                    <h5>Breakfast</h5>
                  </div>
                </a>
          
              </Carousel.Item>
             
          <Carousel.Item interval={4000}>
            
          <a
                  href="shop-left-sidebar.html"
                  className="category-box"
                  tabindex="-1"
                >
                  <div>
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/1/frozen.svg"
                      className="blur-up lazyloaded"
                      alt=""
                    />
                    <h5>Frozen Foods</h5>
                  </div>
                 </a>
    
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            
            <a
                    href="shop-left-sidebar.html"
                    className="category-box"
                    tabindex="-1"
                  >
                    <div>
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/milk.svg"
                        className="blur-up lazyloaded"
                        alt=""
                      />
                      <h5>Milk &amp; Dairies</h5>
                    </div>
                   </a>
      
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            
          <a
                  href="shop-left-sidebar.html"
                  className="category-box"
                  tabindex="-1"
                >
                  <div>
                    <img
                      src="	https://themes.pixelstrap.com/fastkart/assets/svg/1/pet.svg"
                      className="blur-up lazyloaded"
                      alt=""
                    />
                    <h5>Pet Food</h5>
                  </div>
            </a>
      
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            
          <a
                  href="shop-left-sidebar.html"
                  className="category-box"
                  tabindex="-1"
                >
                  <div>
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg"
                      className="blur-up lazyloaded"
                      alt=""
                    />
                    <h5>Beverages</h5>
                  </div>
                 </a>
      
          </Carousel.Item>
          <Carousel.Item interval={4000}>
          <a
                  href="shop-left-sidebar.html"
                  className="category-box"
                  tabindex="-1"
                >
                  <div>
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg"
                      className="blur-up lazyloaded"
                      alt=""
                    />
                    <h5>Vegetables &amp; Fruit</h5>
                  </div>
                </a>
        
            </Carousel.Item>
            </Carousel>
      
         </div></div>
        </Row>
      </Container>
    </div>
  );
}
export default BowsebyCategories;




//               <div
//                 className="slick-slide slick-cloned"
//                 data-slick-index="-3"
//                 id=""
//                 aria-hidden="true"
//                 tabindex="-1"
//               >
//                 <a
//                   href="shop-left-sidebar.html"
//                   className="category-box"
//                   tabindex="-1"
//                 >
//                   <div>
//                     <img
//                       src="https://themes.pixelstrap.com/fastkart/assets/svg/1/frozen.svg"
//                       className="blur-up lazyloaded"
//                       alt=""
//                     />
//                     <h5>Frozen Foods</h5>
//                   </div>
//                 </a>
//               </div>
//               <div
//                 className="slick-slide slick-cloned"
//                 data-slick-index="-2"
//                 id=""
//                 aria-hidden="true"
//                 tabindex="-1"
//               >
//                 <a
//                   href="shop-left-sidebar.html"
//                   className="category-box"
//                   tabindex="-1"
//                 >
//                   <div>
//                     <img
//                       src="	https://themes.pixelstrap.com/fastkart/assets/svg/1/milk.svg"
//                       className="blur-up lazyloaded"
//                       alt=""
//                     />
//                     <h5>Milk &amp; Dairies</h5>
//                   </div>
//                 </a>
//               </div>
//               <div
//                 className="slick-slide slick-cloned"
//                 data-slick-index="-1"
//                 id=""
//                 aria-hidden="true"
//                 tabindex="-1"
//               >
//                 <a
//                   href="shop-left-sidebar.html"
//                   className="category-box"
//                   tabindex="-1"
//                 >
//                   <div>
//                     <img
//                       src="	https://themes.pixelstrap.com/fastkart/assets/svg/1/pet.svg"
//                       className="blur-up lazyloaded"
//                       alt=""
//                     />
//                     <h5>Pet Food</h5>
//                   </div>
//                 </a>
//               </div>
//               <div
//                 className="slick-slide"
//                 data-slick-index="0"
//                 aria-hidden="true"
//                 tabindex="-1"
//                 role="tabpanel"
//                 id="slick-slide00"
//                 aria-describedby="slick-slide-control00"
//               >
//                 <a
//                   href="shop-left-sidebar.html"
//                   className="category-box"
//                   tabindex="-1"
//                 >
//                   <div>
//                     <img
//                       src="https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg"
//                       className="blur-up lazyloaded"
//                       alt=""
//                     />
//                     <h5>Vegetables &amp; Fruit</h5>
//                   </div>
//                 </a>
//               </div>
//               <div
//                 className="slick-slide"
//                 data-slick-index="1"
//                 aria-hidden="true"
//                 tabindex="-1"
//                 role="tabpanel"
//                 id="slick-slide01"
//                 aria-describedby="slick-slide-control01"
//               >
//                 <a
//                   href="shop-left-sidebar.html"
//                   className="category-box"
//                   tabindex="-1"
//                 >
//                   <div>
//                     <img
//                       src="https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg"
//                       className="blur-up lazyloaded"
//                       alt=""
//                     />
//                     <h5>Beverages</h5>
//                   </div>
//                 </a>
//               </div>
          
//             </div>
//           </div>
//           <button
//             className="slick-next slick-arrow"
//             aria-label="Next"
//             type="button"
//           >
//             Next
//           </button>
//           <ul className="slick-dots" role="tablist">
//             <li className="" role="presentation">
//               <button
//                 type="button"
//                 role="tab"
//                 id="slick-slide-control00"
//                 aria-controls="slick-slide00"
//                 aria-label="1 of 2"
//                 tabindex="-1"
//               >
//                 1
//               </button>
//             </li>
//             <li role="presentation" className="">
//               <button
//                 type="button"
//                 role="tab"
//                 id="slick-slide-control01"
//                 aria-controls="slick-slide01"
//                 aria-label="2 of 2"
//                 tabindex="-1"
//               >
//                 2
//               </button>
//             </li>
//             <li role="presentation" className="slick-active">
//               <button
//                 type="button"
//                 role="tab"
//                 id="slick-slide-control02"
//                 aria-controls="slick-slide02"
//                 aria-label="3 of 2"
//                 tabindex="0"
//                 aria-selected="true"
//               >
//                 3
//               </button>
//             </li>
//             <li role="presentation" className="">
//               <button
//                 type="button"
//                 role="tab"
//                 id="slick-slide-control03"
//                 aria-controls="slick-slide03"
//                 aria-label="4 of 2"
//                 tabindex="-1"
//               >
//                 4
//               </button>
//             </li>
//             <li role="presentation" className="">
//               <button
//                 type="button"
//                 role="tab"
//                 id="slick-slide-control04"
//                 aria-controls="slick-slide04"
//                 aria-label="5 of 2"
//                 tabindex="-1"
//               >
//                 5
//               </button>
//             </li>
//             <li role="presentation" className="">
//               <button
//                 type="button"
//                 role="tab"
//                 id="slick-slide-control05"
//                 aria-controls="slick-slide05"
//                 aria-label="6 of 2"
//                 tabindex="-1"
//               >
//                 6
//               </button>
//             </li>
//             <li role="presentation" className="">
//               <button
//                 type="button"
//                 role="tab"
//                 id="slick-slide-control06"
//                 aria-controls="slick-slide06"
//                 aria-label="7 of 2"
//                 tabindex="-1"
//               >
//                 7
//               </button>
//             </li>
//           </ul>
//         </div>
//       </Container>
//     </div>
//   );
// }
// export default BowsebyCategories;
