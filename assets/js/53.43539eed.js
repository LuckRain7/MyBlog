(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{327:function(v,_,t){"use strict";t.r(_);var a=t(10),r=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"v8"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v8"}},[v._v("#")]),v._v(" V8")]),v._v(" "),_("h2",{attrs:{id:"gc-垃圾回收"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#gc-垃圾回收"}},[v._v("#")]),v._v(" GC(垃圾回收)")]),v._v(" "),_("p",[v._v("浏览器的 Javascript 具有自动垃圾回收机制(GC: Garbage Collecation)，也就是说，执行环境会负责管理代码执行过程中使用的内存。其原理是：垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存。但是这个过程不是实时的，因为其开销比较大并且 GC 时停止响应其他操作，所以"),_("strong",[v._v("垃圾回收器会按照固定的时间间隔周期性的执行。")])]),v._v(" "),_("p",[v._v("到底哪个变量是没有用的？所以垃圾收集器必须跟踪到底哪个变量没用，对于不再有用的变量打上标记，以备将来收回其内存。")]),v._v(" "),_("p",[v._v("用于标记的无用变量的策略可能因实现而有所区别，通常情况下有两种实现方式："),_("strong",[v._v("标记清除和引用计数")]),v._v("。引用计数不太常用，标记清除较为常用。")]),v._v(" "),_("p",[_("strong",[v._v("标记清除")]),v._v(" (现在浏览器都在用的策略)")]),v._v(" "),_("p",[v._v("js 中最常用的垃圾回收方式就是标记清除。当变量进入环境时，例如，在函数中声明一个变量，就将这个变量标记为“进入环境”。从逻辑上讲，永远不能释放进入环境的变量所占用的内存，因为只要执行流进入相应的环境，就可能会用到它们。而当变量离开环境时，则将其标记为“离开环境”。")]),v._v(" "),_("p",[v._v("垃圾回收器在运行的时候会给存储在内存中的所有变量都加上标记（当然，可以使用任何标记方式）。然后，它会去掉环境中的变量以及被环境中的变量引用的变量的标记（闭包）。而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后，垃圾回收器完成内存清除工作，销毁那些带标记的值并回收它们所占用的内存空间。\n到目前为止，IE9+、Firefox、Opera、Chrome、Safari 的 js 实现使用的都是标记清除的垃圾回收策略或类似的策略，只不过垃圾收集的时间间隔互不相同。")]),v._v(" "),_("p",[_("strong",[v._v("引用计数")])]),v._v(" "),_("p",[v._v("引用计数的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是 1。如果同一个值又被赋给另一个变量，则该值的引用次数加 1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减 1。当这个值的引用次数变成 0 时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。这样，当垃圾回收器下次再运行时，它就会释放那些引用次数为 0 的值所占用的内存。")]),v._v(" "),_("h2",{attrs:{id:"内存管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存管理"}},[v._v("#")]),v._v(" 内存管理")]),v._v(" "),_("p",[v._v("Javascript 引擎基础 GC 方案是（simple GC）：mark and sweep（标记清除），即：")]),v._v(" "),_("ul",[_("li",[v._v("遍历所有可访问的对象。")]),v._v(" "),_("li",[v._v("回收已不可访问的对象。")])]),v._v(" "),_("p",[v._v("缺陷：GC 时，停止响应其他操作，这是为了安全考虑。")]),v._v(" "),_("p",[v._v("优化策略：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("分代回收（Generation GC）")]),v._v(" "),_("p",[v._v("目的是通过区分“临时”与“持久”对象；多回收“临时对象”区（young generation），少回收“持久对象”区（tenured generation），减少每次需遍历的对象，从而减少每次 GC 的耗时。")])]),v._v(" "),_("li",[_("p",[v._v("增量 GC")]),v._v(" "),_("p",[v._v("这个方案的思想很简单，就是“每次处理一点，下次再处理一点，如此类推”")])])]),v._v(" "),_("p",[v._v("低 (对象/s) 比率时，中断执行 GC 的频率，simple GC 更低些；如果大量对象都是长期“存活”，则分代处理优势也不大。")])])}),[],!1,null,null,null);_.default=r.exports}}]);