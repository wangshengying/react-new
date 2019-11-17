import React, { Component } from 'react';

export default class AppHome extends Component {
    render() {
        return (
            <div>
                <div className="top1" style={{width:"window.innerWidth",height:"50px",backgroundColor:"#bc0400",color:"white"}}>
                    <div style={{textAlign:"center",fontSize:"20px",paddingTop:"8px",marginLeft:"20px"}}>我的订单</div>
                </div>  
            </div>
        )
        }
}