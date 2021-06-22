
import '../../node_modules/docsify/themes/vue.css';
import '../css/h-style.css';
import docsify from 'docsify/lib/docsify.min.js';


//GETパラメータの取得
const getParam = function () {
  const arg = new Object();
  const pair = location.search.substring(1).split("&");
  for (let i = 0; pair[i]; i++) {
    let kv = pair[i].split("=");
    arg[kv[0]] = kv[1];
  }
  return arg
}

//View///////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  let container = document.querySelector(".container")
    if(container){
      console.log(container);
    }
});

window.addEventListener('load', (event) => {
  const id = getParam()["q"] || '3.2'
  const type = getParam()["type"] || '0'
  console.log('load',id,type)
  let container = document.querySelector(".container")
    if(container){
      console.log(container);
    }
});
// ページ移動 イベントをハンドリング
window.addEventListener('popstate', (event) => {
  //移動先のパラメータで再描画
  const id = getParam()["q"] || '3.2'
  const type = getParam()["type"] || '0'
  console.log('popstate',id,type)
});

window.$docsify = {
  name: '',
  repo: '',
  executeScript: true,
  plugins: [
    function(hook) {
      console.log('markdown-plugins',hook)
      hook.init(function() {
        console.log('markdown-init')
      });
      hook.beforeEach(function(html) {
        console.log('markdown-afterEach',html)
      });
    }
  ]
}