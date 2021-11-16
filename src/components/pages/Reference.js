import axios from "axios";
import React from "react";
import Contents from "../layouts/Contents";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Loading from "../layouts/Loading";
import WrapTitle from "../layouts/WrapTitle";
import ReferInfo from "../info/ReferInfo"
import CssInfo from "../info/CssInfo"
import ScriptInfo from "../info/ScriptInfo"
import ContInfo from "../layouts/ContInfo";

class Reference extends React.Component {
    state =  {
        isLoading:true,
        htmlRefer: [],
        cssRefer: [],
        scriptRefer: []
    }

    getRefer = async () => {
        const {
            data: {
                data: {htmlRefer},
            },
        } = await axios.get("https://daeyeong0412.github.io/react999/src/assets/json/refer.json");
        this.setState({htmlRefer, isLoading : false} )

        const {
            data: {
                data: {cssRefer},
            },
        } = await axios.get("https://daeyeong0412.github.io/react999/src/assets/json/css.json");
        this.setState({cssRefer, isLoading : false} )

        const {
            data: {
                data: {javascriptRefer},
            },
        } = await axios.get("https://daeyeong0412.github.io/react999/src/assets/json/script.json");
        this.setState({javascriptRefer, isLoading : false} )
    }

    componentDidMount() {
        setTimeout(()=>{
            this.getRefer();
        }, 2000)
    }

    render(){
        const {isLoading, htmlRefer, cssRefer, javascriptRefer} = this.state;

        return (
            <div>
                {isLoading ? (
                    <Loading></Loading>
                ) : (
                    <div>
                    <Header></Header>
                    <Contents>
                        <section id="referCont">
                            <WrapTitle text={['REFERENCE','BOOK']}></WrapTitle>
                            <div className="container">
                                <div className="refer__cont">
                                    <ul>
                                        <li className="active">HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                    </ul>
                                    <div className="table">
                                        <ul>
                                            {htmlRefer.map((refer) => (
                                                <ReferInfo
                                                key = {refer.id}
                                                refer = {refer}
                                                >
                                                </ReferInfo>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="table">
                                        <ul>
                                            {cssRefer.map((refer) => (
                                                <CssInfo
                                                key = {refer.id}
                                                css = {refer}
                                                >
                                                </CssInfo>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="table">
                                        <ul>
                                            {javascriptRefer.map((refer) => (
                                                <ScriptInfo
                                                key = {refer.id}
                                                refer = {refer}
                                                >
                                                </ScriptInfo>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <ContInfo></ContInfo>
                    </Contents>
                    <Footer></Footer> 
                    </div>
                )}
            </div>
        )
    }
}

export default Reference;