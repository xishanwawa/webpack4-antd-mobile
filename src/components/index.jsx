
/**
 * Created by ytm on 4/7/16.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router"

//跳转动画
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import style from "./index.less";

class Index extends React.Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    document.body.style.margin = "0px";
    // 这是防止页面被拖拽
    document.body.addEventListener('touchmove', (ev) => {
      ev.preventDefault();
    });
  }

  componentDidMount() {
  }
  //跳转动画
  // render() {
  //   return (
  //     <ReactCSSTransitionGroup
  //       transitionName="transitionWrapper"
  //       component="div"
  //       className={style.transitionWrapper}
  //       transitionEnterTimeout={300}
  //       transitionLeaveTimeout={300}>
  //       <div key={this.props.location.pathname}
  //            style={{position:"absolute", width: "100%"}}>
  //         {
  //           this.props.children
  //         }
  //       </div>
  //     </ReactCSSTransitionGroup>
  //   )
  // }
  render() {
    return (
        <div>
          {
            this.props.children
          }
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