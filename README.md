# Rain‘s Blog

## tip
- 内置 stylus lang="styl" 

- 使用浏览器内置API
  ```html
  <span id="out-link">备案号：鲁 ICP 备 19058623 号</span>
  
  <script>
  export default {
    mounted () {
      var outLink = document.getElementById("out-link")
      outLink.addEventListener("click",function(){
          window.open("http://rain7.top")
      })
    }
  }
  </script>
  ```

  

## TODO
- Algolia 搜索  https://docsearch.algolia.com/

