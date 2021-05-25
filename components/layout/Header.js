import React , {Component} from "react";
import Link from 'next/link'

class Header extends React.Component {
    
    openNav(){

        document.getElementById("mySidenav").style.width = "300px";

    }


    closeNav() {

        document.getElementById("mySidenav").style.width = "0";
    
    }



    render(){

        return (
    
            <div>
                <div class="update">
                    <div class="container-fluid">
                        <div class="tittle">
                            <h5>
                                CORONAVIRUS UPDATE
                            </h5>
                            <img src="images/covid-19-icon.png" alt=""/>
                            <h6> As of 05/10/21 there is no delay in orders.</h6>
                        </div>
                    </div>
                </div>
                <div class="slect-br">
                    <header class="main-header">
                       
                        <nav class="navbar navbar-expand-lg">
                            <div class="container-fluid">
                            
                                <div class="navbar-header">
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                                    <i class="fa fa-bars"></i>
                                </button>
                                <Link href='/'>
                                    <a class="navbar-brand" href="index.html"><img src="images/lifecelllogo@2x.png" class="logo" alt=""/></a>
                                </Link>
                                </div>
                               
        
                                <div class="collapse navbar-collapse" id="navbar-menu">
                                    <ul class="nav navbar-nanavbar-nav" data-in="fadeInDown" data-out="fadeOutUp">
                                        <li class="nav-item active"><Link href='/shop'><a class="nav-link">Shop
                                        </a></Link></li>
                                        <li class="nav-item"> <a class="nav-link" href="whats-new.html">What’s New</a></li>
                                        <li class="nav-item"><a class="nav-link" href="science.html">Science</a></li>
                                            <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a>
                                            </li>
                                        
                                            <li class="dropdown">
                                                <a href="#" class="nav-link dropdown" data-toggle="dropdown">company</a>
                                                <ul class="dropdown-menu">
                                                    <li><a href="our-cmpny.html">Our Company</a></li>
                                                    <div class="dropdown-divider"></div>
                                                    <li><a href="information.html">Information</a></li>
                                                </ul>
                                            </li>
                                        
                                        
                                        </ul>
                </div>
        
                                <div class="attr-nav">
                                    <div class="search">
                                        <img src="images/flagusa@2x.png" alt=""/>
                                        <span>United States  </span> </div>
                                    <div class="side-menu">
                                        <div id="mySidenav" class="sidenav whts">
                                            <a href="javascript:void(0)" class="closebtn" onClick={()=>this.closeNav()}>&times;</a>
                                            <h6 class="my-ct"> MY CART</h6>
                                            <hr/>
                                            <div class="totl">
                                                <h6> Subtotal:</h6>
                                                <h6> $0.00 USD</h6>
                                            </div>
                                            <div class="t-last">
                                                <h6> Shipping calculated at check out</h6>
                                                <button type="button" class="btn btn-chk">Checkout →</button>
                                            </div>
        
                                        </div>
        
                                        {/* <!-- Use any element to open the sidenav --> */}
                                        <span onClick={()=>this.openNav()}> <i class="fa fa-shopping-bag"></i></span>
        
                                        {/* <!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page --> */}
                                        <div id="main">
                                            ...
                                        </div>
        
        
                                    </div>
        
                                </div>
        
        
                            </div>
                       
                        </nav>
                      
                    </header>
        
                </div>
        
               
               
            </div>
            );
    }

   
}

export default Header;