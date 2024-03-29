import React, { Component } from "react"
import Photowall from './Photowall'
import AddPhoto from './AddPhoto'
import { Route, Link } from 'react-router-dom'
import Single from './Single'

class Main extends Component {

  state = { loading: true }

  componentDidMount() {
    this.props.startloadingPost().then(() => {
      this.setState({ loading: false })
    })
    this.props.startLoadingComments()
  }

  render() {

    return (
      <div>
        <h1 style={{ marginBottom: '0px' }}>
          <Link to="/Photowall"> Photowall </Link>
        </h1>
        <Route exact path="/Photowall" render={() => (
          <div>
            <Photowall {...this.props} />
          </div>
        )} />

        <Route path="/AddPhoto" render={({ history }) => (
          <AddPhoto {...this.props} onHistory={history} />

        )} />
        <Route path="/single/:id" render={(params) => (
          <Single loading={this.state.loading} {...this.props} {...params} />
        )} />
      </div>
    )
  }
}


export default Main
