import React from 'react'
import {Link} from 'react-router'

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num:2
        }
    }

    render(){
        const {num} = this.state
        return(
            <div className="footer">
                <div className="foot-item">
                    <h3>关于</h3>
                    <ul>
                        <li>
                            <Link to="/about-us">
                                <p className="footer-item-tag">
                                    关于图纹系
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about-us">
                                <p className="footer-item-tag">
                                    版权声明
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about-us">
                                <p className="footer-item-tag">
                                    关于隐私
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about-us">
                                <p className="footer-item-tag">
                                    免责声明
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="foot-item">
                    <h3>商务</h3>
                    <ul>
                        <li>
                            <Link to="">
                                <p className="footer-item-tag">
                                    商业合作
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <p className="footer-item-tag">
                                    赛事服务
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <p className="footer-item-tag">
                                    交易服务
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <p className="footer-item-tag">
                                    版权合作
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="foot-item">
                    <h3>联系</h3>
                    <ul>
                        <li>
                            <Link to="">
                                <p className="footer-item-tag">
                                    在线服务
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <p className="footer-item-tag">
                                    联系我们
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <p className="footer-item-tag">
                                    公众号
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <p className="footer-item-tag">
                                    微博
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="foot-item">
                    <h3>帮助</h3>
                    <ul>
                        <li>
                            <Link to="">
                                <p className="footer-item-tag">
                                    图纹系交易原则
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <p className="footer-item-tag">
                                    常见问题
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="foot-item">
                    <h3>友情链接</h3>
                    <ul>
                        <li>
                            <Link to="">
                                <p className="footer-item-tag">
                                    图纹系交易原则
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <p className="footer-item-tag">
                                    常见问题
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="foot-item">
                    <h3>版权声明</h3>
                    <p className="footer-copyright">
                        图纹系会员说发布展示的“原创作品/文章”版权归原作者所
                        有，任何商业用途均须联系作者。如未经授权用作他出，作者
                        将保留追究侵权法律责任的权利。
                    </p>
                    <p className="footer-copyright">浙 ICP 备 11017824 号 -4/浙 ICP 证 130164 号</p>
                    <p className="footer-copyright">杭州市公安局拱墅分局备案号：110105000501</p>
                    <p className="footer-copyright">Copyright © 2006-2016 Masterbox</p>
                </div>

            </div>
        )

    }
}

export default Footer