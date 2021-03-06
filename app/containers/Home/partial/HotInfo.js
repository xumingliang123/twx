/**
 * 热门资讯
 * Created by xumingliang on 2018/04/15.
 */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class HotInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
        const hotList = [
            {
                id:0,
                title:'2018流行趋势',
                money:99,
                vipMoney:199,
                studio:'图纹系',
                url:'',
                imgUrl:'/assets/images/home/hotDemo.jpg',
                readNumber:123,
                commentNumber:1,
                Fabulous:12,
                sjsUrl:'/assets/images/header-user-img.png',
                time:'04-19'
            },
            {
                id:0,
                title:'2018流行趋势',
                money:99,
                vipMoney:199,
                studio:'图纹系',
                url:'',
                imgUrl:'/assets/images/home/hotDemo.jpg',
                readNumber:123,
                commentNumber:1,
                Fabulous:12,
                sjsUrl:'/assets/images/header-user-img.png',
                time:'04-19'
            },
            {
                id:0,
                title:'2018流行趋势',
                money:99,
                vipMoney:199,
                studio:'图纹系',
                url:'',
                imgUrl:'/assets/images/home/hotDemo.jpg',
                readNumber:123,
                commentNumber:1,
                Fabulous:12,
                sjsUrl:'/assets/images/header-user-img.png',
                time:'04-19'
            },
            {
                id:0,
                title:'2018流行趋势',
                money:99,
                vipMoney:199,
                studio:'图纹系',
                url:'',
                imgUrl:'/assets/images/home/hotDemo.jpg',
                readNumber:123,
                commentNumber:1,
                Fabulous:12,
                sjsUrl:'/assets/images/header-user-img.png',
                time:'04-19'
            },
            {
                id:0,
                title:'2018流行趋势',
                money:99,
                vipMoney:199,
                studio:'图纹系',
                url:'',
                imgUrl:'/assets/images/home/hotDemo.jpg',
                readNumber:123,
                commentNumber:1,
                Fabulous:12,
                sjsUrl:'/assets/images/header-user-img.png',
                time:'04-19'
            }
        ]
        return(
            <div className="hotInfo">
                <div>
                    <h3>最新上架</h3>
                    <span className="look-more">查看更多></span>
                </div>
                <span className="title-bottom" />
                <div className="todayHot-list">
                    {hotList.map((item, key) => (
                        <Link
                            to={item.url}
                            target="_blank"
                            className="today-hot-item"
                            key={key}>
                            <div className="hot-img-box">
                                <img src={item.imgUrl} />
                            </div>
                            <div className="hot-info-head">
                                <h4>{item.title}</h4>
                                <div className="hot-icon">
                                    <i className="icon iconfont icon-browse_fill"/>
                                    <span>{item.readNumber}</span>
                                    <i className="icon iconfont icon-message_fill"/>
                                    <span>{item.commentNumber}</span>
                                    <i className="icon iconfont icon-praise"/>
                                    <span>{item.Fabulous}</span>
                                </div>
                            </div>
                            <div className="hot-des">
                                <img src={item.sjsUrl} />
                                <p>{item.studio}</p>
                                <span>{item.time}</span>
                            </div>

                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {

            },
            dispatch
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HotInfo)