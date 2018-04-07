import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

class Home extends React.Component {

    render(){
        return(
            <div id="home">
                首页
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