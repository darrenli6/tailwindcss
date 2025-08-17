
响应式断点系统

# 1. 布局响应式

```
// 手机单列，平板双列，桌面四列
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

// 手机垂直，桌面水平
<div className="flex flex-col lg:flex-row gap-4">
```

# 2. 文字响应式

```
// 标题随屏幕大小变化
<h1 className="text-2xl md:text-4xl lg:text-6xl">

// 正文适配
<p className="text-sm md:text-base lg:text-lg">
```

# 3. 间距响应式


```
// 标题随屏幕大小变化
<h1 className="text-2xl md:text-4xl lg:text-6xl">

// 正文适配
<p className="text-sm md:text-base lg:text-lg">
```

# 4. 显示隐藏

```
// 手机隐藏，桌面显示
<div className="hidden lg:block">

// 只在中等屏幕显示
<div className="hidden md:block lg:hidden">
```

