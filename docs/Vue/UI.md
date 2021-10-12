# UI 框架

## element-ui

**element-ui 时间选择器限制范围（随动）**

```JavaScript
data() {
    let _minTime = null;
    let _maxTime = null;

    return {
        pickerOptions: {
            onPick: time => {
                if (!time.maxDate) {
                    let timeRange = 7 * 24 * 60 * 60 * 1000; // 7天
                    _minTime = time.minDate.getTime() - timeRange;
                    _maxTime = time.minDate.getTime() + timeRange;
                } else {
                    _minTime = _maxTime = null;
                }
            },
            disabledDate: time => {
                if (_minTime && _maxTime) {
                    return time.getTime() < _minTime || time.getTime() > _maxTime;
                }
            }
        }
    }
}
```

**清除表单校验**

 `that.$refs.form?.clearValidate(); // 清除历史校验提示`
