(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{288:function(e,t,a){"use strict";a.r(t);var s=a(10),o=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"glob"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#glob"}},[e._v("#")]),e._v(" Glob")]),e._v(" "),t("p",[e._v("使用 shell 模式来匹配文件，如星号等。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://travis-ci.org/isaacs/node-glob/",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://travis-ci.org/isaacs/node-glob.svg?branch=master",alt:"Build Status"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://ci.appveyor.com/project/isaacs/node-glob",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://ci.appveyor.com/api/projects/status/kd7f3yftf7unxlsx?svg=true",alt:"Build Status"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://coveralls.io/github/isaacs/node-glob?branch=master",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://coveralls.io/repos/isaacs/node-glob/badge.svg?branch=master&service=github",alt:"Coverage Status"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("这是一个 glob 的 JavaScript 实现。 它使用 "),t("code",[e._v("minimatch")]),e._v(" 库来进行匹配。")]),e._v(" "),t("p",[t("img",{attrs:{src:"logo/glob.png",alt:"a fun cartoon logo made of glob characters"}})]),e._v(" "),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),t("p",[e._v("用 npm 安装")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm i glob\n")])])]),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" glob "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"glob"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// options 是可选的")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("glob")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"**/*.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("er"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" files")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// files 是匹配到的文件的数组.")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 如果 `nonull` 选项被设置为true, 而且没有找到任何文件,那么 files 就是 glob 规则本身,而不是空数组")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// er 是当寻找的过程中遇的错误")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("h2",{attrs:{id:"glob-primer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#glob-primer"}},[e._v("#")]),e._v(" Glob Primer")]),e._v(" "),t("p",[e._v('"Globs" are the patterns you type when you do stuff like '),t("code",[e._v("ls *.js")]),e._v(" on\nthe command line, or put "),t("code",[e._v("build/*")]),e._v(" in a "),t("code",[e._v(".gitignore")]),e._v(" file.")]),e._v(" "),t("p",[e._v("Before parsing the path part patterns, braced sections are expanded\ninto a set.  Braced sections start with "),t("code",[e._v("{")]),e._v(" and end with "),t("code",[e._v("}")]),e._v(", with any\nnumber of comma-delimited sections within.  Braced sections may contain\nslash characters, so "),t("code",[e._v("a{/b/c,bcd}")]),e._v(" would expand into "),t("code",[e._v("a/b/c")]),e._v(" and "),t("code",[e._v("abcd")]),e._v(".")]),e._v(" "),t("p",[e._v("The following characters have special magic meaning when used in a\npath portion:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("*")]),e._v(" Matches 0 or more characters in a single path portion")]),e._v(" "),t("li",[t("code",[e._v("?")]),e._v(" Matches 1 character")]),e._v(" "),t("li",[t("code",[e._v("[...]")]),e._v(" Matches a range of characters, similar to a RegExp range.\nIf the first character of the range is "),t("code",[e._v("!")]),e._v(" or "),t("code",[e._v("^")]),e._v(" then it matches\nany character not in the range.")]),e._v(" "),t("li",[t("code",[e._v("!(pattern|pattern|pattern)")]),e._v(" Matches anything that does not match\nany of the patterns provided.")]),e._v(" "),t("li",[t("code",[e._v("?(pattern|pattern|pattern)")]),e._v(" Matches zero or one occurrence of the\npatterns provided.")]),e._v(" "),t("li",[t("code",[e._v("+(pattern|pattern|pattern)")]),e._v(" Matches one or more occurrences of the\npatterns provided.")]),e._v(" "),t("li",[t("code",[e._v("*(a|b|c)")]),e._v(" Matches zero or more occurrences of the patterns provided")]),e._v(" "),t("li",[t("code",[e._v("@(pattern|pat*|pat?erN)")]),e._v(" Matches exactly one of the patterns\nprovided")]),e._v(" "),t("li",[t("code",[e._v("**")]),e._v(' If a "globstar" is alone in a path portion, then it matches\nzero or more directories and subdirectories searching for matches.\nIt does not crawl symlinked directories.')])]),e._v(" "),t("h3",{attrs:{id:"dots"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dots"}},[e._v("#")]),e._v(" Dots")]),e._v(" "),t("p",[e._v("If a file or directory path portion has a "),t("code",[e._v(".")]),e._v(" as the first character,\nthen it will not match any glob pattern unless that pattern's\ncorresponding path part also has a "),t("code",[e._v(".")]),e._v(" as its first character.")]),e._v(" "),t("p",[e._v("For example, the pattern "),t("code",[e._v("a/.*/c")]),e._v(" would match the file at "),t("code",[e._v("a/.b/c")]),e._v(".\nHowever the pattern "),t("code",[e._v("a/*/c")]),e._v(" would not, because "),t("code",[e._v("*")]),e._v(" does not start with\na dot character.")]),e._v(" "),t("p",[e._v("You can make glob treat dots as normal characters by setting\n"),t("code",[e._v("dot:true")]),e._v(" in the options.")]),e._v(" "),t("h3",{attrs:{id:"basename-matching"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basename-matching"}},[e._v("#")]),e._v(" Basename Matching")]),e._v(" "),t("p",[e._v("If you set "),t("code",[e._v("matchBase:true")]),e._v(" in the options, and the pattern has no\nslashes in it, then it will seek for any file anywhere in the tree\nwith a matching basename.  For example, "),t("code",[e._v("*.js")]),e._v(" would match\n"),t("code",[e._v("test/simple/basic.js")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"empty-sets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#empty-sets"}},[e._v("#")]),e._v(" Empty Sets")]),e._v(" "),t("p",[e._v("If no matching files are found, then an empty array is returned.  This\ndiffers from the shell, where the pattern itself is returned.  For\nexample:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("$ echo a*s*d*f\na*s*d*f\n")])])]),t("p",[e._v("To get the bash-style behavior, set the "),t("code",[e._v("nonull:true")]),e._v(" in the options.")]),e._v(" "),t("h3",{attrs:{id:"see-also"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[e._v("#")]),e._v(" See Also:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("man sh")])]),e._v(" "),t("li",[t("code",[e._v("man bash")]),e._v(' (Search for "Pattern Matching")')]),e._v(" "),t("li",[t("code",[e._v("man 3 fnmatch")])]),e._v(" "),t("li",[t("code",[e._v("man 5 gitignore")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/isaacs/minimatch",target:"_blank",rel:"noopener noreferrer"}},[e._v("minimatch documentation"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"glob-hasmagic-pattern-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#glob-hasmagic-pattern-options"}},[e._v("#")]),e._v(" glob.hasMagic(pattern, [options])")]),e._v(" "),t("p",[e._v("Returns "),t("code",[e._v("true")]),e._v(" if there are any special characters in the pattern, and\n"),t("code",[e._v("false")]),e._v(" otherwise.")]),e._v(" "),t("p",[e._v("Note that the options affect the results.  If "),t("code",[e._v("noext:true")]),e._v(" is set in\nthe options object, then "),t("code",[e._v("+(a|b)")]),e._v(" will not be considered a magic\npattern.  If the pattern has a brace expansion, like "),t("code",[e._v("a/{b/c,x/y}")]),e._v("\nthen that is considered magical, unless "),t("code",[e._v("nobrace:true")]),e._v(" is set in the\noptions.")]),e._v(" "),t("h2",{attrs:{id:"glob-pattern-options-cb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#glob-pattern-options-cb"}},[e._v("#")]),e._v(" glob(pattern, [options], cb)")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("pattern")]),e._v(" "),t("code",[e._v("{String}")]),e._v(" Pattern to be matched")]),e._v(" "),t("li",[t("code",[e._v("options")]),e._v(" "),t("code",[e._v("{Object}")])]),e._v(" "),t("li",[t("code",[e._v("cb")]),e._v(" "),t("code",[e._v("{Function}")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("err")]),e._v(" "),t("code",[e._v("{Error | null}")])]),e._v(" "),t("li",[t("code",[e._v("matches")]),e._v(" "),t("code",[e._v("{Array<String>}")]),e._v(" filenames found matching the pattern")])])])]),e._v(" "),t("p",[e._v("Perform an asynchronous glob search.")]),e._v(" "),t("h2",{attrs:{id:"glob-sync-pattern-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#glob-sync-pattern-options"}},[e._v("#")]),e._v(" glob.sync(pattern, [options])")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("pattern")]),e._v(" "),t("code",[e._v("{String}")]),e._v(" Pattern to be matched")]),e._v(" "),t("li",[t("code",[e._v("options")]),e._v(" "),t("code",[e._v("{Object}")])]),e._v(" "),t("li",[e._v("return: "),t("code",[e._v("{Array<String>}")]),e._v(" filenames found matching the pattern")])]),e._v(" "),t("p",[e._v("Perform a synchronous glob search.")]),e._v(" "),t("h2",{attrs:{id:"class-glob-glob"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class-glob-glob"}},[e._v("#")]),e._v(" Class: glob.Glob")]),e._v(" "),t("p",[e._v("Create a Glob object by instantiating the "),t("code",[e._v("glob.Glob")]),e._v(" class.")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" Glob "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"glob"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Glob\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" mg "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Glob")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("pattern"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" cb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("It's an EventEmitter, and starts walking the filesystem to find matches\nimmediately.")]),e._v(" "),t("h3",{attrs:{id:"new-glob-glob-pattern-options-cb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-glob-glob-pattern-options-cb"}},[e._v("#")]),e._v(" new glob.Glob(pattern, [options], [cb])")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("pattern")]),e._v(" "),t("code",[e._v("{String}")]),e._v(" pattern to search for")]),e._v(" "),t("li",[t("code",[e._v("options")]),e._v(" "),t("code",[e._v("{Object}")])]),e._v(" "),t("li",[t("code",[e._v("cb")]),e._v(" "),t("code",[e._v("{Function}")]),e._v(" Called when an error occurs, or matches are found\n"),t("ul",[t("li",[t("code",[e._v("err")]),e._v(" "),t("code",[e._v("{Error | null}")])]),e._v(" "),t("li",[t("code",[e._v("matches")]),e._v(" "),t("code",[e._v("{Array<String>}")]),e._v(" filenames found matching the pattern")])])])]),e._v(" "),t("p",[e._v("Note that if the "),t("code",[e._v("sync")]),e._v(" flag is set in the options, then matches will\nbe immediately available on the "),t("code",[e._v("g.found")]),e._v(" member.")]),e._v(" "),t("h3",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("minimatch")]),e._v(" The minimatch object that the glob uses.")]),e._v(" "),t("li",[t("code",[e._v("options")]),e._v(" The options object passed in.")]),e._v(" "),t("li",[t("code",[e._v("aborted")]),e._v(" Boolean which is set to true when calling "),t("code",[e._v("abort()")]),e._v(".  There\nis no way at this time to continue a glob search after aborting, but\nyou can re-use the statCache to avoid having to duplicate syscalls.")]),e._v(" "),t("li",[t("code",[e._v("cache")]),e._v(" Convenience object.  Each field has the following possible\nvalues:\n"),t("ul",[t("li",[t("code",[e._v("false")]),e._v(" - Path does not exist")]),e._v(" "),t("li",[t("code",[e._v("true")]),e._v(" - Path exists")]),e._v(" "),t("li",[t("code",[e._v("'FILE'")]),e._v(" - Path exists, and is not a directory")]),e._v(" "),t("li",[t("code",[e._v("'DIR'")]),e._v(" - Path exists, and is a directory")]),e._v(" "),t("li",[t("code",[e._v("[file, entries, ...]")]),e._v(" - Path exists, is a directory, and the\narray value is the results of "),t("code",[e._v("fs.readdir")])])])]),e._v(" "),t("li",[t("code",[e._v("statCache")]),e._v(" Cache of "),t("code",[e._v("fs.stat")]),e._v(" results, to prevent statting the same\npath multiple times.")]),e._v(" "),t("li",[t("code",[e._v("symlinks")]),e._v(" A record of which paths are symbolic links, which is\nrelevant in resolving "),t("code",[e._v("**")]),e._v(" patterns.")]),e._v(" "),t("li",[t("code",[e._v("realpathCache")]),e._v(" An optional object which is passed to "),t("code",[e._v("fs.realpath")]),e._v("\nto minimize unnecessary syscalls.  It is stored on the instantiated\nGlob object, and may be re-used.")])]),e._v(" "),t("h3",{attrs:{id:"events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("end")]),e._v(" When the matching is finished, this is emitted with all the\nmatches found.  If the "),t("code",[e._v("nonull")]),e._v(" option is set, and no match was found,\nthen the "),t("code",[e._v("matches")]),e._v(" list contains the original pattern.  The matches\nare sorted, unless the "),t("code",[e._v("nosort")]),e._v(" flag is set.")]),e._v(" "),t("li",[t("code",[e._v("match")]),e._v(" Every time a match is found, this is emitted with the specific\nthing that matched. It is not deduplicated or resolved to a realpath.")]),e._v(" "),t("li",[t("code",[e._v("error")]),e._v(" Emitted when an unexpected error is encountered, or whenever\nany fs error occurs if "),t("code",[e._v("options.strict")]),e._v(" is set.")]),e._v(" "),t("li",[t("code",[e._v("abort")]),e._v(" When "),t("code",[e._v("abort()")]),e._v(" is called, this event is raised.")])]),e._v(" "),t("h3",{attrs:{id:"methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("pause")]),e._v(" Temporarily stop the search")]),e._v(" "),t("li",[t("code",[e._v("resume")]),e._v(" Resume the search")]),e._v(" "),t("li",[t("code",[e._v("abort")]),e._v(" Stop the search forever")])]),e._v(" "),t("h3",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),t("p",[e._v("All the options that can be passed to Minimatch can also be passed to\nGlob to change pattern matching behavior.  Also, some have been added,\nor have glob-specific ramifications.")]),e._v(" "),t("p",[e._v("All options are false by default, unless otherwise noted.")]),e._v(" "),t("p",[e._v("All options are added to the Glob object, as well.")]),e._v(" "),t("p",[e._v("If you are running many "),t("code",[e._v("glob")]),e._v(" operations, you can pass a Glob object\nas the "),t("code",[e._v("options")]),e._v(" argument to a subsequent operation to shortcut some\n"),t("code",[e._v("stat")]),e._v(" and "),t("code",[e._v("readdir")]),e._v(" calls.  At the very least, you may pass in shared\n"),t("code",[e._v("symlinks")]),e._v(", "),t("code",[e._v("statCache")]),e._v(", "),t("code",[e._v("realpathCache")]),e._v(", and "),t("code",[e._v("cache")]),e._v(" options, so that\nparallel glob operations will be sped up by sharing information about\nthe filesystem.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("cwd")]),e._v(" The current working directory in which to search.  Defaults\nto "),t("code",[e._v("process.cwd()")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("root")]),e._v(" The place where patterns starting with "),t("code",[e._v("/")]),e._v(" will be mounted\nonto.  Defaults to "),t("code",[e._v('path.resolve(options.cwd, "/")')]),e._v(" ("),t("code",[e._v("/")]),e._v(" on Unix\nsystems, and "),t("code",[e._v("C:\\")]),e._v(" or some such on Windows.)")]),e._v(" "),t("li",[t("code",[e._v("dot")]),e._v(" Include "),t("code",[e._v(".dot")]),e._v(" files in normal matches and "),t("code",[e._v("globstar")]),e._v(" matches.\nNote that an explicit dot in a portion of the pattern will always\nmatch dot files.")]),e._v(" "),t("li",[t("code",[e._v("nomount")]),e._v(' By default, a pattern starting with a forward-slash will be\n"mounted" onto the root setting, so that a valid filesystem path is\nreturned.  Set this flag to disable that behavior.')]),e._v(" "),t("li",[t("code",[e._v("mark")]),e._v(" Add a "),t("code",[e._v("/")]),e._v(" character to directory matches.  Note that this\nrequires additional stat calls.")]),e._v(" "),t("li",[t("code",[e._v("nosort")]),e._v(" Don't sort the results.")]),e._v(" "),t("li",[t("code",[e._v("stat")]),e._v(" Set to true to stat "),t("em",[e._v("all")]),e._v(" results.  This reduces performance\nsomewhat, and is completely unnecessary, unless "),t("code",[e._v("readdir")]),e._v(" is presumed\nto be an untrustworthy indicator of file existence.")]),e._v(" "),t("li",[t("code",[e._v("silent")]),e._v(" When an unusual error is encountered when attempting to\nread a directory, a warning will be printed to stderr.  Set the\n"),t("code",[e._v("silent")]),e._v(" option to true to suppress these warnings.")]),e._v(" "),t("li",[t("code",[e._v("strict")]),e._v(" When an unusual error is encountered when attempting to\nread a directory, the process will just continue on in search of\nother matches.  Set the "),t("code",[e._v("strict")]),e._v(" option to raise an error in these\ncases.")]),e._v(" "),t("li",[t("code",[e._v("cache")]),e._v(" See "),t("code",[e._v("cache")]),e._v(" property above.  Pass in a previously generated\ncache object to save some fs calls.")]),e._v(" "),t("li",[t("code",[e._v("statCache")]),e._v(' A cache of results of filesystem information, to prevent\nunnecessary stat calls.  While it should not normally be necessary\nto set this, you may pass the statCache from one glob() call to the\noptions object of another, if you know that the filesystem will not\nchange between calls.  (See "Race Conditions" below.)')]),e._v(" "),t("li",[t("code",[e._v("symlinks")]),e._v(" A cache of known symbolic links.  You may pass in a\npreviously generated "),t("code",[e._v("symlinks")]),e._v(" object to save "),t("code",[e._v("lstat")]),e._v(" calls when\nresolving "),t("code",[e._v("**")]),e._v(" matches.")]),e._v(" "),t("li",[t("code",[e._v("sync")]),e._v(" DEPRECATED: use "),t("code",[e._v("glob.sync(pattern, opts)")]),e._v(" instead.")]),e._v(" "),t("li",[t("code",[e._v("nounique")]),e._v(" In some cases, brace-expanded patterns can result in the\nsame file showing up multiple times in the result set.  By default,\nthis implementation prevents duplicates in the result set.  Set this\nflag to disable that behavior.")]),e._v(" "),t("li",[t("code",[e._v("nonull")]),e._v(" Set to never return an empty set, instead returning a set\ncontaining the pattern itself.  This is the default in glob(3).")]),e._v(" "),t("li",[t("code",[e._v("debug")]),e._v(" Set to enable debug logging in minimatch and glob.")]),e._v(" "),t("li",[t("code",[e._v("nobrace")]),e._v(" Do not expand "),t("code",[e._v("{a,b}")]),e._v(" and "),t("code",[e._v("{1..3}")]),e._v(" brace sets.")]),e._v(" "),t("li",[t("code",[e._v("noglobstar")]),e._v(" Do not match "),t("code",[e._v("**")]),e._v(" against multiple filenames.  (Ie,\ntreat it as a normal "),t("code",[e._v("*")]),e._v(" instead.)")]),e._v(" "),t("li",[t("code",[e._v("noext")]),e._v(" Do not match "),t("code",[e._v("+(a|b)")]),e._v(' "extglob" patterns.')]),e._v(" "),t("li",[t("code",[e._v("nocase")]),e._v(" Perform a case-insensitive match.  Note: on\ncase-insensitive filesystems, non-magic patterns will match by\ndefault, since "),t("code",[e._v("stat")]),e._v(" and "),t("code",[e._v("readdir")]),e._v(" will not raise errors.")]),e._v(" "),t("li",[t("code",[e._v("matchBase")]),e._v(" Perform a basename-only match if the pattern does not\ncontain any slash characters.  That is, "),t("code",[e._v("*.js")]),e._v(" would be treated as\nequivalent to "),t("code",[e._v("**/*.js")]),e._v(", matching all js files in all directories.")]),e._v(" "),t("li",[t("code",[e._v("nodir")]),e._v(" Do not match directories, only files.  (Note: to match\n"),t("em",[e._v("only")]),e._v(" directories, simply put a "),t("code",[e._v("/")]),e._v(" at the end of the pattern.)")]),e._v(" "),t("li",[t("code",[e._v("ignore")]),e._v(" Add a pattern or an array of glob patterns to exclude matches.\nNote: "),t("code",[e._v("ignore")]),e._v(" patterns are "),t("em",[e._v("always")]),e._v(" in "),t("code",[e._v("dot:true")]),e._v(" mode, regardless\nof any other settings.")]),e._v(" "),t("li",[t("code",[e._v("follow")]),e._v(" Follow symlinked directories when expanding "),t("code",[e._v("**")]),e._v(" patterns.\nNote that this can result in a lot of duplicate references in the\npresence of cyclic links.")]),e._v(" "),t("li",[t("code",[e._v("realpath")]),e._v(" Set to true to call "),t("code",[e._v("fs.realpath")]),e._v(" on all of the results.\nIn the case of a symlink that cannot be resolved, the full absolute\npath to the matched entry is returned (though it will usually be a\nbroken symlink)")]),e._v(" "),t("li",[t("code",[e._v("absolute")]),e._v(" Set to true to always receive absolute paths for matched\nfiles.  Unlike "),t("code",[e._v("realpath")]),e._v(", this also affects the values returned in\nthe "),t("code",[e._v("match")]),e._v(" event.")])]),e._v(" "),t("h2",{attrs:{id:"comparisons-to-other-fnmatch-glob-implementations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#comparisons-to-other-fnmatch-glob-implementations"}},[e._v("#")]),e._v(" Comparisons to other fnmatch/glob implementations")]),e._v(" "),t("p",[e._v("While strict compliance with the existing standards is a worthwhile\ngoal, some discrepancies exist between node-glob and other\nimplementations, and are intentional.")]),e._v(" "),t("p",[e._v("The double-star character "),t("code",[e._v("**")]),e._v(" is supported by default, unless the\n"),t("code",[e._v("noglobstar")]),e._v(" flag is set.  This is supported in the manner of bsdglob\nand bash 4.3, where "),t("code",[e._v("**")]),e._v(" only has special significance if it is the only\nthing in a path part.  That is, "),t("code",[e._v("a/**/b")]),e._v(" will match "),t("code",[e._v("a/x/y/b")]),e._v(", but\n"),t("code",[e._v("a/**b")]),e._v(" will not.")]),e._v(" "),t("p",[e._v("Note that symlinked directories are not crawled as part of a "),t("code",[e._v("**")]),e._v(",\nthough their contents may match against subsequent portions of the\npattern.  This prevents infinite loops and duplicates and the like.")]),e._v(" "),t("p",[e._v("If an escaped pattern has no matches, and the "),t("code",[e._v("nonull")]),e._v(" flag is set,\nthen glob returns the pattern as-provided, rather than\ninterpreting the character escapes.  For example,\n"),t("code",[e._v('glob.match([], "\\\\*a\\\\?")')]),e._v(" will return "),t("code",[e._v('"\\\\*a\\\\?"')]),e._v(" rather than\n"),t("code",[e._v('"*a?"')]),e._v(".  This is akin to setting the "),t("code",[e._v("nullglob")]),e._v(" option in bash, except\nthat it does not resolve escaped pattern characters.")]),e._v(" "),t("p",[e._v("If brace expansion is not disabled, then it is performed before any\nother interpretation of the glob pattern.  Thus, a pattern like\n"),t("code",[e._v("+(a|{b),c)}")]),e._v(", which would not be valid in bash or zsh, is expanded\n"),t("strong",[e._v("first")]),e._v(" into the set of "),t("code",[e._v("+(a|b)")]),e._v(" and "),t("code",[e._v("+(a|c)")]),e._v(", and those patterns are\nchecked for validity.  Since those two are valid, matching proceeds.")]),e._v(" "),t("h3",{attrs:{id:"comments-and-negation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#comments-and-negation"}},[e._v("#")]),e._v(" Comments and Negation")]),e._v(" "),t("p",[e._v('Previously, this module let you mark a pattern as a "comment" if it\nstarted with a '),t("code",[e._v("#")]),e._v(' character, or a "negated" pattern if it started\nwith a '),t("code",[e._v("!")]),e._v(" character.")]),e._v(" "),t("p",[e._v("These options were deprecated in version 5, and removed in version 6.")]),e._v(" "),t("p",[e._v("To specify things that should not match, use the "),t("code",[e._v("ignore")]),e._v(" option.")]),e._v(" "),t("h2",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),t("p",[t("strong",[e._v("Please only use forward-slashes in glob expressions.")])]),e._v(" "),t("p",[e._v("Though windows uses either "),t("code",[e._v("/")]),e._v(" or "),t("code",[e._v("\\")]),e._v(" as its path separator, only "),t("code",[e._v("/")]),e._v("\ncharacters are used by this glob implementation.  You must use\nforward-slashes "),t("strong",[e._v("only")]),e._v(" in glob expressions.  Back-slashes will always\nbe interpreted as escape characters, not path separators.")]),e._v(" "),t("p",[e._v("Results from absolute patterns such as "),t("code",[e._v("/foo/*")]),e._v(" are mounted onto the\nroot setting using "),t("code",[e._v("path.join")]),e._v(".  On windows, this will by default result\nin "),t("code",[e._v("/foo/*")]),e._v(" matching "),t("code",[e._v("C:\\foo\\bar.txt")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"race-conditions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#race-conditions"}},[e._v("#")]),e._v(" Race Conditions")]),e._v(" "),t("p",[e._v("Glob searching, by its very nature, is susceptible to race conditions,\nsince it relies on directory walking and such.")]),e._v(" "),t("p",[e._v("As a result, it is possible that a file that exists when glob looks for\nit may have been deleted or modified by the time it returns the result.")]),e._v(" "),t("p",[e._v("As part of its internal implementation, this program caches all stat\nand readdir calls that it makes, in order to cut down on system\noverhead.  However, this also makes it even more susceptible to races,\nespecially if the cache or statCache objects are reused between glob\ncalls.")]),e._v(" "),t("p",[e._v("Users are thus advised not to use a glob result as a guarantee of\nfilesystem state in the face of rapid changes.  For the vast majority\nof operations, this is never a problem.")]),e._v(" "),t("h2",{attrs:{id:"glob-logo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#glob-logo"}},[e._v("#")]),e._v(" Glob Logo")]),e._v(" "),t("p",[e._v("Glob's logo was created by "),t("a",{attrs:{href:"http://tanyabrassie.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tanya Brassie"),t("OutboundLink")],1),e._v(". Logo files can be found "),t("a",{attrs:{href:"https://github.com/isaacs/node-glob/tree/master/logo",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("The logo is licensed under a "),t("a",{attrs:{href:"https://creativecommons.org/licenses/by-sa/4.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creative Commons Attribution-ShareAlike 4.0 International License"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"contributing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[e._v("#")]),e._v(" Contributing")]),e._v(" "),t("p",[e._v("Any change to behavior (including bugfixes) must come with a test.")]),e._v(" "),t("p",[e._v("Patches that fail tests or reduce performance will be rejected.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# to run tests\nnpm test\n\n# to re-generate test fixtures\nnpm run test-regen\n\n# to benchmark against bash/zsh\nnpm run bench\n\n# to profile javascript\nnpm run prof\n")])])]),t("p",[t("img",{attrs:{src:"oh-my-glob.gif",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/yanglang/p/9875110.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("node-glob学习"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);