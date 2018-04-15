import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import BannerSolid from './partial/BannerSolid'

class Home extends React.Component {

    render(){
        return(
            <div id="home">
                <BannerSolid />
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