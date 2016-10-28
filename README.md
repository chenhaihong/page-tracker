#page-tracker

通过localStorage或cookies存贮页面的滚动位置，再次访问页面时自动滚动到上次访问的位置。

##实现：

1. 访问页面时，默认使用 `localStorage` 存储页面的滚动位置，当 `localStorage` 不支持时，存储到 `cookie` 中。
再次访问该页面时，滚动页面到存储的位置。  
1. 存储时，使用的 `key` 为 `window.location.href` 的 `md5` 值。
1. 存储时，会先将 `value` 进行 `encodeURIComponent`。 取值时，会将返回值进行 `decodeURIComponent`。  
1. 滚动结束再过 0.5s，才会存储页面的滚动位置。
1. 存储方式为 `cookie` 时，存储的时间为10天。

##引入：

引入就ok了，没有再多的操作。

**1. script 标签**

```
<script src="dist/page-tracker.min.js" type="text/javascript" charset="utf-8"></script>
```

**2. import**

```
import 'page-tracker';
```

**3. require**

```
require('page-tracker');
```