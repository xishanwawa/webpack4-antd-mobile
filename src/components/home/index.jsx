/**
 * Created by ***
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'
import request from "reqwest";
import { NavBar, Button, Icon, TabBar, PullToRefresh, SwipeAction, SearchBar, Carousel, Grid } from 'antd-mobile';
import ReactEcharts from 'echarts-for-react';
import './index.less'
function genData() {
  const dataArr = Array.from(new Array(20)).map((item, i) => ({
    name: "name" + i
  }));

  return dataArr;
}

//导入UI组件
class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imgdata: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      imgHeight: 176,

      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      data: [],

      selectedTab: 'redTab',
      fullScreen: true,
    };
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
      data: genData(),
    }), 0);
  }

  renderList() {
    return <div>
      <SearchBar placeholder="搜索..." maxLength={8} />
      <PullToRefresh
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
        direction={this.state.down ? 'down' : 'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this.setState({ refreshing: true });
          setTimeout(() => {
            this.setState({ refreshing: false });
          }, 1000);
        }}
      >
        {this.state.data.map((item, i) => this.renderListCell(item, i))}
      </PullToRefresh>
    </div>
  }

  renderListCell(item, i) {
    return <SwipeAction
      key={i}
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
      onOpen={() => console.log('global open')}
      onClose={() => console.log('global close')}
    >
      <div style={{ padding: "10 20", borderBottom: "1px solid #f5f5f5" }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "4 0" }}>
          <div style={{ flex: 1 }}>{"标题"} {i}</div>
          <div style={{ flex: 1, textAlign: "right", fontSize: "10", color: "#999999" }}>状态</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: 1, fontSize: "10", color: "#999999" }}>项目{i}</div>
          <div style={{ flex: 1, textAlign: "right", fontSize: "10", color: "#999999" }}>项目状态</div>
        </div>
      </div>
    </SwipeAction>
  }

  //跳转传值
  goPush = () => {
    let data = { id: 3, name: "yangtmm", age: 18 }
    //传值query与state都可以
    browserHistory.push({
      pathname: '/list',
      query: data,
      state: data
    })
  }

  renderFunction() {

    let data = { id: 3, name: "yangtmm", age: 18 }
    const data1 = Array.from(new Array(7)).map(() => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    }));
    return <div>
      <Carousel
        autoplay={true}
        infinite
        style={{ marginBottom: 10 }}
        beforeChange={(from, to) => { }}
        afterChange={index => { }}
      >
        {this.state.imgdata.map(val => (
          <a
            key={val}
            href="#"
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
          >
            <img
              src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
          </a>
        ))}
      </Carousel>
      <Grid data={data1}
        columnNum={4}
        renderItem={dataItem => (
          <div>
            <Link to={{ pathname: `/list`, state: data }}>
              <img src={dataItem.icon} style={{ width: 30, height: 30 }} alt="" />
              <div style={{ marginTop: 10 }}>
                <span style={{ color: '#888', fontSize: 12 }}>链接传值</span>
              </div>
            </Link>
          </div>
        )}
      />
      <Button onClick={this.goPush} >按钮跳转</Button>
    </div>
  }

  getOption() {
    let option = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
      }]
    };

    return option;
  }

  renderReportForm() {
    return <div>
      <div style={{ padding: "0 10 0" }}>
        <ReactEcharts option={this.getOption()} />
      </div>
    </div>
  }

  renderContent(pageText) {
    if (pageText == "list") {
      return this.renderList();
    } else if (pageText == "function") {
      return this.renderFunction();
    } else {
      return this.renderReportForm();
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <NavBar
          mode="light"
        >home</NavBar>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={false}
        >
          <TabBar.Item
            title="Form"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
            {this.renderContent('reportForm')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="Func"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
            {this.renderContent('function')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="List"
            key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {this.renderContent('list')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
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


