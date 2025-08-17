"use client"
import { useState, useEffect } from 'react'

export default function ResponsiveBreakpointsDemo() {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)
    handleResize() // 初始化
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getBreakpointInfo = (width:any) => {
    if (width >= 1536) return { name: '2xl', color: 'purple', range: '≥1536px' }
    if (width >= 1280) return { name: 'xl', color: 'blue', range: '1280px-1535px' }
    if (width >= 1024) return { name: 'lg', color: 'green', range: '1024px-1279px' }
    if (width >= 768) return { name: 'md', color: 'yellow', range: '768px-1023px' }
    if (width >= 640) return { name: 'sm', color: 'orange', range: '640px-767px' }
    return { name: 'xs', color: 'red', range: '<640px' }
  }

  const currentBreakpoint = getBreakpointInfo(screenWidth)

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* 当前屏幕信息 */}
      <div className="fixed top-4 right-4 z-50">
        <div className={`px-4 py-2 rounded-lg text-white font-semibold shadow-lg bg-${currentBreakpoint.color}-500`}>
          {currentBreakpoint.name}: {screenWidth}px
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
            响应式断点系统
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            当前断点: <span className="font-semibold text-blue-600">{currentBreakpoint.name}</span> 
            ({currentBreakpoint.range})
          </p>
        </div>

        {/* 断点参考表 */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">断点参考表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-3">前缀</th>
                  <th className="text-left py-2 px-3">最小宽度</th>
                  <th className="text-left py-2 px-3">设备类型</th>
                  <th className="text-left py-2 px-3">示例</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-3 font-mono bg-red-50 text-red-600">默认</td>
                  <td className="py-2 px-3">0px</td>
                  <td className="py-2 px-3">所有设备</td>
                  <td className="py-2 px-3 font-mono text-xs">text-base</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3 font-mono bg-orange-50 text-orange-600">sm:</td>
                  <td className="py-2 px-3">640px</td>
                  <td className="py-2 px-3">大手机、小平板</td>
                  <td className="py-2 px-3 font-mono text-xs">sm:text-lg</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3 font-mono bg-yellow-50 text-yellow-600">md:</td>
                  <td className="py-2 px-3">768px</td>
                  <td className="py-2 px-3">平板</td>
                  <td className="py-2 px-3 font-mono text-xs">md:text-xl</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3 font-mono bg-green-50 text-green-600">lg:</td>
                  <td className="py-2 px-3">1024px</td>
                  <td className="py-2 px-3">笔记本</td>
                  <td className="py-2 px-3 font-mono text-xs">lg:text-2xl</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3 font-mono bg-blue-50 text-blue-600">xl:</td>
                  <td className="py-2 px-3">1280px</td>
                  <td className="py-2 px-3">桌面显示器</td>
                  <td className="py-2 px-3 font-mono text-xs">xl:text-3xl</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-mono bg-purple-50 text-purple-600">2xl:</td>
                  <td className="py-2 px-3">1536px</td>
                  <td className="py-2 px-3">大屏幕</td>
                  <td className="py-2 px-3 font-mono text-xs">2xl:text-4xl</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 布局演示 */}
        <div className="space-y-8">
          {/* 网格响应式演示 */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">网格布局响应式</h2>
            <p className="text-gray-600 mb-4 text-sm">
              <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
              </code>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {Array.from({ length: 12 }, (_, i) => (
                <div 
                  key={i}
                  className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-4 text-white text-center font-semibold"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* 文字大小响应式 */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">文字大小响应式</h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 mb-2">text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800">
                  这段文字会根据屏幕大小改变字号
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2">text-base md:text-xl lg:text-3xl</p>
                <h3 className="text-base md:text-xl lg:text-3xl font-bold text-gray-900">
                  响应式标题文字
                </h3>
              </div>
            </div>
          </div>

          {/* 间距响应式 */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">间距响应式</h2>
            <p className="text-xs text-gray-500 mb-4">p-2 sm:p-4 md:p-6 lg:p-8 xl:p-12</p>
            <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg">
              <div className="bg-white rounded-lg p-2 sm:p-4 md:p-6 lg:p-8 xl:p-12 m-1">
                <p className="text-center text-gray-800 font-medium">
                  内边距随屏幕大小变化
                </p>
              </div>
            </div>
          </div>

          {/* 显示/隐藏响应式 */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">显示/隐藏响应式</h2>
            <div className="grid gap-4">
              <div className="block sm:hidden bg-red-100 border border-red-300 rounded-lg p-4 text-red-700">
                <strong>只在手机显示</strong> (block sm:hidden)
              </div>
              <div className="hidden sm:block md:hidden bg-orange-100 border border-orange-300 rounded-lg p-4 text-orange-700">
                <strong>只在 sm 断点显示</strong> (hidden sm:block md:hidden)
              </div>
              <div className="hidden md:block lg:hidden bg-yellow-100 border border-yellow-300 rounded-lg p-4 text-yellow-700">
                <strong>只在 md 断点显示</strong> (hidden md:block lg:hidden)
              </div>
              <div className="hidden lg:block xl:hidden bg-green-100 border border-green-300 rounded-lg p-4 text-green-700">
                <strong>只在 lg 断点显示</strong> (hidden lg:block xl:hidden)
              </div>
              <div className="hidden xl:block bg-blue-100 border border-blue-300 rounded-lg p-4 text-blue-700">
                <strong>只在 xl+ 断点显示</strong> (hidden xl:block)
              </div>
            </div>
          </div>

          {/* Flexbox 响应式方向 */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">Flexbox 方向响应式</h2>
            <p className="text-xs text-gray-500 mb-4">flex-col md:flex-row</p>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 bg-purple-100 rounded-lg p-4 text-purple-700">
                <h3 className="font-semibold">区块 1</h3>
                <p>小屏幕垂直排列，大屏幕水平排列</p>
              </div>
              <div className="flex-1 bg-indigo-100 rounded-lg p-4 text-indigo-700">
                <h3 className="font-semibold">区块 2</h3>
                <p>观察布局如何响应式变化</p>
              </div>
              <div className="flex-1 bg-cyan-100 rounded-lg p-4 text-cyan-700">
                <h3 className="font-semibold">区块 3</h3>
                <p>试着调整浏览器窗口大小</p>
              </div>
            </div>
          </div>

          {/* 实用技巧 */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
            <h2 className="text-xl font-semibold mb-4">💡 响应式设计技巧</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">移动优先原则</h3>
                <ul className="text-sm space-y-1 text-purple-100">
                  <li>• 先设计手机版，再向上扩展</li>
                  <li>• 默认样式是最小屏幕的样式</li>
                  <li>• 使用 min-width 媒体查询</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">常用组合模式</h3>
                <ul className="text-sm space-y-1 text-purple-100 font-mono">
                  <li>• w-full md:w-1/2</li>
                  <li>• text-sm lg:text-base</li>
                  <li>• hidden lg:block</li>
                  <li>• flex-col lg:flex-row</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 调试提示 */}
        <div className="mt-8 bg-gray-800 text-white rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-3">🔧 调试技巧</h2>
          <div className="text-sm space-y-2">
            <p>1. 使用浏览器开发工具调整窗口大小测试断点</p>
            <p>2. 可以临时添加 <code className="bg-gray-700 px-2 py-1 rounded">border border-red-500</code> 来可视化元素</p>
            <p>3. 右上角实时显示当前屏幕宽度和断点信息</p>
            <p>4. Chrome DevTools 的设备模拟器可以快速测试不同尺寸</p>
          </div>
        </div>
      </div>
    </div>
  )
}