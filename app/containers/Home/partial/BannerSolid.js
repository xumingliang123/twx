/**
 * banner 滑块
 * Created by xumingliang on 2018/04/15.
 */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Swiper from 'swiper/dist/js/swiper.js'

class BannerSolid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        this.updateSwiper()
    }
    updateSwiper = () => {
        new Swiper(this._swiper, {
            autoplay: {
                delay: 6000
            },
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplayDisableOnInteraction: false,
            navigation: {
                nextEl: '#homepageBannerSliderRight',
                prevEl: '#homepageBannerSliderLeft'
            },
            pagination: {
                el: '#homepageBannerSliderPagination',
                type: 'bullets',
                clickable: true
            },
            paginationClickable: true,
            paginationBulletRender: function(swiper, index, className) {
                return '<span class="' + className + '"></span>'
            }
        })
    }

    render(){
        const bannerData =  [
            {
                abstract:"",
                image_path:"/assets/images/home/homeBanner-1.jpeg",
                title:"415北京线下活动",
                url:"http://www.fang88.me/investment-detail/7c91db5f2b24de55959ba8d0be98f3f7",
                id:0
            },
            {
                abstract:"",
                    image_path:"/assets/images/home/homeBanner-2.jpeg",
                   title:"415北京线下活动",
                    url:"http://www.fang88.me/investment-detail/7c91db5f2b24de55959ba8d0be98f3f7",
                    id:1
            },
            {
                abstract:"",
                    image_path:"/assets/images/home/homeBanner-3.jpeg",
                   title:"415北京线下活动",
                   url:"http://www.fang88.me/investment-detail/7c91db5f2b24de55959ba8d0be98f3f7",
                    id:2
            },
            {
                abstract:"",
                    image_path:"/assets/images/home/homeBanner-2.jpeg",
                    title:"415北京线下活动",
                    url:"http://www.fang88.me/investment-detail/7c91db5f2b24de55959ba8d0be98f3f7",
                    id:3
            }]
        return(
            <div
                className="homepage-banner-slider swiper-container"
                ref={element => (this._swiper = element)}>
                <div className="swiper-wrapper">
                    {bannerData.map((item, key) => (
                        <Link
                            to={item.url}
                            target="_blank"
                            className="swiper-slide"
                            key={key}>
                            <div
                                className="homepage-banner-slider__tag"
                                style={{
                                    backgroundImage: `url('${item.image_path}')`
                                }}
                            />
                        </Link>
                    ))}
                </div>
                <div
                    className="homepage-banner-slider_left"
                    id="homepageBannerSliderLeft">
                    <img src="/assets/images/arrowLeftWhite.png" />
                </div>
                <div
                    className="homepage-banner-slider_left"
                    style={{left: 'auto', right: '100px'}}
                    id="homepageBannerSliderRight">
                    <img src="/assets/images/arrowRightWhite.png" />
                </div>
                <div
                    className="homepage-banner-slider_pagination"
                    id="homepageBannerSliderPagination"
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(BannerSolid)