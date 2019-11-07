import React from 'react';
import './App.css';
import QierPlayer from 'qier-player';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import video480p from './video480p.mp4';
import video720p from './video720p.mp4';
import videoOrigin from './videoOrigin.mp4';
import logo from './qier-player-banner.png';
import erweima1 from './erweima-1.png';
import erweima2 from './erweima-2.png';

const codeString = `import React from 'react';
import ReactDOM from 'react-dom';
import QierPlayer from 'qier-player';
// 或者你可以不导入，直接放源视频的源地址
import video480p from './video480p.mp4';
import video720p from './video720p.mp4';
import videoOrigin from './videoOrigin.mp4';

ReactDOM.render(
  <QierPlayer 
    width={740}
    height={420}
    language="zh"
    showVideoQuality={true}
    themeColor="#abc123"
    src480p={video480p}
    src720p={video720p}
    srcOrigin={videoOrigin}
  />, 
  document.getElementById('root')
);`;

function App() {
  return (
    <div className="App">
      <header className="header-wrap">
        <div className="title"><span>QIER PLAYER</span></div>
        <div className="link">
          <span className="github"><a href="https://github.com/vortesnail" target="_blank"><i className="iconfont">&#xe602;</i></a></span>
          <span className="zhihu"><a href="https://www.zhihu.com/people/vortesnail/activities" target="_blank"><i className="iconfont">&#xe645;</i></a></span>
          <span className="juejin"><a href="https://juejin.im/user/5da573d3f265da5b8a5168a6" target="_blank"><i className="iconfont">&#xe600;</i></a></span>
        </div>
      </header>
      <div className="logo"><img src={logo} alt="logo" /></div>
      <p className="jianjie">一款轻量且精致的、基于React的H5播放器</p>
      <div className="buttons">
        <a href="https://www.yuque.com/u188805/bq895q/yld5e5" target="_blank"><div className="doc"><span>使用文档</span></div></a>
        <a href="https://github.com/vortesnail/qier-player" target="_blank"><div className="star"><span>star & fork</span></div></a>
      </div>
      <div className="video-container">
        <QierPlayer 
          width={740}
          height={420}
          src480p={video480p}
          src720p={video720p}
          srcOrigin={videoOrigin} 
          showVideoQuality={true} 
          language="zh"
          themeColor="#abc123"
        />
        {/* <QierPlayer 
          src480p=""
          showVideoQuality={true} 
        /> */}
      </div>
      <p className="example-code">示例代码</p>
      <div className="code">
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className="footer">
        <p className="help-title">若是有幸帮助到你，使劲“打”赏我！</p>
        <p className="help-content">扫描下面的二维码，赞助我买台ps4，想玩《死亡搁浅》啊什么</p>
        <div className="erweima">
          <div className="erweima-1"><img src={erweima1} alt="alipay"/><p style={{color: '#515559', marginTop: '6px', textAlign: 'center'}}>支付宝</p></div>
          <div className="erweima-2"><img src={erweima2} alt="weixinpay"/><p style={{color: '#515559', marginTop: '6px', textAlign: 'center'}}>微信</p></div>
        </div>
      </div>
    </div>
  );
}

export default App;
