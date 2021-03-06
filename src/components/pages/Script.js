import React from "react";
import Contents from "../layouts/Contents";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

function Script() {
    return (
        <div>
        <Header></Header>
        <Contents>
            <section id="scriptCont">
                <div className="container">
                    <div className="wrap__title">
                        <h2><strong>Script</strong><em>Reference</em></h2>
                    </div>
                    <div className="script__cont">
                        
                    </div>
                </div>
            </section>

            <section id="contactInfo">
                <div className="contact__info">
                    <div>
                        <p>Let’s create something new</p>
                        <h3>LET`S Get IN<br />TOUCH</h3>
                        <a href="contact.html" className="contact">Contact Me</a>
                    </div>
                </div>
            </section>
        </Contents>
        <Footer></Footer>  
    </div>
    )
}

export default Script;