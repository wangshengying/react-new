import React, { Component } from 'react';

export default class AppHome extends Component {
    render() {
        return (
            <div>
                {/* 顶端 */}
                <div className="top">
                    <div className="son1">
                        <img style={{width:"60px",height:"60px"}} src={require("./images/images/touxiang_03.png")}/>
                    </div>
                    <div className="son2">迈克尔楠楠楠</div>
                </div>
                <div className="top2">
                    <div className="bro1"><p>0元<br/><span style={{fontSize:"15px"}}>我的钱包</span></p></div>
                    <div className="bro2"><p>8个<br/><span style={{fontSize:"15px"}}>我的红包</span></p></div>
                    <div className="bro3"><p>2张<br/><span style={{fontSize:"15px"}}>商家代金券</span></p></div>
                </div>
                <br/>
                <br/>
                <div className="media">
                    <div><p className="meida-p1">&nbsp;&nbsp;<img className="media-img1" src={require("./images/images/dizhi_07.png")}/>&nbsp;&nbsp;我的收货地址</p></div>
                    <div><p className="meida-p1">&nbsp;&nbsp;<img className="media-img1" src={require("./images/images/myshoucang_10.png")}/>&nbsp;&nbsp;我的收藏</p></div>
                    <div><p className="meida-p1">&nbsp;&nbsp;<img className="media-img1" src={require("./images/images/mypinglun_16.png")}/>&nbsp;&nbsp;我的评论</p></div>
                    <div><p className="meida-p1">&nbsp;&nbsp;<img className="media-img1" src={require("./images/images/mytuikuan_21.png")}/>&nbsp;&nbsp;我的退款</p></div>
                    <div><p className="meida-p1">&nbsp;&nbsp;<img className="media-img1" src={require("./images/images/myxiaoxi_24.png")}/>&nbsp;&nbsp;我的消息</p></div>
                    <div><p className="meida-p1">&nbsp;&nbsp;<img className="media-img1" src={require("./images/images/help_26.png")}/>&nbsp;&nbsp;帮助与反馈</p></div>
                    <div><p className="meida-p1">&nbsp;&nbsp;<img style={{width:"35px",height:"30px"}} src={require("./images/images/more_31.png")}/>&nbsp;&nbsp;更多</p></div>
                </div>
                <p className="bottom">客服电话<span>400-820-8888</span></p>
            </div>
        )
    }
}