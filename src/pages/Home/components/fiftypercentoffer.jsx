import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import svgg from "../images/arrowright.svg";
function fiftypercentoffer() {
  return (
    <div className=" py-2">
      <Container>
      <div class="section-t-space section-b-space">
      <div class="row g-md-4 g-3">
                            <div class="col-md-6">
                                <div class="banner-contain hover-effect bg-size blur-up lazyloaded" >
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/9.jpg" class="bg-img blur-up lazyload" alt="" />
                                    <div class="banner-details p-center-left p-4">
                                        <div>
                                            <h3 class="text-exo">50% offer</h3>
                                            <h4 class="text-russo fw-normal theme-color mb-2">Testy Mushrooms</h4>
                                            <button onclick="location.href = 'shop-left-sidebar.html';" class="btn btn-animation btn-sm mend-auto">Shop Now <i class="fa-solid fa-arrow-right icon"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="banner-contain hover-effect bg-size blur-up lazyloaded" >
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/10.jpg" class="bg-img blur-up lazyload" alt="" />
                                    <div class="banner-details p-center-left p-4">
                                        <div>
                                            <h3 class="text-exo">50% offer</h3>
                                            <h4 class="text-russo fw-normal theme-color mb-2">Fresh MEAT</h4>
                                            <button onclick="location.href = 'shop-left-sidebar.html';" class="btn btn-animation btn-sm mend-auto">Shop Now <i class="fa-solid fa-arrow-right icon"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                     </div>   </div>
        </Container>
        </div>
  );
}
export default fiftypercentoffer;