import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import { Grid } from 'antd-mobile';
import food from './images/food.png';
import shopping from './images/shopping.png';
import car from './images/car.png';
import fastFood from './images/fastFood.png';
import house from './images/house.png';
import money from './images/money.png';
import fruit from './images/fruit.png';
import life from  './images/life.png';
import special from './images/special.png';

// 宫格
var arr=['餐饮','超市购','骑手专送','家常菜','品牌馆','新店特惠','水果生鲜','质享生活','商务快餐','土豪特供','绿色食品'];
var brr=[food,shopping,car,fastFood,house,money,fruit,life,fastFood,special,life];
var crr=['#ff3d67','#17d0a3','#ff5656','#fa603c','#fb874e','#0ecc5f','#69d129','#d061de','#fbbc24','#ffcf0d'];

const data1 = Array.from(new Array(11)).map((_val, i) => ({
    text: arr[i],
    icon: brr[i],
    color:crr[i],
}));
  
export default class AppHome extends Component {
    state = {
        data: ['1', '2', '3','4','5'],
        imgHeight: 176,
      }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['u=3642579343,1122802725&fm=26&gp=0', 'u=3315661615,3271204201&fm=26&gp=0', 'u=2316232815,3872796046&fm=26&gp=0','u=986975063,2484638873&fm=26&gp=0','u=2562068679,2224409376&fm=26&gp=0'],
          });
        }, 100);
    }
    render() {
        return (
            console.log(data1.obj),
            <div>
                <div className="top1" style={{width:"window.innerWidth",height:"50px",backgroundColor:"#bc0400",color:"white"}}>
                    <div style={{float:"left",fontSize:"20px",paddingTop:"8px",marginLeft:"20px"}}>石家庄&nbsp;﹀</div>
                    <img src={require("./images/search.png")} style={{width:"28px",height:"28px",float:"left",marginTop:"12px",marginLeft:"20px",backgroundColor:"white",borderRadius:"5px 0px 0px 5px",borderColor:"white"}}></img>
                    <input type="search" placeholder="搜索商家、品类或商圈" style={{float:"left",marginTop:"10px",height:"30px",borderRadius:"0px 10px 10px 0px"}}></input>
                    <img src={require("./images/notification.png")} style={{height:"25px",width:"25px",float:"right",marginTop:"12px",marginRight:"10px"}}></img>
                    <img src={require("./images/首页.png")}style={{height:"25px",width:"25px",float:"right",marginTop:"12px",marginRight:"5px"}}></img>
                    
                </div>
                {/* 轮播图 */}
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={`https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/${val}.jpg`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
                {/* 宫格 */}
                <Grid data={data1}
                    columnNum={5}
                    isCarousel
                    renderItem={dataItem => (
                        <div style={{padding:"5px",borderRadius:"15px",marginLeft:"5px",marginRight:"5px",marginBottom:"5px",height: '70px',backgroundColor:dataItem.color}}>
                        <img src={dataItem.icon} style={{ width: '25px', height: '25px' }} alt="" />
                        <div style={{ fontSize: '14px', marginTop: '12px' }}>
                            <span>{dataItem.text}</span>
                        </div>
                        </div>
                    )}
                />
                {/* 图片 */}
                <div style={{height:"10px",backgroundColor:"#e5e5e5"}}></div>
                <div style={{height:"150px",backgroundColor:"#fff"}}>
                    <img className="one" src={require("./images/images/one_03.png")}/>
                    <img className="two" src={require("./images/images/two_04.png")}/>
                    <img className="three" src={require("./images/images/three_08.png")}/>
                    <img className="four" src={require("./images/images/four_10.png")} />
                </div>
                {/*  灰色条*/}
                <div style={{height:"30px",backgroundColor:"#e5e5e5"}}>
                    <div style={{float:"left",marginLeft:"10px",marginTop:"4px"}}>商家分类﹀</div>
                    <div style={{float:"right",marginRight:"10px",marginTop:"4px"}}>排序﹀</div>
                </div>
                {/* 图片 */}
                <div >
                    <img style={{height:"300px",width:"100%"}} src={require("./images/images/big_13.png")}/>
                </div>
            </div>
        )
    }
}