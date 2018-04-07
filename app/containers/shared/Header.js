import React from 'react'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

class Head extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num:1
        }
    }

    render(){
        return(
            <div className="header">
                <Link to="/">
                    <img src="/assets/images/logo@2x.png" className="header-logo"/>
                </Link>
                <div className="header-tag">
                    <Link
                        to="/"
                        activeClassName="nav-active-tag"
                        onlyActiveOnIndex
                        className="header-nav-tag">
                        首页
                    </Link>
                    <Link
                        to="/home-textiles"
                        activeClassName="nav-active-tag"
                        className="header-nav-tag">
                        家纺
                    </Link>
                    <Link
                        to="/clothing"
                        activeClassName="nav-active-tag"
                        className="header-nav-tag">
                        服装
                    </Link>
                    <Link
                        to="/trend"
                        activeClassName="nav-active-tag"
                        className="header-nav-tag">
                        趋势
                    </Link>
                </div>
                <div className="header-search">
                    <input type="text" placeholder="输入你想要的，试试看吧！"/>
                </div>
            </div>
        )

    }
}
function mapStateToProps() {
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

export default connect(mapStateToProps, mapDispatchToProps)(Head)