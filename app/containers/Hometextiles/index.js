import React from 'react'
import { connect } from 'react-redux'

class Hometextiles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num:1
        }
    }

    render(){
        return(
            <div>
                <div>家纺</div>
            </div>
        )
    }
}
function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(Hometextiles)