import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import React , {Component} from "react";


class Home extends React.Component {

  render(){

    return (
      <div class="main">
            <Header></Header>
       
            <div class="tw0-pic">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="first-prodct">
                            <img src="images/bigproductwhitlogo.png" alt=""/>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="second-home">
                            <img src="images/home-slider-content.png" alt=""/>
                            <p>
                                With LifeCell’s Anti-Aging Science Fine Lines and Wrinkles Will Virtually Disappear Before Your Eyes!
                            </p>
                            <div class="buy">
                                <button type="button" class="btn">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="view-all">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-4">
                          <div class="read">
                              <div class="circle">
                                  <img src="images/feature-icon-1.png" alt=""/>
                                  <h5> Anti-Aging Breakthrough</h5>
                                  <p>Discover the revolutionary breakthrough in anti-aging cream that has taken skin care in a new direction. Lines and wrinkles virtually disappear before your eyes. Try LifeCell for yourself and take years off the look of
                                      your skin.</p>
                                  <button type="button" class="btn">Read More > </button>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4">
                          <div class="read">
                              <div class="circle">
                                  <img src="images/feature-icon-2.png" alt=""/>
                                  <h5> Say Goodbye to Wrinkles</h5>
                                  <p>Discover the revolutionary breakthrough in anti-aging cream that has taken skin care in a new direction. Lines and wrinkles virtually disappear before your eyes. Try LifeCell for yourself and take years off the look of
                                      your skin.</p>
                                  <button type="button" class="btn">Read More > </button>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4">
                          <div class="read">
                              <div class="circle">
                                  <img src="images/feature-icon-3.png" alt=""/>
                                  <h5> Try Now 30 Day Trial</h5>
                                  <p>Discover the revolutionary breakthrough in anti-aging cream that has taken skin care in a new direction. Lines and wrinkles virtually disappear before your eyes. Try LifeCell for yourself and take years off the look of
                                      your skin.</p>
                                  <button type="button" class="btn">Read More > </button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="ttile">
                      <h4> LIFECELL PRODUCTS</h4>
                  </div>
                  <div class="LIFECELL">
                      <div class="container">
                          <div class="row">
                              <div class="col-lg-3">
                                  <div class="squre">
                                      <div class="pctr">
                                          <img src="images/eye@2x-3.png" alt=""/>
                                      </div>
                                      <div class="text">
                                          <h5> LifeCell Cooling Under-Eye Treatment </h5>
                                          <h6> $127.00</h6>
                                          <button type="button" class="btn"> Learn more > </button>
                                      </div>
  
                                  </div>
                              </div>
                              <div class="col-lg-3">
                                  <div class="squre">
                                      <div class="pctr">
                                          <img src="images/HAIR-MINI-main.png" alt=""/>
                                      </div>
                                      <div class="text">
                                          <h5> LifeCell Cooling Under-Eye Treatment </h5>
                                          <h6> $127.00</h6>
                                          <button type="button" class="btn"> Learn more > </button>
                                      </div>
  
                                  </div>
                              </div>
                              <div class="col-lg-3">
                                  <div class="squre">
                                      <div class="pctr">
                                          <img src="images/neck@2x-1.png" alt=""/>
                                      </div>
                                      <div class="text">
                                          <h5> LifeCell Cooling Under-Eye Treatment </h5>
                                          <h6> $127.00</h6>
                                          <button type="button" class="btn"> Learn more > </button>
                                      </div>
  
                                  </div>
                              </div>
                              <div class="col-lg-3">
                                  <div class="squre">
                                      <div class="pctr">
                                          <img src="images/cleanser@2x-2.png" alt=""/>
                                      </div>
                                      <div class="text">
                                          <h5> LifeCell Cooling Under-Eye Treatment </h5>
                                          <h6> $127.00</h6>
                                          <button type="button" class="btn"> Learn more > </button>
                                      </div>
  
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="last-pic">
          </div>
          <Footer></Footer>
      </div>
     
    )

  }
  
}

export default Home
