﻿cn-chars
========

一个对简体和繁体汉字相互转化的Node.js模块

## 使用
```javascript
var cnchars = require('cn-chars');
```
## 接口
**toSimplifiedChar(cnChar)**

转化输入的汉字`cnChar`为简体形式。若输入的汉字为简体形式，则输出原汉字；若输入的汉字无相应简体形式，则输出原汉字。函数只接受一个汉字的输入，多余汉字将被忽略。

**toTraditionalChar(cnChar)**

转化输入的汉字`cnChar`为繁体形式。若输入的汉字为繁体形式，则输出原汉字；若输入的汉字无相应繁体形式，则输出原汉字。函数只接受一个汉字的输入，多余汉字将被忽略。
## 示例
```javascript
var cnchars = require('cn-chars');
var cnChar = '话';
var result = cnchars.toTraditionalChar(cnChar);
console.log(result); // output: 話

cnChar = '鐘';
result = cnchars.toSimplifiedChar(cnChar);
console.log(result); //output: 钟
```
## License
MIT
