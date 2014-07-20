cn-chars
========

һ���Լ���ͷ��庺���໥ת����Node.jsģ��

## ʹ��
```
var cnchars = require('cn-chars');
```
## �ӿ�
### `toSimplifiedChar(cnChar)`
ת������ĺ���`cnChar`Ϊ������ʽ��������ĺ���Ϊ������ʽ�������ԭ���֣�������ĺ�������Ӧ������ʽ�������ԭ���֡�����ֻ����һ�����ֵ����룬���຺�ֽ������ԡ�
### `toTraditionalChar(cnChar)`
ת������ĺ���`cnChar`Ϊ������ʽ��������ĺ���Ϊ������ʽ�������ԭ���֣�������ĺ�������Ӧ������ʽ�������ԭ���֡�����ֻ����һ�����ֵ����룬���຺�ֽ������ԡ�
## ʾ��
```
var cnchars = require('cn-chars');
var cnChar = '��';
var result = cnchars.toTraditionalChar(cnChar);
console.log(result); // output: Ԓ

cnChar = '�';
result = cnchars.toSimplifiedChar(cnChar);
console.log(result); //output: ��
```
## License
MIT
