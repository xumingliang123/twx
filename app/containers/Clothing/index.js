import React from 'react'
import { connect } from 'react-redux'

class Clothing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num:1
        }
    }

    render(){
        return(
            <div>
                <div>服装</div>
            </div>
        )
    }
}
function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(Clothing)