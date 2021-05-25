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
            <div class="cmpny">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="cmpny-first pt-5">
                                <div class="tittle-cmpny">
                                    <h6>LIFECELL > </h6>
                                    <a href="# ">company &gt; </a>
                                    <a class="ml-1 clt" href="# ">Information</a>
                                </div>
                                <div class="new-px ">
                                    <p class="trest-cmpny">
                                        Information
                                    </p>
                                </div>

                                <div class="paraghp-blog">
                                    <p>For nearly a decade, South Beach Skincare has been creating innovative clinical skin care products with the philosophy that “youthful skin is possible at ANY age.” We don’t just want you to look younger, we want you
                                        to feel younger. We stick to this idea from beginning to end.</p>

                                    <p>At South Beach Skincare, we are dedicated to bring you the latest advancements in skincare. We believe that there is an alternative to those harmful, invasive procedures women are tricked into every year. Say goodbye
                                        to cosmetic injections and facelifts. What was once an almost impossible to achieve concept, is now possible. Our anti-aging treatments are guaranteed to keep you looking young and beautiful.</p>


                                </div>
                                <div class="green">
                                    <img src="images/about-content-img3.png" alt=""/>
                                </div>
                                <div class="life">
                                    <img src="images/lifecell-logo-content-300x63.png" alt=" "/>
                                    <h3>LifeCell South Beach Skincare <br/>1909 Tyler St Suite 701<br/> Hollywood, FL, 33020</h3>

                                    <ul class="life-menu">
                                        <li> <a href="# " target="_blank ">+1 954.606.5057
                                        </a> </li>
                                        <li><a href="# " target="_blank ">954-606-5057</a> </li>
                                        <li> <a href="# " target="_blank ">support@lifecellskincare.com</a></li>
                                    </ul>
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
