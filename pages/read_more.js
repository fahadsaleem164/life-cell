import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import React , {Component} from "react";


class information extends React.Component {

  render(){

    return (
      <div class="main">
            <Header></Header>
            <div class="shop">
            <div class="read">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="blog-first">
                                <div class="tittle-read">
                                    <h6>LIFECELL &gt; </h6>
                                    <a href="# ">NEWS&gt; </a>
                                    <a href="# "> SKIN CARE &gt;</a>
                                    <a href="# " class="offical">OFFICIAL LIFECELL ANTI-AGING CREAM INGREDIENT LIST</a>
                                </div>
                                <div class="new-px ">
                                    <p class="trest-read">
                                        Official Lifecell Anti-Aging Cream Ingredient List
                                    </p>
                                </div>
                                <div class="rating-read ">
                                    <h6> JULY 31, 2017</h6>
                                </div>
                                <div class="lest">
                                    <h6>What are the ingredients in LifeCell Anti-Aging Cream?</h6>
                                    <ul class="b">
                                        <li>DERMAXYL</li>
                                        <li>Instant puffiness Relief</li>
                                        <li>Retinol (Vitamin A)</li>
                                        <li>Deanol – Muscle Toning and Firmness Activator</li>
                                        <li>Hyaluronic Acid</li>
                                        <li>Ascorbyl palmitate (Vitamin C)</li>
                                        <li>Retinol (Vitamin A)</li>
                                    </ul>

                                </div>
                                <div class="paraghp-read">
                                    <h6>DERMAXYL:</h6>
                                    <p> Look younger and well rested with LifeCell Cooling Under Eye Treatment. Its skin-strengthening ingredients, Vitamin C Ester, DMAE, and Retinol, work immediately and over time to smooth and brighten the eye area. Its
                                        ultra-cooling metal applicator refreshes and reduces puffiness. Easy to take anywhere, it provides refreshing on-the-go treatment.</p>
                                </div>
                                <div class="paraghp-read">
                                    <h6>Hyaluronic Acid</h6>
                                    <p> Look younger and well rested with LifeCell Cooling Under Eye Treatment. Its skin-strengthening ingredients, Vitamin C Ester, DMAE, and Retinol, work immediately and over time to smooth and brighten the eye area. Its
                                        ultra-cooling metal applicator refreshes and reduces puffiness. Easy to take anywhere, it provides refreshing on-the-go treatment.</p>
                                </div>
                                <div class="paraghp-read">
                                    <h6>Ubiquinone – Super Anti-Oxidant</h6>
                                    <p> Look younger and well rested with LifeCell Cooling Under Eye Treatment. Its skin-strengthening ingredients, Vitamin C Ester, DMAE, and Retinol, work immediately and over time to smooth and brighten the eye area. Its
                                        ultra-cooling metal applicator refreshes and reduces puffiness. Easy to take anywhere, it provides refreshing on-the-go treatment.</p>
                                </div>
                                <div class="paraghp-read">
                                    <h6>Deanol – Muscle Toning and Firmness Activator</h6>
                                    <p> Look younger and well rested with LifeCell Cooling Under Eye Treatment. Its skin-strengthening ingredients, Vitamin C Ester, DMAE, and Retinol, work immediately and over time to smooth and brighten the eye area. Its
                                        ultra-cooling metal applicator refreshes and reduces puffiness. Easy to take anywhere, it provides refreshing on-the-go treatment.</p>
                                </div>
                                <div class="pervis">
                                    <a href="# " class="offical">pREVIOUS pOST</a>
                                    <h6 class="mt-4"> LEAVE A REpLY</h6>
                                    <p> Your email address will not be published. Required fields are marked *</p>

                                </div>
                                <div class="cmnt">
                                    <h6> *COMMENT:</h6>
                                    <textarea id="subject" class="sbj" name="subject" placeholder=""></textarea>
                                    <h6> *YOUR NAME:</h6>
                                    <input type="text" id="fname" name="fname"/>
                                    <h6> *YOUR EMAIL:</h6>
                                    <input type="text" id="fname" name="fname"/>
                                    <h6>WEBSITE</h6>
                                    <input type="text" id="fname" name="fname"/>
                                    <label class="container">
                                        <input type="checkbox" checked="checked" class="bx"/>
                                        <span>
                                            SAVE MY NAME, EMAIL, AND WEBSITE IN THIS BROWSER FOR THE NEXT TIME I COMMENT.</span>
                                      </label>
                                    <div class="check">
                                        <button type="button " class="btn btn-read">
                                            post Comment
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 ">
                            <div class="vd-box-blog ">

                                <div class="menu-blut">
                                    <h6> BLOG CATEGORIES</h6>
                                    <a href="#" class="mb-2"> <img src="images/menu-bullets-red.png" alt=""/> ANTI-AGING TIpS
                                    </a>
                                    <a href="#" class="mb-2"> <img src="images/menu-bullets-red.png" alt=""/> BEAUTY TIpS
                                    </a>
                                    <a href="#" class="mb-2"> <img src="images/menu-bullets-red.png" alt=""/> EVENTS & pROMOS
                                    </a>
                                    <a href="#" class="mb-2"> <img src="images/menu-bullets-red.png" alt=""/> HEALTHY LIVING
                                    </a>
                                    <a href="#" class="mb-2"> <img src="images/menu-bullets-red.png" alt=""/> SKIN CARE
                                    </a>
                                    <a href="#" class="mb-2"> <img src="images/menu-bullets-red.png" alt=""/> SKIN CARE NEWS
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
             <Footer></Footer>
      </div>
     
    )
 }
}
export default information
