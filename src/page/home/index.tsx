import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import './index.css'

function Index() {
  // console.log(reactRouter);
  
  

  useEffect(() => {
    // 添加监听器,监听当前是否活动页面
    document.addEventListener('visibilitychange', function() {
      if (document.visibilityState === 'visible') {
        console.info('hello👋', document.title)
      }
      if (document.visibilityState === 'hidden') {
        document.title = '离线中...'
      }
    });
  }, []);

  return (
    <div>
      <div className="title">hello</div>
      <p className="article">哈哈哈，这个问题嘛～</p>
      <p className="article">这都不是事～</p>
      <p className="article">这都不是事～</p>
      <p className="article clip">
        我们都有一个家，名字叫中国🇨🇳
        兄弟姐妹都很多，景色也不错👭
        我们都有一个家，名字叫中国🇨🇳
        兄弟姐妹都很多，景色也不错👭
        我们都有一个家，名字叫中国🇨🇳
        兄弟姐妹都很多，景色也不错👭
        我们都有一个家，名字叫中国🇨🇳
        兄弟姐妹都很多，景色也不错👭
        我们都有一个家，名字叫中国🇨🇳
        兄弟姐妹都很多，景色也不错👭
        我们都有一个家，名字叫中国🇨🇳
        兄弟姐妹都很多，景色也不错👭
        我们都有一个家，名字叫中国🇨🇳
        兄弟姐妹都很多，景色也不错👭
        我们都有一个家，名字叫中国🇨🇳
        兄弟姐妹都很多，景色也不错👭
        我们都有一个家，名字叫中国🇨🇳
        兄弟姐妹都很多，景色也不错👭
        我们都有一个家，名字叫中国🇨🇳
        兄弟姐妹都很多，景色也不错👭
        我们都有一个家，名字叫中国🇨🇳
        兄弟姐妹都很多，景色也不错👭
        我们都有一个家，名字叫中国🇨🇳
        兄弟姐妹都很多，景色也不错👭
        我们都有一个家，名字叫中国🇨🇳
        兄弟姐妹都很多，景色也不错👭
        我们都有一个家，名字叫中国🇨🇳
        兄弟姐妹都很多，景色也不错👭

      </p>
    </div>
  );
}

export default Index;
