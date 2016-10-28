#page-tracker

通过localStorage或cookies存贮页面的滚动位置，再次访问页面时滚动到上次访问的位置。。

1. 默认使用localStorage进行访问位置的存储，当localStorage不支持时，使用cookie存储。  
1. 存储时使用的key为 `window.location.href` 的 `md5` 值。
1. 存储时，会先将 `value` 进行 `encodeURIComponent`。 取值时，会将返回值进行 `decodeURIComponent`。  
1. 滚动结束再过 0.5s，就会存储 `value`。
1. 存储方式为 `cookie` 时，存贮的时间为10天。


**使用**

引入 `page-tracker.min.js` 文件即可。

```
<script src="dist/page-tracker.min.js" type="text/javascript" charset="utf-8"></script>
```