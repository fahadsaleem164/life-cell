import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import React , {Component} from "react";


class our_company extends React.Component {

  render(){

    return (
      <div class="main">
            <Header></Header>
            <div class="shop">
            <div class="cmpny">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="cmpny-first">
                                <div class="tittle-cmpny">
                                    <h6>LIFECELL &gt; </h6>
                                    <a href="# ">company &gt; </a>
                                    <a class="ml-1 clt" href="# ">Our-company</a>
                                </div>
                                <div class="new-px ">
                                    <p class="trest-cmpny">
                                        Our Company
                                    </p>
                                </div>

                                <div class="paraghp-blog">
                                    <p>For nearly a decade, South Beach Skincare has been creating innovative clinical skin care products with the philosophy that “youthful skin is possible at ANY age.” We don’t just want you to look younger, we want you
                                        to feel younger. We stick to this idea from beginning to end.</p>

                                    <p>At South Beach Skincare, we are dedicated to bring you the latest advancements in skincare. We believe that there is an alternative to those harmful, invasive procedures women are tricked into every year. Say goodbye
                                        to cosmetic injections and facelifts. What was once an almost impossible to achieve concept, is now possible. Our anti-aging treatments are guaranteed to keep you looking young and beautiful.</p>


                                </div>
                                <div class="check-BOX">
                                    <h4> Youthful skin is possible at ANY age!</h4>
                                </div>

                                <div class="paraghp-blog pt-4">
                                    <p>For nearly a decade, South Beach Skincare has been creating innovative clinical skin care products with the philosophy that “youthful skin is possible at ANY age.” We don’t just want you to look younger, we want you
                                        to feel younger. We stick to this idea from beginning to end.</p>

                                    <p>Now, LifeCell is the go-to skin care product for millions of people around the world. With our line of skincare products it is easier to keep your face looking and feeling young!</p>


                                </div>
                                <div class="green">
                                    <img src="images/about-content-img1.png" alt=""/>
                                    <div class="new-px ">
                                        <p class="trest-cmpny">
                                            Our Company
                                        </p>
                                    </div>
                                    <div class="paraghp-blog ">
                                        <p>For nearly a decade, South Beach Skincare has been creating innovative clinical skin care products with the philosophy that “youthful skin is possible at ANY age.” We don’t just want you to look younger, we want
                                            you to feel younger. We stick to this idea from beginning to end.</p>

                                        <p>Now, LifeCell is the go-to skin care product for millions of people around the world. With our line of skincare products it is easier to keep your face looking and feeling young!</p>

                                    </div>
                                </div>
                                <div class="pink">
                                    <div class="new-px ">
                                        <p class="trest-cmpny">
                                            LifeCell is Certified 100% Cruelty Free by peta
                                        </p>
                                    </div>
                                    <div class="paraghp-blog ">
                                        <p>For nearly a decade, South Beach Skincare has been creating innovative clinical skin care products with the philosophy that “youthful skin is possible at ANY age.” We don’t just want you to look younger, we want
                                            you to feel younger. We stick to this idea from beginning to end.</p>
                                        <img src="images/about-content-img2.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cmpny-prodt">
                    <div class="life-title">
                        <span>LIFECELL <br/> <strong> pRODUCTS </strong></span>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="squre-tb">
                                <div class="text">
                                    <h5>LifeCell All-In-One Skin-Tightening </h5>
                                    <p>pamper yourself with LifeCell’s facial in a jar. No spa required.</p>
                                    <h6> $127.00</h6>
                                    <button type="button" class="btn"> Learn more &gt; </button>
                                    <button type="button" class="btn"> buy &gt; </button>
                                </div>
                                <div class="pctr">
                                    <img src="images/allinone_1000.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="squre-tb">
                                <div class="text">
                                    <h5>LifeCell purifying Mask</h5>
                                    <p>pamper yourself with LifeCell’s facial in a jar. No spa required.</p>
                                    <h6> $127.00</h6>
                                    <button type="button" class="btn"> Learn more &gt; </button>
                                    <button type="button" class="btn"> buy &gt; </button>
                                </div>
                                <div class="pctr">
                                    <img src="images/LifeCell_Silos-5@2x.png" alt=""/>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="squre-tb">
                                <div class="text">
                                    <h5>LifeCell purifying Mask</h5>
                                    <p>pamper yourself with LifeCell’s facial in a jar. No spa required.</p>
                                    <h6> $127.00</h6>
                                    <button type="button" class="btn"> Learn more &gt; </button>
                                    <button type="button" class="btn"> buy &gt; </button>
                                </div>
                                <div class="pctr">
                                    <img src="images/eye@2x-3.png" alt=""/>
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
export default our_company
