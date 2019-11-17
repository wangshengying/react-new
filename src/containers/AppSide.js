import React, { Component } from 'react';
import { Accordion, List } from 'antd-mobile';
import { ListView } from 'antd-mobile';

export default class AppHome extends Component {
    // 手风琴
    onChange = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div>
                <div className="top1" style={{width:"window.innerWidth",height:"50px",backgroundColor:"#bc0400",color:"white"}}>
                    <div style={{float:"left",fontSize:"20px",paddingTop:"8px",marginLeft:"20px"}}>石家庄&nbsp;﹀</div>
                    <img src={require("./images/search.png")} style={{width:"28px",height:"28px",float:"left",marginTop:"12px",marginLeft:"20px",backgroundColor:"white",borderRadius:"5px 0px 0px 5px",borderColor:"white"}}></img>
                    <input type="search" placeholder="找附近的吃喝玩乐" style={{float:"left",marginTop:"10px",height:"30px",borderRadius:"0px 10px 10px 0px"}}></input>
                </div>
                {/* 手风琴 */}
                <div style={{ marginTop: 10, marginBottom: 10}}>
                    <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange} style={{display:"flex",display:"-webkit-flex"}}>
                        <Accordion.Panel header="1000m" style={{width:"100%"}}>
                        <List className="my-list">
                            <List.Item>500m</List.Item>
                            <List.Item>200m</List.Item>
                            <List.Item>100m</List.Item>
                        </List>
                        </Accordion.Panel>
                        <Accordion.Panel style={{width:"100%"}} header="全部餐厅" className="pad">
                            <List.Item>肯德基</List.Item>
                            <List.Item>海底捞</List.Item>
                            <List.Item>牛排</List.Item>
                        </Accordion.Panel>
                        <Accordion.Panel style={{width:"100%"}} header="默认排序" className="pad">
                            <List.Item>好评</List.Item>
                            <List.Item>价格升序</List.Item>
                            <List.Item>价格降序</List.Item>
                        </Accordion.Panel>
                    </Accordion>
                </div>
                {/* 盒子 展示*/}
                <div className="liveList">
                    <div className="try">
                        <div>
                            <img className="img1" src={require("./images/images/maidanglao_03.png")}/>
                        </div>
                        <p style={{float:"left",fontSize:"18px",}}>麦当劳餐厅&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img className="img3" src={require("./images/images/shoucang1_06.png")}/></span></p>
                        <img className="img2" src={require("./images/images/xingxing_06.png")}/>
                        <p style={{float:"left" ,width:"180px",marginTop:"-10px"}}>人均￥55&nbsp;&nbsp;&nbsp;&nbsp;起送￥50</p>
                        <p style={{float:"left",width:"240px",}}>送餐时间&nbsp;&nbsp;10:00-20:00&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img style={{width:"50px",height:"22px"}} src={require("./images/images/zuobiao_10.png")}/></span></p>
                    </div>
                    <div className="try">
                        <div>
                            <img className="img1" src={require("./images/images/bishengke_07.png")}/>
                        </div>
                        <p style={{float:"left",fontSize:"18px",}}>必胜客欢乐餐厅&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img className="img3" src={require("./images/images/shoucang2_21.png")}/></span></p>
                        <img className="img2" src={require("./images/images/xingxing_06.png")}/>
                        <p style={{float:"left" ,width:"180px",marginTop:"-10px"}}>人均￥55&nbsp;&nbsp;&nbsp;&nbsp;起送￥50</p>
                        <p style={{float:"left",width:"240px",}}>送餐时间&nbsp;&nbsp;10:00-20:00&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img style={{width:"50px",height:"22px"}} src={require("./images/images/zuobiao_10.png")}/></span></p>
                    </div>
                    <div className="try">
                        <div >
                            <img className="img1" src={require("./images/images/xingbake_30.png")}/>
                        </div>
                        <p style={{float:"left",fontSize:"18px",}}>星巴克咖啡厅&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img className="img3" src={require("./images/images/shoucang2_21.png")}/></span></p>
                        <img className="img2" src={require("./images/images/xingxing_06.png")}/>
                        <p style={{float:"left" ,width:"180px",marginTop:"-10px"}}>人均￥55&nbsp;&nbsp;&nbsp;&nbsp;起送￥50</p>
                        <p style={{float:"left",width:"240px",}}>送餐时间&nbsp;&nbsp;10:00-20:00&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img style={{width:"50px",height:"22px"}} src={require("./images/images/zuobiao_10.png")}/></span></p>
                    </div>
                    <div className="try" >
                        <div>
                            <img className="img1" src={require("./images/images/kendeji_19.png")}/>
                        </div>
                        <p style={{float:"left",fontSize:"18px",}}>肯德基餐厅&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img className="img3"  src={require("./images/images/shoucang2_21.png")}/></span></p>
                        <img className="img2" src={require("./images/images/xingxing_06.png")}/>
                        <p style={{float:"left" ,width:"180px",marginTop:"-10px"}}>人均￥55&nbsp;&nbsp;&nbsp;&nbsp;起送￥50</p>
                        <p style={{float:"left",width:"240px",}}>送餐时间&nbsp;&nbsp;10:00-20:00&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img style={{width:"50px",height:"22px"}} src={require("./images/images/zuobiao_10.png")}/></span></p>
                    </div>
                </div>
            </div>
        )
    }
}