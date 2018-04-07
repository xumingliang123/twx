import React, {Component} from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
import Head from './shared/Header'
import Footer from './shared/Footer'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ifMeiQia: true
        }
    }

    render(){
        return (
            <div>
                <Helmet title="图纹系" />
                <Head />
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(App)


