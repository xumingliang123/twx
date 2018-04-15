import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import BannerSolid from './partial/BannerSolid'
import TodayHot from './partial/TodayHot'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div id="home">
                <BannerSolid />
                <TodayHot />
            </div>
        )
    }
}
function mapStateToProps() {
    return {}
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({}, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)