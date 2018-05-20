/**
 * Created by ***
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd';
import request from "reqwest";


//导入UI组件
class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {

  }

  getClickData = ()=>{
    request({
      url: '/api/index',
      method: 'get', 
      error: function (err) { }, 
      success: function (resp) {
        debugger
      }
    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick ={this.getClickData}>list</Button>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    $$state: state.home
  }
}

module.exports = connect(mapStateToProps, {
})(Home)



//or

// function mapStateToProps(state) {
//   return {
//     $$state: state.indexPageReducer
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onIncrement: () => dispatch(onIncrement()),
//     onDecrement: () => dispatch(onDecrement())
//   }
// }
// module.exports = connect(mapStateToProps, mapDispatchToProps)(IndexPage)


