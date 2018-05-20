
/**
 * Created by ytm on 4/7/16.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router"
import './index.less'

class Index extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Link to='/'>主页</Link><Link to='/list'>列表</Link>
        {this.props.children || "index"}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    $$state: state.Index
  }
}

module.exports = connect(mapStateToProps, {

})(Index)