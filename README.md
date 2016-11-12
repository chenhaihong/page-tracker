#page-tracker

通过localStorage或cookies存贮页面的滚动位置，再次访问页面时自动滚动到上次访问的位置。

##引入方式：

选择以下其中一种方式引入即可。

**1. script 标签**

```
<script src="dist/page-tracker.min.js"></script>
```

**2. import**

```
import 'page-tracker';
```

**3. require**

```
require('page-tracker');
```

##注意事项：

1. 访问页面时，默认使用 `localStorage` 存储页面的滚动位置，当 `localStorage` 不支持时，才会存储到 `cookie` 中。
再次访问该页面时，滚动页面到存储的位置。  
1. 滚动结束再过 0.5s，才会存储页面的滚动位置。
1. 存储方式为 `cookie` 时，存储的时间为365天。