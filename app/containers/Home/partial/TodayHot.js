/**
 * banner 滑块
 * Created by xumingliang on 2018/04/15.
 */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class TodayHot extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render(){
        const hotList = [
            {
                id:0,
                title:'嘻哈Dog',
                money:99,
                vipMoney:199,
                studio:'图纹系',
                url:'',
                imgUrl:'/assets/images/home/hotDemo.jpg'
            },
            {
                id:0,
                title:'嘻哈Dog',
                money:99,
                vipMoney:199,
                studio:'图纹系',
                url:'',
                imgUrl:'/assets/images/home/hotDemo.jpg'
            },
            {
                id:0,
                title:'嘻哈Dog',
                money:99,
                vipMoney:199,
                studio:'图纹系',
                url:'',
                imgUrl:'/assets/images/home/hotDemo.jpg'
            },
            {
                id:0,
                title:'嘻哈Dog',
                money:99,
                vipMoney:199,
                studio:'图纹系',
                url:'',
                imgUrl:'/assets/images/home/hotDemo.jpg'
            },
            {
                id:0,
                title:'嘻哈Dog',
                money:99,
                vipMoney:199,
                studio:'图纹系',
                url:'',
                imgUrl:'/assets/images/home/hotDemo.jpg'
            }
            ]
        return(
            <div className="home-todayHot">
                <div>
                    <h3>今日热门</h3>
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
                            <div className="hot-info">
                                <div>
                                    <span>￥{item.money}/￥{item.vipMoney}</span>
                                    <img src='/assets/images/home/love-no.png'/>
                                </div>
                                <h4>@{item.studio}</h4>
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

export default connect(mapStateToProps, mapDispatchToProps)(TodayHot)



