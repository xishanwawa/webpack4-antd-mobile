/**
 * Created by ***
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import request from "reqwest";
import { Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';

function successToast() {
  Toast.success('Load success !!!', 1);
}

//导入UI组件
class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Toast.loading('Loading...', 30, () => {
      console.log('Load complete !!!');
    });

    setTimeout(() => {
      Toast.hide();
    }, 3000);
  }

  getClickData = () => {
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
      <div sytle={{width:"100%"}}>
        <WingBlank>
          <Button onClick={successToast}>success</Button><WhiteSpace />
          <Button disabled>success disabled</Button><WhiteSpace />
        </WingBlank>
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


