"use client"
import { useState } from 'react';

export default function TailwindPositionTutorial() {
  const [activeSection, setActiveSection] = useState('static');

  const sections = {
    static: {
      title: 'Static 静态定位',
      description: '默认定位方式，元素按照正常文档流排列，top/right/bottom/left 无效',
      examples: [
        { 
          class: 'static', 
          desc: '默认静态定位',
          demo: 'normal'
        }
      ]
    },
    relative: {
      title: 'Relative 相对定位',
      description: '相对于元素原来的位置进行定位，不脱离文档流',
      examples: [
        { 
          class: 'relative', 
          desc: '基本相对定位',
          demo: 'relative-basic'
        },
        { 
          class: 'relative top-4 left-4', 
          desc: '向右下偏移',
          demo: 'relative-offset'
        },
        { 
          class: 'relative -top-2 -left-2', 
          desc: '向左上偏移',
          demo: 'relative-negative'
        }
      ]
    },
    absolute: {
      title: 'Absolute 绝对定位',
      description: '相对于最近的非static祖先元素定位，脱离文档流',
      examples: [
        { 
          class: 'absolute top-0 left-0', 
          desc: '左上角定位',
          demo: 'absolute-corner'
        },
        { 
          class: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', 
          desc: '居中定位',
          demo: 'absolute-center'
        },
        { 
          class: 'absolute bottom-4 right-4', 
          desc: '右下角定位',
          demo: 'absolute-bottom-right'
        },
        { 
          class: 'absolute inset-0', 
          desc: '填满容器',
          demo: 'absolute-full'
        }
      ]
    },
    fixed: {
      title: 'Fixed 固定定位',
      description: '相对于浏览器视口定位，即使页面滚动也不会移动',
      examples: [
        { 
          class: 'fixed top-4 right-4', 
          desc: '右上角固定',
          demo: 'fixed-top-right'
        },
        { 
          class: 'fixed bottom-0 left-0 right-0', 
          desc: '底部固定栏',
          demo: 'fixed-bottom'
        },
        { 
          class: 'fixed top-0 left-0 bottom-0 w-64', 
          desc: '侧边栏固定',
          demo: 'fixed-sidebar'
        }
      ]
    },
    sticky: {
      title: 'Sticky 粘性定位',
      description: '在滚动到指定位置时变为固定定位，结合了相对定位和固定定位的特点',
      examples: [
        { 
          class: 'sticky top-0', 
          desc: '顶部粘性导航',
          demo: 'sticky-nav'
        },
        { 
          class: 'sticky top-20', 
          desc: '距离顶部20px粘性',
          demo: 'sticky-offset'
        }
      ]
    }
  };

  const positionClasses = {
    top: ['top-0', 'top-1', 'top-2', 'top-4', 'top-8', 'top-16', 'top-1/2', 'top-full'],
    right: ['right-0', 'right-1', 'right-2', 'right-4', 'right-8', 'right-16', 'right-1/2', 'right-full'],
    bottom: ['bottom-0', 'bottom-1', 'bottom-2', 'bottom-4', 'bottom-8', 'bottom-16', 'bottom-1/2', 'bottom-full'],
    left: ['left-0', 'left-1', 'left-2', 'left-4', 'left-8', 'left-16', 'left-1/2', 'left-full'],
    inset: ['inset-0', 'inset-1', 'inset-2', 'inset-4', 'inset-x-0', 'inset-y-0']
  };

  const renderDemo = (example) => {
    const { demo, class: className } = example;

    switch (demo) {
      case 'normal':
        return (
          <div className="bg-gray-100 p-4 rounded border-2 border-gray-300">
            <div className={`${className} bg-blue-200 p-4 rounded border-2 border-blue-400 mb-2`}>
              Static Element 1
            </div>
            <div className={`${className} bg-green-200 p-4 rounded border-2 border-green-400 mb-2`}>
              Static Element 2
            </div>
            <div className={`${className} bg-yellow-200 p-4 rounded border-2 border-yellow-400`}>
              Static Element 3
            </div>
          </div>
        );

      case 'relative-basic':
      case 'relative-offset':
      case 'relative-negative':
        return (
          <div className="bg-gray-100 p-8 rounded border-2 border-gray-300">
            <div className="bg-blue-200 p-4 rounded border-2 border-blue-400 mb-4">
              Normal Element
            </div>
            <div className={`${className} bg-green-200 p-4 rounded border-2 border-green-400 mb-4 z-10`}>
              Relative Element (移动了)
            </div>
            <div className="bg-yellow-200 p-4 rounded border-2 border-yellow-400">
              Normal Element
            </div>
          </div>
        );

      case 'absolute-corner':
      case 'absolute-center':
      case 'absolute-bottom-right':
      case 'absolute-full':
        return (
          <div className="relative bg-gray-100 p-8 rounded border-2 border-gray-300 h-48">
            <div className="bg-blue-200 p-4 rounded border-2 border-blue-400 mb-4">
              Normal Content
            </div>
            <div className={`${className} bg-red-200 p-3 rounded border-2 border-red-400 z-10 ${demo === 'absolute-full' ? '' : 'w-32 h-16'}`}>
              {demo === 'absolute-full' ? 'Fill Container' : 'Absolute'}
            </div>
            <div className="bg-green-200 p-4 rounded border-2 border-green-400">
              More Content
            </div>
          </div>
        );

      case 'fixed-top-right':
        return (
          <div className="bg-gray-100 p-8 rounded border-2 border-gray-300 h-48 overflow-hidden">
            <div className="bg-blue-200 p-4 rounded border-2 border-blue-400 mb-4">
              页面内容
            </div>
            <div className={`${className} bg-red-200 p-2 rounded border-2 border-red-400 z-50`}>
              固定元素
            </div>
            <div className="bg-green-200 p-4 rounded border-2 border-green-400">
              更多内容
            </div>
            <p className="text-sm text-gray-600 mt-2">
              * 实际应用中相对于浏览器视口定位
            </p>
          </div>
        );

      case 'fixed-bottom':
      case 'fixed-sidebar':
        return (
          <div className="bg-gray-100 rounded border-2 border-gray-300 h-48 overflow-hidden relative">
            <div className="p-4">
              <div className="bg-blue-200 p-4 rounded border-2 border-blue-400 mb-4">
                页面内容
              </div>
              <div className="bg-green-200 p-4 rounded border-2 border-green-400">
                更多内容
              </div>
            </div>
            <div className={`${className} bg-red-200 p-2 border-2 border-red-400 z-50`}>
              {demo === 'fixed-bottom' ? '底部固定栏' : '侧边栏'}
            </div>
            <p className="absolute bottom-1 left-1 text-xs text-gray-600">
              * 实际应用中相对于浏览器视口
            </p>
          </div>
        );

      case 'sticky-nav':
      case 'sticky-offset':
        return (
          <div className="bg-gray-100 rounded border-2 border-gray-300 h-48 overflow-y-auto">
            <div className="h-20 bg-blue-200 p-4 border-2 border-blue-400">
              页面顶部内容
            </div>
            <div className={`${className} bg-red-200 p-4 border-2 border-red-400 z-10`}>
              Sticky Navigation
            </div>
            <div className="h-32 bg-green-200 p-4 border-2 border-green-400">
              可滚动内容 1
            </div>
            <div className="h-32 bg-yellow-200 p-4 border-2 border-yellow-400">
              可滚动内容 2
            </div>
            <div className="h-32 bg-purple-200 p-4 border-2 border-purple-400">
              可滚动内容 3
            </div>
            <p className="text-sm text-gray-600 p-2">
              ↑ 向上滚动查看粘性效果
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tailwind CSS Position 定位教程
          </h1>
          <p className="text-lg text-gray-600">
            掌握 static、relative、absolute、fixed、sticky 五种定位方式
          </p>
        </div>

        {/* 导航标签 */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeSection === key
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 shadow'
              }`}
            >
              {sections[key].title}
            </button>
          ))}
        </div>

        {/* 内容区域 */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              {sections[activeSection].title}
            </h2>
            <p className="text-gray-600 text-lg">
              {sections[activeSection].description}
            </p>
          </div>

          {/* 示例区域 */}
          <div className="space-y-8">
            {sections[activeSection].examples.map((example, index) => (
              <div key={index} className="border-l-4 border-purple-400 pl-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    {example.desc}
                  </h3>
                  <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">
                    className="{example.class}"
                  </code>
                </div>
                
                {/* 可视化演示 */}
                <div className="bg-gray-50 p-6 rounded-lg border">
                  {renderDemo(example)}
                </div>
              </div>
            ))}
          </div>

          {/* 定位类名参考 */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-4">📍 定位类名参考</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(positionClasses).map(([direction, classes]) => (
                <div key={direction}>
                  <h4 className="font-semibold text-gray-700 mb-2 capitalize">
                    {direction} 方向
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {classes.map((cls) => (
                      <span key={cls} className="bg-blue-100 px-2 py-1 rounded text-xs font-mono">
                        {cls}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 实用技巧 */}
          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-lg font-bold text-green-800 mb-4">💡 实用技巧</h3>
            <div className="space-y-3">
              {activeSection === 'static' && (
                <>
                  <p>• static 是默认值，无需显式设置</p>
                  <p>• 用于重置其他定位方式回到正常文档流</p>
                </>
              )}
              {activeSection === 'relative' && (
                <>
                  <p>• 常用作绝对定位子元素的定位参考</p>
                  <p>• 使用负值可以向相反方向偏移</p>
                  <p>• 不会影响其他元素的布局位置</p>
                </>
              )}
              {activeSection === 'absolute' && (
                <>
                  <p>• 需要配合 relative 父元素使用</p>
                  <p>• 使用 `inset-0` 快速填满容器</p>
                  <p>• 配合 `translate` 实现真正的居中</p>
                  <p>• 记住设置 `z-index` 控制层级</p>
                </>
              )}
              {activeSection === 'fixed' && (
                <>
                  <p>• 适合做固定导航栏、返回顶部按钮</p>
                  <p>• 会脱离文档流，注意页面布局影响</p>
                  <p>• 在移动端使用时要考虑虚拟键盘影响</p>
                </>
              )}
              {activeSection === 'sticky' && (
                <>
                  <p>• 必须设置 top/bottom 等值才能生效</p>
                  <p>• 父容器要有足够的高度</p>
                  <p>• 适合做表格头部、章节标题等</p>
                </>
              )}
            </div>
          </div>

          {/* Next.js 实际应用示例 */}
          <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
            <h3 className="text-lg font-bold text-yellow-800 mb-4">🚀 Next.js 实际应用</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`// components/Layout.js - 创建布局组件
export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      {/* 固定顶部导航 */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Logo</h1>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-600">Home</a>
              <a href="#" className="hover:text-blue-600">About</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区域，顶部留出导航栏空间 */}
      <main className="pt-16">
        {/* 侧边栏 */}
        <aside className="fixed left-0 top-16 bottom-0 w-64 bg-gray-100 p-4 overflow-y-auto hidden lg:block">
          <h2 className="font-bold mb-4">侧边栏</h2>
          <nav className="space-y-2">
            <a href="#" className="block p-2 rounded hover:bg-gray-200">导航1</a>
            <a href="#" className="block p-2 rounded hover:bg-gray-200">导航2</a>
          </nav>
        </aside>

        {/* 内容区域 */}
        <div className="lg:ml-64">
          {/* 粘性标题 */}
          <div className="sticky top-16 bg-white border-b p-4 z-10">
            <h1 className="text-2xl font-bold">页面标题</h1>
          </div>
          
          <div className="p-6">
            {children}
          </div>
        </div>
      </main>

      {/* 返回顶部按钮 */}
      <button className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
        ↑
      </button>
    </div>
  );
}

// pages/index.js 或 app/page.js - 使用布局组件
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 固定顶部导航 */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Logo</h1>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-600">Home</a>
              <a href="#" className="hover:text-blue-600">About</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <main className="pt-16">
        <div className="lg:ml-64">
          {/* 粘性标题 */}
          <div className="sticky top-16 bg-white border-b p-4 z-10">
            <h1 className="text-2xl font-bold">页面标题</h1>
          </div>
          
          <div className="p-6">
            {/* 相对定位容器，用于绝对定位子元素 */}
            <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white mb-8">
              <h2 className="text-3xl font-bold mb-4">欢迎使用我们的产品</h2>
              <p className="text-lg">这是一个演示页面...</p>
              
              {/* 绝对定位的装饰元素 */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
            </div>

            {/* 更多内容... */}
            <div className="space-y-6">
              <section className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3">特性介绍</h3>
                <p>这里是特性介绍内容...</p>
              </section>
            </div>
          </div>
        </div>

        {/* 侧边栏 */}
        <aside className="fixed left-0 top-16 bottom-0 w-64 bg-gray-100 p-4 overflow-y-auto hidden lg:block">
          <h2 className="font-bold mb-4">侧边栏</h2>
          <nav className="space-y-2">
            <a href="#" className="block p-2 rounded hover:bg-gray-200">导航1</a>
            <a href="#" className="block p-2 rounded hover:bg-gray-200">导航2</a>
          </nav>
        </aside>

        {/* 返回顶部按钮 */}
        <button className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
          ↑
        </button>
      </main>
    </div>
  );
}`}
            </pre>
          </div>

          {/* Z-Index 层级控制 */}
          <div className="mt-8 p-6 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-bold text-purple-800 mb-4">🔄 Z-Index 层级控制</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">常用层级</h4>
                <div className="space-y-1">
                  <p><code className="bg-purple-100 px-2 py-1 rounded">z-0</code> - 默认层级</p>
                  <p><code className="bg-purple-100 px-2 py-1 rounded">z-10</code> - 稍高层级</p>
                  <p><code className="bg-purple-100 px-2 py-1 rounded">z-20</code> - 中等层级</p>
                  <p><code className="bg-purple-100 px-2 py-1 rounded">z-30</code> - 较高层级</p>
                  <p><code className="bg-purple-100 px-2 py-1 rounded">z-40</code> - 高层级</p>
                  <p><code className="bg-purple-100 px-2 py-1 rounded">z-50</code> - 最高层级</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">使用建议</h4>
                <div className="space-y-1 text-xs">
                  <p>• 导航栏: z-50</p>
                  <p>• 模态框: z-40</p>
                  <p>• 下拉菜单: z-30</p>
                  <p>• 悬浮按钮: z-20</p>
                  <p>• 卡片覆盖: z-10</p>
                  <p>• 默认内容: z-0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}