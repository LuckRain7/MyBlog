---
sidebar: auto
---

# Vue

## 1、v-if、v-for绑定在同一元素怎么办，优先级？

2.x 版本中在一个元素上同时使用 `v-if` 和 `v-for` 时， `v-for` 会优先作用。

3.x 版本中 `v-if` 总是优先于 `v-for` 生效。

eslint 可以设置规则 `vue/no-use-v-if-with-v-for` 进行避免。

参考文章：

* [v-if 与 v-for 的优先级对比 | Vue 3 迁移指南](https://v3-migration.vuejs.org/zh/breaking-changes/v-if-v-for.html)
* [vue/no-use-v-if-with-v-for](https://eslint.vuejs.org/rules/no-use-v-if-with-v-for)

**为什么这么处理**

在 Vue 3 源码中，处理 `v-for` 和 `v-if` 指令的逻辑主要位于编译器部分，这包括将模板编译成渲染函数的代码。这些功能通常分布在几个不同的文件中，主要集中在编译器（compiler）目录下。关键文件和代码部分主要包括：

1. **`parse` 函数**（位于 `compiler-core/src/parse.ts`）: 这个函数负责解析模板，将模板字符串转换成抽象语法树（AST）。在这个阶段，`v-for` 和 `v-if` 作为指令被识别，并附加到相应的 AST 节点上。

2. **指令处理**（可能分布在如 `compiler-core/src/transforms/vFor.ts` 和 `compiler-core/src/transforms/vIf.ts`）: 这些文件包含用于处理 `v-for` 和 `v-if` 的特定逻辑。这些转换函数会检查 AST 节点，应用相应的逻辑，并可能修改或增强 AST。

3. **优先级处理**：Vue 的编译器在处理指令时遵循特定的优先级。通常，`v-for` 指令的处理会在 `v-if` 之前，这是因为在 AST 转换阶段，处理 `v-for` 的逻辑会先于 `v-if` 执行。这反映在它们在代码中的调用顺序上。

4. **代码生成**（位于 `compiler-core/src/codegen.ts`）: 在 AST 转换后，编译器将 AST 转换成渲染函数的代码。在这个阶段，`v-for` 和 `v-if` 的处理结果被转换成 JavaScript 代码。

关键代码示例（概念性说明，非实际代码）：

```javascript
// vue3-core/packages/compiler-core/src/compile.ts
export function getBaseTransformPreset(
    prefixIdentifiers ? : boolean
): TransformPreset {
    return [
        [
            transformOnce,
            transformIf,
            transformMemo,
            transformFor,
            ...(__COMPAT__ ? [transformFilter] : []),
            ...(!__BROWSER__ && prefixIdentifiers ?
                [
                    // order is important
                    trackVForSlotScopes,
                    transformExpression
                ] :
                __BROWSER__ && __DEV__ ?
                [transformExpression] :
                []),
            transformSlotOutlet,
            transformElement,
            trackSlotScopes,
            transformText
        ],
        {
            on: transformOn,
            bind: transformBind,
            model: transformModel
        }
    ]
}

// vue2-core/src/compiler/parser/index.ts
if (inVPre) {
    processRawAttrs(element)
} else if (!element.processed) {
    // structural directives
    // 结构指示
    processFor(element)
    processIf(element)
    processOnce(element)
}

// parse.ts 
// 对 if for 进行 warn 提示
if (hasIf && hasFor) {
    warnDeprecation(
        CompilerDeprecationTypes.COMPILER_V_IF_V_FOR_PRECEDENCE,
        context,
        getSelection(context, start)
    )
    break
}
```

要完全理解这些代码的工作原理，建议查阅 Vue 3 的官方源码库，特别是编译器部分的代码。由于 Vue 的源代码经常更新，最准确的方法是直接查看最新版本的代码库。

-----

讲讲v-model的原理

vue的最佳实践是什么？

如果需要你起一个新的vue项目，你会怎么去做，会用哪些工具、框架，需要怎么组织文件结构？
