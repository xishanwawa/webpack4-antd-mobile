/**
 * Created by ***
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'
import request from "reqwest";
import { SwipeAction, NavBar, Icon, List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

//导入UI组件
class Index extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      urlData: this.props.location.state
    }
  }

  componentDidMount() {
    var data = this.props.location.state;
  }

  // getClickData = () => {
  //   request({
  //     url: '/api/index',
  //     method: 'get',
  //     error: function (err) { },
  //     success: function (resp) {
  //       debugger
  //     }
  //   })
  // }

  render() {
    return (
      <div sytle={{ width: "100%" }}>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => browserHistory.goBack()}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>
        <List renderHeader={() => 'Icon in the left'}>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => { }}
          >My wallet</Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            onClick={() => { }}
            arrow="horizontal"
          >
            My Cost Ratio
        </Item>
        </List>
        <SwipeAction
          style={{ backgroundColor: 'gray' }}
          autoClose
          right={[
            {
              text: 'Cancel',
              onPress: () => console.log('cancel'),
              style: { backgroundColor: '#ddd', color: 'white' },
            },
            {
              text: 'Delete',
              onPress: () => console.log('delete'),
              style: { backgroundColor: '#F4333C', color: 'white' },
            },
          ]}
          left={[
            {
              text: 'Reply',
              onPress: () => console.log('reply'),
              style: { backgroundColor: '#108ee9', color: 'white' },
            },
            {
              text: 'Cancel',
              onPress: () => console.log('cancel'),
              style: { backgroundColor: '#ddd', color: 'white' },
            },
          ]}
          onOpen={() => console.log('global open')}
          onClose={() => console.log('global close')}
        >
          <List.Item
            extra="More"
            arrow="horizontal"
            onClick={e => console.log(e)}
          >
            Have left and right buttons
      </List.Item>
        </SwipeAction>
      <div>姓名：{this.state.urlData.name}, 年龄：{this.state.urlData.age}</div>
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
})(Index)



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


