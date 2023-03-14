var num = 7;
var strs = "aabbcc";
var strArry = strs.split("");

// 特殊情况处理
if (num === 1 && strArry.length === 1) {
  console.log("yes");
  console.log(strs);
  return;
}

// 去冲的数组
var onlyStr = [...new Set(strArry)];
onlyStr = onlyStr.map((e) => {
  return e + e;
});

// 对数组进行排列组合
var perm = function(s) {
  var result = [];
  if (s.length <= 1) {
    return [s];
  } else {
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      var newStr = s.slice(0, i) + s.slice(i + 1, s.length);
      var l = perm(newStr);

      for (var j = 0; j < l.length; j++) {
        var tmp = c + l[j];

        var nopass = onlyStr.some((e) => {
          return tmp.includes(e);
        });

        if (!nopass) {
          if (tmp.length === num) {
            console.log("yes");
            console.log(tmp);
            break;
          } else {
            result.push(tmp);
          }
        }
      }
    }
  }
  return result;
};

const res = perm(strs);

if (res.length) {
  console.log("yes");
  console.log(res[0]);
} else {
  console.log("no");
}
