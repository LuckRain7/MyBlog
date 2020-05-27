---
home: true
heroImage: /home.png
heroText: 如果连最爱的人都留不住
tagline: 前端做的再好有什么用
actionText: Get Started →
actionLink: /home/
features:
  - title: 没有写不完的代码
    details: 只有改不完的BUG
  - title: 比一个人写代码更寂寞的是
    details: 一个人写不出代码
  - title: 系统出现问题？
    details: 清缓存！重启！
---

<a id="out-link">备案号：鲁 ICP 备 19058623 号</a>

<style>
  #out-link{
    cursor: pointer;
  }
</style>
<script>
export default {
  mounted () {
    var outLink = document.getElementById("out-link")
    outLink.addEventListener("click",function(){
        window.open("http://www.beian.miit.gov.cn/")
    })
  }
}
</script>

