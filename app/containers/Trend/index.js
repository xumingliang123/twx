import React from 'react'
import { connect } from 'react-redux'

class Trend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num:1
        }
    }

    render(){
        return(
            <div>
                <div>趋势</div>
            </div>
        )
    }
}
function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(Trend)