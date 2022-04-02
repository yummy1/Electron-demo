import './index.scss'
export default {
  bind(el, binding) {
    el.style.position = 'relative'
    let container = document.createElement('div')
    container.classList.add('loading-container')
    let div = document.createElement('div')
    div.classList.add('full-loading-bounce')
    for(let i = 0; i < 5; i++) {
      let span = document.createElement('span')
      div.appendChild(span)
    }
    container.appendChild(div)
    el.appendChild(container)
    if (binding.value === true) {
      container.style.display = 'block'
    } else {
      container.style.display = 'none'
    }
  },
  update(el, binding) {
    let container = children(el, "loading-container")[0]
    if (binding.value === true) {
      container.style.display = 'block'
    } else {
      container.style.display = 'none'
    }
  }
}


function children(curEle,className){
  var nodeList = curEle.childNodes;
  var ary = [];
  if(/MSIE(6|7|8)/.test(navigator.userAgent)){
      for(var i=0;i<nodeList.length;i++){
          var curNode = nodeList[i];
          if(curNode.nodeType ===1){
             ary[ary.length] = curNode;
          }
      }
  }else{
      ary = Array.prototype.slice.call(curEle.children);
  }
  
  // 获取指定子元素
  if(typeof className === "string"){
      for(var k=0;k<ary.length;k++){
        let curTag = ary[k];
        if(curTag.className.search(className) === -1){
         ary.splice(k,1);
         k--;
        }
      }
  }

  return ary;
}
