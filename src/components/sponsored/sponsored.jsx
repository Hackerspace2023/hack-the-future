import React from "react";
import SponserList from "./SponserList";
import './sponsored.css';
const Sponser = () => {
    const sponserData = [
        {
            id: 'sp1',
            sponserName: 'Title Sponsor',
            sponserWesite: 'https://iocl.com/',
            sponserImage: "images/iocl.png",
        }, {
            id: 'sp2',
            sponserName: 'International Partner',
            sponserWesite: 'https://girlswhocode.com/',
            sponserImage: 'images/gwc.png',
        }, {
            id: 'sp3',
            sponserName: 'CoPowered by',
            sponserWesite: 'https://www.codingninjas.in/',
            sponserImage: 'images/cn.png',
        }, {
            id: 'sp4',
            sponserName: 'Media Partner',
            sponserWesite: 'https://www.jagran.com/',
            sponserImage: 'images/dainikjagran.png',
        }, {
            id: 'sp5',
            sponserName: 'Associate Sponsors',
            sponserWesite: 'https://www.jetbrains.com/',
            sponserImage: 'images/jetbrains.png',
        }, {
            id: 'sp6',
            sponserName: 'Platform Partners',
            sponserWesite: 'https://codechef.com/',
            sponserImage: 'images/codechef.png',
        },
    ]
    return (
        <div>
            <div id="lgx-sponsors" className="lgx-sponsors">
                <div className="lgx-inner-bg">
                    <div className="lgx-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="lgx-heading">
                                        <h2 className="heading">Offcial Sponsors</h2>
                                        <h3 className="subheading">Memory provided by Paridhi'23 Sponsors!</h3>
                                    </div>
                                </div>
                            </div>
                            <SponserList items={sponserData}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Sponser;