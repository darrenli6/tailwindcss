"use client"
import { useState } from 'react';

export default function TailwindColorsTutorial() {
  const [activeSection, setActiveSection] = useState('text-colors');

  const sections = {
    'text-colors': {
      title: '文字颜色 (Text Colors)',
      description: '使用 text-{color} 类设置文字颜色'
    },
    'bg-colors': {
      title: '背景颜色 (Background Colors)',
      description: '使用 bg-{color} 类设置背景颜色'
    },
    'color-palette': {
      title: '颜色调色板',
      description: 'Tailwind CSS 完整颜色系统'
    },
    'opacity': {
      title: '透明度控制',
      description: '使用透明度创建半透明效果'
    },
    'gradients': {
      title: '渐变背景',
      description: '创建美丽的渐变背景效果'
    },
    'practical': {
      title: '实际应用案例',
      description: '在 Next.js 项目中的实用示例'
    }
  } as any;

  // 颜色系统定义
  const colorSystem = {
    gray: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    red: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    orange: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    amber: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    yellow: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    lime: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    green: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    emerald: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    teal: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    cyan: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    sky: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    blue: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    indigo: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    violet: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    purple: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    fuchsia: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    pink: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    rose: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']
  };

  const gradientDirections = [
    { class: 'bg-gradient-to-r', name: '向右' },
    { class: 'bg-gradient-to-l', name: '向左' },
    { class: 'bg-gradient-to-t', name: '向上' },
    { class: 'bg-gradient-to-b', name: '向下' },
    { class: 'bg-gradient-to-tr', name: '右上' },
    { class: 'bg-gradient-to-tl', name: '左上' },
    { class: 'bg-gradient-to-br', name: '右下' },
    { class: 'bg-gradient-to-bl', name: '左下' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'text-colors':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">基础文字颜色</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-black">text-black: 黑色文字</p>
                  <code className="text-xs bg-gray-200 px-2 py-1 rounded">text-black</code>
                </div>
                <div className="bg-gray-800 p-4 rounded">
                  <p className="text-white">text-white: 白色文字</p>
                  <code className="text-xs bg-gray-600 px-2 py-1 rounded text-white">text-white</code>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">text-transparent: 透明文字</p>
                  <code className="text-xs bg-gray-200 px-2 py-1 rounded">text-transparent</code>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">灰度文字颜色</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {['100', '200', '300', '400', '500', '600', '700', '800', '900'].map(shade => (
                  <div key={shade} className="bg-white p-3 rounded border text-center">
                    <p className={`text-gray-${shade} font-medium mb-1`}>文字示例</p>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">text-gray-{shade}</code>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">常用彩色文字</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-red-600 font-semibold">text-red-600: 错误信息</p>
                  <p className="text-green-600 font-semibold">text-green-600: 成功信息</p>
                  <p className="text-yellow-600 font-semibold">text-yellow-600: 警告信息</p>
                  <p className="text-blue-600 font-semibold">text-blue-600: 链接文字</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-purple-600 font-semibold">text-purple-600: 品牌色</p>
                  <p className="text-indigo-600 font-semibold">text-indigo-600: 主要按钮</p>
                  <p className="text-pink-600 font-semibold">text-pink-600: 强调色</p>
                  <p className="text-orange-600 font-semibold">text-orange-600: 活跃状态</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold mb-2">状态颜色应用</h4>
                  <div className="space-y-1 text-sm">
                    <p className="text-red-500">❌ 删除操作</p>
                    <p className="text-green-500">✅ 保存成功</p>
                    <p className="text-yellow-500">⚠️ 注意事项</p>
                    <p className="text-blue-500">📄 查看详情</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'bg-colors':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">基础背景颜色</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black text-white p-4 rounded text-center">
                  <p className="font-medium">bg-black</p>
                  <p className="text-sm opacity-75">黑色背景</p>
                </div>
                <div className="bg-white text-black p-4 rounded border text-center">
                  <p className="font-medium">bg-white</p>
                  <p className="text-sm opacity-75">白色背景</p>
                </div>
                <div className="bg-transparent border-2 border-dashed border-gray-400 p-4 rounded text-center">
                  <p className="font-medium">bg-transparent</p>
                  <p className="text-sm opacity-75">透明背景</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">常用背景颜色</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Object.keys(colorSystem).slice(0, 12).map(color => (
                  <div key={color} className={`bg-${color}-500 text-white p-4 rounded text-center`}>
                    <p className="font-medium capitalize">{color}</p>
                    <code className="text-xs opacity-75">bg-{color}-500</code>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">蓝色系背景深浅</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-11 gap-2">
                {colorSystem.blue.map(shade => {
                  const textColor = parseInt(shade) > 400 ? 'text-white' : 'text-gray-900';
                  return (
                    <div key={shade} className={`bg-blue-${shade} ${textColor} p-3 rounded text-center`}>
                      <p className="text-sm font-medium">{shade}</p>
                      <code className="text-xs opacity-75">bg-blue-{shade}</code>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">实用背景组合</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                    <p className="text-blue-800 font-medium">信息提示框</p>
                    <p className="text-blue-600 text-sm">bg-blue-50 + border-blue-200 + text-blue-800</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 p-4 rounded">
                    <p className="text-green-800 font-medium">成功提示框</p>
                    <p className="text-green-600 text-sm">bg-green-50 + border-green-200 + text-green-800</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 p-4 rounded">
                    <p className="text-red-800 font-medium">错误提示框</p>
                    <p className="text-red-600 text-sm">bg-red-50 + border-red-200 + text-red-800</p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
                    <p className="text-yellow-800 font-medium">警告提示框</p>
                    <p className="text-yellow-600 text-sm">bg-yellow-50 + border-yellow-200 + text-yellow-800</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'color-palette':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">完整颜色调色板</h3>
              <p className="text-gray-600 mb-6">Tailwind CSS 提供了丰富的颜色系统，每种颜色都有 11 个不同的深浅度</p>
              
              {Object.entries(colorSystem).slice(0, 6).map(([colorName, shades]) => (
                <div key={colorName} className="mb-6">
                  <h4 className="font-semibold mb-3 capitalize text-lg">{colorName}</h4>
                  <div className="grid grid-cols-11 gap-1 mb-2">
                    {shades.map(shade => {
                      const textColor = ['50', '100', '200', '300'].includes(shade) ? 'text-gray-900' : 'text-white';
                      return (
                        <div key={shade} className={`bg-${colorName}-${shade} ${textColor} p-2 rounded text-center`}>
                          <div className="text-xs font-medium">{shade}</div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-xs text-gray-500 grid grid-cols-11 gap-1">
                    {shades.map(shade => (
                      <div key={shade} className="text-center">
                        {colorName}-{shade}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'opacity':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">文字透明度</h3>
              <div className="bg-gray-100 p-6 rounded">
                <div className="space-y-2">
                  <p className="text-blue-600 text-opacity-100">text-opacity-100: 完全不透明</p>
                  <p className="text-blue-600 text-opacity-75">text-opacity-75: 75% 不透明</p>
                  <p className="text-blue-600 text-opacity-50">text-opacity-50: 50% 不透明</p>
                  <p className="text-blue-600 text-opacity-25">text-opacity-25: 25% 不透明</p>
                  <p className="text-blue-600 text-opacity-0">text-opacity-0: 完全透明</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">背景透明度</h3>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded"></div>
                <div className="relative p-6 space-y-4">
                  <div className="bg-white bg-opacity-100 p-4 rounded">
                    <p className="font-medium">bg-opacity-100: 完全不透明</p>
                  </div>
                  <div className="bg-white bg-opacity-75 p-4 rounded">
                    <p className="font-medium">bg-opacity-75: 75% 不透明</p>
                  </div>
                  <div className="bg-white bg-opacity-50 p-4 rounded">
                    <p className="font-medium">bg-opacity-50: 50% 不透明</p>
                  </div>
                  <div className="bg-white bg-opacity-25 p-4 rounded">
                    <p className="font-medium">bg-opacity-25: 25% 不透明</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">透明度实际应用</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-r from-blue-400 to-purple-600 rounded"></div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded">
                    <div className="text-center text-white">
                      <h4 className="text-xl font-bold">图片遮罩层</h4>
                      <p>bg-black bg-opacity-50</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-500 p-6 rounded relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative text-white">
                    <h4 className="text-xl font-bold mb-2">装饰性元素</h4>
                    <p>使用半透明背景创建装饰效果</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'gradients':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">渐变方向</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {gradientDirections.map(direction => (
                  <div key={direction.class} className={`${direction.class} from-blue-500 to-purple-600 text-white p-6 rounded text-center`}>
                    <p className="font-medium">{direction.name}</p>
                    <code className="text-xs opacity-75">{direction.class}</code>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">常用渐变组合</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-6 rounded">
                  <h4 className="font-bold">彩虹渐变</h4>
                  <code className="text-xs opacity-75">from-purple-400 via-pink-500 to-red-500</code>
                </div>
                <div className="bg-gradient-to-br from-green-400 to-blue-600 text-white p-6 rounded">
                  <h4 className="font-bold">清新渐变</h4>
                  <code className="text-xs opacity-75">from-green-400 to-blue-600</code>
                </div>
                <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white p-6 rounded">
                  <h4 className="font-bold">日落渐变</h4>
                  <code className="text-xs opacity-75">from-yellow-400 via-red-500 to-pink-500</code>
                </div>
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6 rounded">
                  <h4 className="font-bold">神秘渐变</h4>
                  <code className="text-xs opacity-75">from-indigo-500 via-purple-500 to-pink-500</code>
                </div>
                <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white p-6 rounded">
                  <h4 className="font-bold">深色渐变</h4>
                  <code className="text-xs opacity-75">from-gray-700 via-gray-900 to-black</code>
                </div>
                <div className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-gray-800 p-6 rounded">
                  <h4 className="font-bold">柔和渐变</h4>
                  <code className="text-xs opacity-75">from-blue-200 via-purple-200 to-pink-200</code>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">文字渐变效果</h3>
              <div className="space-y-4">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  渐变文字标题
                </h2>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  另一个渐变标题
                </h3>
                <p className="text-lg bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                  这是一段带有渐变效果的文字内容
                </p>
              </div>
              <div className="mt-4 p-4 bg-gray-100 rounded">
                <code className="text-sm">
                  bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
                </code>
              </div>
            </div>
          </div>
        );

      case 'practical':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">UI 组件配色方案</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">按钮配色</h4>
                  <div className="space-y-2">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full transition-colors">
                      主要按钮 (bg-blue-600)
                    </button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded w-full transition-colors">
                      次要按钮 (bg-gray-200)
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full transition-colors">
                      成功按钮 (bg-green-600)
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-full transition-colors">
                      危险按钮 (bg-red-600)
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">状态标签</h4>
                  <div className="space-y-2">
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      ✅ 已完成
                    </span>
                    <br />
                    <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      ⏳ 进行中
                    </span>
                    <br />
                    <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                      ❌ 已取消
                    </span>
                    <br />
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      📋 待处理
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">卡片设计配色</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-blue-600 text-xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">数据分析</h3>
                  <p className="text-gray-600">蓝色系配色方案，专业可信</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-green-600 text-xl">💰</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">财务管理</h3>
                  <p className="text-gray-600">绿色系配色，代表增长和成功</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-purple-600 text-xl">🎨</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">创意设计</h3>
                  <p className="text-gray-600">紫色系配色，激发创意灵感</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Next.js 项目中的应用</h3>
              <div className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <pre>{`// 创建按钮组件
export default function Button({ variant = 'primary', children, ...props }) {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    success: 'bg-green-600 hover:bg-green-700 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white'
  };

  return (
    <button
      className={\`\${variants[variant]} px-4 py-2 rounded transition-colors\`}
      {...props}
    >
      {children}
    </button>
  );
}

// 创建提示框组件
export default function Alert({ type = 'info', children }) {
  const types = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800'
  };

  return (
    <div className={\`\${types[type]} border p-4 rounded\`}>
      {children}
    </div>
  );
}

// 使用示例
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">欢迎使用我们的产品</h1>
          <p className="text-xl opacity-90">使用 Tailwind CSS 创建美丽的界面</p>
        </div>
      </header>
    </div>
  );
}`}</pre>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tailwind CSS 颜色系统教程
          </h1>
          <p className="text-lg text-gray-600">
            掌握文字颜色、背景颜色、透明度和渐变的使用
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeSection === key
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-indigo-50 shadow'
              }`}
            >
              {sections[key].title}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              {sections[activeSection].title}
            </h2>
            <p className="text-gray-600 text-lg">
              {sections[activeSection].description}
            </p>
          </div>

          {renderContent()}

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">🎨 颜色使用技巧</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">语义化颜色</h4>
                <ul className="text-sm space-y-1">
                  <li>🔴 红色：错误、危险、删除</li>
                  <li>🟢 绿色：成功、确认、安全</li>
                  <li>🟡 黄色：警告、注意、等待</li>
                  <li>🔵 蓝色：信息、链接、主要操作</li>
                  <li>🟣 紫色：品牌、创意、高级</li>
                  <li>⚫ 灰色：中性、次要、禁用</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">对比度考虑</h4>
                <ul className="text-sm space-y-1">
                  <li>• 确保文字与背景有足够对比度</li>
                  <li>• 深色背景使用浅色文字</li>
                  <li>• 浅色背景使用深色文字</li>
                  <li>• 避免纯色组合，使用灰度调节</li>
                  <li>• 考虑色盲用户的体验</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">📚 快速参考</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">文字颜色</h4>
                <code className="bg-white px-2 py-1 rounded">text-{'{color}'}-{'{shade}'}</code>
                <p className="mt-1 text-gray-600">例：text-blue-600</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">背景颜色</h4>
                <code className="bg-white px-2 py-1 rounded">bg-{'{color}'}-{'{shade}'}</code>
                <p className="mt-1 text-gray-600">例：bg-red-500</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">渐变背景</h4>
                <code className="bg-white px-2 py-1 rounded">bg-gradient-to-{'{direction}'}</code>
                <p className="mt-1 text-gray-600">例：bg-gradient-to-r</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}