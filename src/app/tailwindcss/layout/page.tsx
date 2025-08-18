"use client"
import { useState } from 'react'

export default function ContainerBoxModel() {
  const [activeDemo, setActiveDemo] = useState('container')
  const [boxModelPart, setBoxModelPart] = useState('all')

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Container 和 Box Model
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            掌握 TailwindCSS 的容器系统和盒模型，构建响应式布局的基础
          </p>
        </div>

        {/* 标签页导航 */}
        <div className="bg-white rounded-xl shadow-sm border mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {[
                { id: 'container', label: 'Container 容器', icon: '📦' },
                { id: 'box-model', label: 'Box Model 盒模型', icon: '📐' },
                { id: 'sizing', label: 'Width & Height', icon: '📏' },
                { id: 'examples', label: '实战案例', icon: '💼' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveDemo(tab.id)}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                    activeDemo === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Container 容器系统 */}
            {activeDemo === 'container' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Container 容器系统</h2>
                  <p className="text-gray-600">TailwindCSS 的响应式容器，自动适配不同屏幕尺寸</p>
                </div>

                {/* Container 断点对照表 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Container 断点对照</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b bg-gray-50">
                          <th className="text-left py-3 px-4">屏幕尺寸</th>
                          <th className="text-left py-3 px-4">断点</th>
                          <th className="text-left py-3 px-4">Container 宽度</th>
                          <th className="text-left py-3 px-4">设备类型</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-mono">640px</td>
                          <td className="py-3 px-4 font-mono text-red-600">-</td>
                          <td className="py-3 px-4 font-mono">100%</td>
                          <td className="py-3 px-4">手机</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-mono">≥ 640px</td>
                          <td className="py-3 px-4 font-mono text-orange-600">sm</td>
                          <td className="py-3 px-4 font-mono">640px</td>
                          <td className="py-3 px-4">大手机</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-mono">≥ 768px</td>
                          <td className="py-3 px-4 font-mono text-yellow-600">md</td>
                          <td className="py-3 px-4 font-mono">768px</td>
                          <td className="py-3 px-4">平板</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-mono">≥ 1024px</td>
                          <td className="py-3 px-4 font-mono text-green-600">lg</td>
                          <td className="py-3 px-4 font-mono">1024px</td>
                          <td className="py-3 px-4">笔记本</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-mono">≥ 1280px</td>
                          <td className="py-3 px-4 font-mono text-blue-600">xl</td>
                          <td className="py-3 px-4 font-mono">1280px</td>
                          <td className="py-3 px-4">桌面</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-mono">≥ 1536px</td>
                          <td className="py-3 px-4 font-mono text-purple-600">2xl</td>
                          <td className="py-3 px-4 font-mono">1536px</td>
                          <td className="py-3 px-4">大屏</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Container 视觉演示 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Container 视觉演示</h3>
                  
                  {/* 标准 Container */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-800 mb-3">标准 Container (.container)</h4>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="container mx-auto bg-blue-100 border-2 border-blue-300 p-4 rounded">
                        <div className="text-center text-blue-800 font-medium">
                          这是一个标准 Container
                        </div>
                        <div className="text-center text-blue-600 text-sm mt-2">
                          会根据屏幕尺寸自动调整最大宽度
                        </div>
                      </div>
                    </div>
                    <code className="block text-xs text-gray-500 mt-2 bg-gray-100 p-2 rounded">
                      &lt;div className="container mx-auto"&gt;内容&lt;/div&gt;
                    </code>
                  </div>

                  {/* 全宽对比 */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-800 mb-3">全宽布局对比</h4>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="w-full bg-red-100 border-2 border-red-300 p-4 rounded mb-4">
                        <div className="text-center text-red-800 font-medium">
                          全宽布局 (w-full)
                        </div>
                        <div className="text-center text-red-600 text-sm mt-2">
                          占据整个父容器宽度
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 自定义最大宽度 */}
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">自定义最大宽度</h4>
                    <div className="bg-gray-100 p-4 rounded-lg space-y-4">
                      {[
                        { class: 'max-w-sm', desc: '384px', name: '小容器' },
                        { class: 'max-w-md', desc: '448px', name: '中容器' },
                        { class: 'max-w-lg', desc: '512px', name: '大容器' },
                        { class: 'max-w-xl', desc: '576px', name: '特大容器' },
                        { class: 'max-w-2xl', desc: '672px', name: '2XL容器' },
                        { class: 'max-w-4xl', desc: '896px', name: '4XL容器' },
                        { class: 'max-w-6xl', desc: '1152px', name: '6XL容器' }
                      ].map(item => (
                        <div key={item.class}>
                          <div className={`${item.class} mx-auto bg-green-100 border-2 border-green-300 p-3 rounded`}>
                            <div className="text-center text-green-800 text-sm font-medium">
                              {item.name} ({item.class}) - {item.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Container 使用技巧 */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">📦 Container 使用技巧</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">基础用法</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <code className="bg-white px-2 py-1 rounded">container mx-auto</code> - 居中容器</li>
                        <li>• <code className="bg-white px-2 py-1 rounded">container mx-auto px-4</code> - 添加内边距</li>
                        <li>• <code className="bg-white px-2 py-1 rounded">max-w-4xl mx-auto</code> - 自定义最大宽度</li>
                        <li>• <code className="bg-white px-2 py-1 rounded">w-full max-w-screen-xl</code> - 响应式全宽</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">响应式用法</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <code className="bg-white px-2 py-1 rounded">px-4 md:px-8</code> - 响应式内边距</li>
                        <li>• <code className="bg-white px-2 py-1 rounded">max-w-sm md:max-w-2xl</code> - 响应式宽度</li>
                        <li>• <code className="bg-white px-2 py-1 rounded">container lg:max-w-4xl</code> - 限制最大宽度</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Box Model 盒模型 */}
            {activeDemo === 'box-model' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Box Model 盒模型</h2>
                  <p className="text-gray-600">理解 CSS 盒模型：内容、内边距、边框、外边距</p>
                </div>

                {/* 盒模型选择器 */}
                <div className="flex justify-center space-x-4 mb-6">
                  {[
                    { id: 'all', label: '完整盒模型', color: 'blue' },
                    { id: 'content', label: '内容区域', color: 'green' },
                    { id: 'padding', label: '内边距', color: 'yellow' },
                    { id: 'border', label: '边框', color: 'purple' },
                    { id: 'margin', label: '外边距', color: 'red' }
                  ].map(part => (
                    <button
                      key={part.id}
                      onClick={() => setBoxModelPart(part.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                        boxModelPart === part.id
                          ? `bg-${part.color}-500 text-white`
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {part.label}
                    </button>
                  ))}
                </div>

                {/* 盒模型可视化 */}
                <div className="bg-white rounded-xl p-8 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">盒模型可视化</h3>
                  
                  <div className="flex justify-center">
                    <div className="relative">
                      {/* 外边距 */}
                      <div className={`
                        p-8 border-4 border-dashed rounded-lg
                        ${boxModelPart === 'all' || boxModelPart === 'margin' ? 'border-red-400 bg-red-50' : 'border-transparent'}
                      `}>
                        <div className="absolute -top-6 left-4 text-sm font-medium text-red-600">
                          Margin (外边距)
                        </div>
                        
                        {/* 边框 */}
                        <div className={`
                          p-6 border-4 rounded-lg
                          ${boxModelPart === 'all' || boxModelPart === 'border' ? 'border-purple-400 bg-purple-100' : 'border-gray-300 bg-gray-50'}
                        `}>
                          <div className="absolute -top-3 left-16 text-sm font-medium text-purple-600">
                            Border (边框)
                          </div>
                          
                          {/* 内边距 */}
                          <div className={`
                            p-8 rounded-lg
                            ${boxModelPart === 'all' || boxModelPart === 'padding' ? 'bg-yellow-100 border-2 border-yellow-400' : 'bg-gray-100'}
                          `}>
                            <div className="absolute -top-1 left-28 text-sm font-medium text-yellow-600">
                              Padding (内边距)
                            </div>
                            
                            {/* 内容区域 */}
                            <div className={`
                              w-40 h-24 rounded-lg flex items-center justify-center text-sm font-medium
                              ${boxModelPart === 'all' || boxModelPart === 'content' ? 'bg-green-200 text-green-800 border-2 border-green-400' : 'bg-white text-gray-600 border border-gray-300'}
                            `}>
                              Content
                              <br />
                              (内容区域)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 尺寸说明 */}
                  <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Margin 外边距</h4>
                      <div className="text-sm text-red-700 space-y-1">
                        <div><code>m-4</code> - 全方向</div>
                        <div><code>mx-4</code> - 水平方向</div>
                        <div><code>my-4</code> - 垂直方向</div>
                        <div><code>mt-4</code> - 顶部</div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Border 边框</h4>
                      <div className="text-sm text-purple-700 space-y-1">
                        <div><code>border</code> - 1px边框</div>
                        <div><code>border-2</code> - 2px边框</div>
                        <div><code>border-red-500</code> - 边框颜色</div>
                        <div><code>rounded-lg</code> - 圆角</div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Padding 内边距</h4>
                      <div className="text-sm text-yellow-700 space-y-1">
                        <div><code>p-4</code> - 全方向</div>
                        <div><code>px-4</code> - 水平方向</div>
                        <div><code>py-4</code> - 垂直方向</div>
                        <div><code>pl-4</code> - 左侧</div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Content 内容</h4>
                      <div className="text-sm text-green-700 space-y-1">
                        <div><code>w-40</code> - 宽度</div>
                        <div><code>h-24</code> - 高度</div>
                        <div><code>text-sm</code> - 字体大小</div>
                        <div><code>bg-white</code> - 背景色</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 边框系统详解 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">边框系统详解</h3>
                  
                  <div className="space-y-6">
                    {/* 边框宽度 */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">边框宽度</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { class: 'border-0', width: '0px' },
                          { class: 'border', width: '1px' },
                          { class: 'border-2', width: '2px' },
                          { class: 'border-4', width: '4px' },
                          { class: 'border-8', width: '8px' }
                        ].map(item => (
                          <div key={item.class} className="text-center">
                            <div className={`w-16 h-16 ${item.class} border-gray-400 bg-white mx-auto mb-2`}></div>
                            <div className="text-xs font-mono">{item.class}</div>
                            <div className="text-xs text-gray-500">{item.width}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 边框样式 */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">边框样式</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { class: 'border-solid', style: 'solid' },
                          { class: 'border-dashed', style: 'dashed' },
                          { class: 'border-dotted', style: 'dotted' },
                          { class: 'border-double', style: 'double' }
                        ].map(item => (
                          <div key={item.class} className="text-center">
                            <div className={`w-16 h-16 border-2 ${item.class} border-gray-600 bg-white mx-auto mb-2`}></div>
                            <div className="text-xs font-mono">{item.class}</div>
                            <div className="text-xs text-gray-500">{item.style}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 圆角系统 */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">圆角系统</h4>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                          { class: 'rounded-none', radius: '0px' },
                          { class: 'rounded-sm', radius: '2px' },
                          { class: 'rounded', radius: '4px' },
                          { class: 'rounded-md', radius: '6px' },
                          { class: 'rounded-lg', radius: '8px' },
                          { class: 'rounded-xl', radius: '12px' },
                          { class: 'rounded-2xl', radius: '16px' },
                          { class: 'rounded-3xl', radius: '24px' },
                          { class: 'rounded-full', radius: '9999px' }
                        ].map(item => (
                          <div key={item.class} className="text-center">
                            <div className={`w-16 h-16 ${item.class} bg-blue-500 mx-auto mb-2`}></div>
                            <div className="text-xs font-mono">{item.class}</div>
                            <div className="text-xs text-gray-500">{item.radius}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 阴影系统 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">阴影系统</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {[
                      { class: 'shadow-none', name: '无阴影' },
                      { class: 'shadow-sm', name: '小阴影' },
                      { class: 'shadow', name: '标准阴影' },
                      { class: 'shadow-md', name: '中等阴影' },
                      { class: 'shadow-lg', name: '大阴影' },
                      { class: 'shadow-xl', name: '超大阴影' },
                      { class: 'shadow-2xl', name: '最大阴影' },
                      { class: 'shadow-inner', name: '内阴影' }
                    ].map(item => (
                      <div key={item.class} className="text-center">
                        <div className={`w-16 h-16 ${item.class} bg-white border border-gray-200 rounded-lg mx-auto mb-2`}></div>
                        <div className="text-xs font-mono">{item.class}</div>
                        <div className="text-xs text-gray-500">{item.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Width & Height 尺寸系统 */}
            {activeDemo === 'sizing' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Width & Height 尺寸系统</h2>
                  <p className="text-gray-600">掌握 TailwindCSS 的宽度和高度控制</p>
                </div>

                {/* 固定尺寸 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">固定尺寸系统</h3>
                  
                  <div className="space-y-6">
                    {/* 数字尺寸 */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">数字尺寸 (基于 0.25rem)</h4>
                      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                        {[1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 32].map(size => (
                          <div key={size} className="text-center">
                            <div 
                              className={`bg-blue-500 mx-auto mb-1`}
                              style={{ width: `${size * 0.25}rem`, height: `${size * 0.25}rem` }}
                            ></div>
                            <div className="text-xs font-mono">w-{size}</div>
                            <div className="text-xs text-gray-500">{size * 4}px</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 分数尺寸 */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">分数尺寸 (百分比)</h4>
                      <div className="space-y-3">
                        {[
                          { class: 'w-1/2', width: '50%', name: '二分之一' },
                          { class: 'w-1/3', width: '33.33%', name: '三分之一' },
                          { class: 'w-2/3', width: '66.67%', name: '三分之二' },
                          { class: 'w-1/4', width: '25%', name: '四分之一' },
                          { class: 'w-3/4', width: '75%', name: '四分之三' },
                          { class: 'w-1/5', width: '20%', name: '五分之一' },
                          { class: 'w-full', width: '100%', name: '全宽' }
                        ].map(item => (
                          <div key={item.class} className="flex items-center space-x-4">
                            <div className="w-24 text-xs font-mono">{item.class}</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                              <div 
                                className={`${item.class} bg-blue-500 h-4 rounded-full`}
                              ></div>
                            </div>
                            <div className="w-16 text-xs text-gray-600">{item.width}</div>
                            <div className="w-20 text-xs text-gray-500">{item.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 视口尺寸 */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">视口尺寸</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium text-gray-700 mb-2">视口宽度 (vw)</h5>
                          <ul className="text-sm space-y-1">
                            <li><code className="bg-white px-2 py-1 rounded">w-screen</code> - 100vw (全屏宽度)</li>
                            <li><code className="bg-white px-2 py-1 rounded">min-w-0</code> - min-width: 0</li>
                            <li><code className="bg-white px-2 py-1 rounded">max-w-screen-sm</code> - max-width: 640px</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium text-gray-700 mb-2">视口高度 (vh)</h5>
                          <ul className="text-sm space-y-1">
                            <li><code className="bg-white px-2 py-1 rounded">h-screen</code> - 100vh (全屏高度)</li>
                            <li><code className="bg-white px-2 py-1 rounded">min-h-screen</code> - min-height: 100vh</li>
                            <li><code className="bg-white px-2 py-1 rounded">max-h-screen</code> - max-height: 100vh</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 响应式尺寸 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">响应式尺寸</h3>
                  
                  <div className="space-y-6">
                    {/* 响应式宽度示例 */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">响应式宽度示例</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-2">
                            <code>w-full md:w-1/2 lg:w-1/3</code> - 手机全宽，平板半宽，桌面三分之一
                          </p>
                          <div className="bg-gray-200 rounded-lg p-4">
                            <div className="w-full md:w-1/2 lg:w-1/3 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"></div>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm text-gray-600 mb-2">
                            <code>w-48 md:w-64 lg:w-80</code> - 固定尺寸的响应式变化
                          </p>
                          <div className="bg-gray-200 rounded-lg p-4">
                            <div className="w-48 md:w-64 lg:w-80 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg"></div>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm text-gray-600 mb-2">
                            <code>max-w-sm md:max-w-lg lg:max-w-2xl mx-auto</code> - 响应式最大宽度
                          </p>
                          <div className="bg-gray-200 rounded-lg p-4">
                            <div className="max-w-sm md:max-w-lg lg:max-w-2xl mx-auto h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 高度控制 */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">高度控制示例</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="h-32 bg-blue-100 rounded-lg mb-2 flex items-center justify-center">
                            <span className="text-blue-800 font-medium">h-32</span>
                          </div>
                          <p className="text-xs text-gray-500">128px 高度</p>
                        </div>
                        <div className="text-center">
                          <div className="h-40 bg-green-100 rounded-lg mb-2 flex items-center justify-center">
                            <span className="text-green-800 font-medium">h-40</span>
                          </div>
                          <p className="text-xs text-gray-500">160px 高度</p>
                        </div>
                        <div className="text-center">
                          <div className="h-48 bg-purple-100 rounded-lg mb-2 flex items-center justify-center">
                            <span className="text-purple-800 font-medium">h-48</span>
                          </div>
                          <p className="text-xs text-gray-500">192px 高度</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 尺寸约束 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">尺寸约束系统</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* 最小尺寸 */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">最小尺寸 (min-width/min-height)</h4>
                      <div className="space-y-3">
                        <div className="bg-gray-100 p-3 rounded">
                          <div className="min-w-full bg-blue-500 h-8 rounded mb-1"></div>
                          <code className="text-xs">min-w-full</code>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <div className="w-20 min-h-24 bg-green-500 rounded mb-1"></div>
                          <code className="text-xs">min-h-24</code>
                        </div>
                      </div>
                    </div>

                    {/* 最大尺寸 */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">最大尺寸 (max-width/max-height)</h4>
                      <div className="space-y-3">
                        <div className="bg-gray-100 p-3 rounded">
                          <div className="w-full max-w-xs bg-purple-500 h-8 rounded mb-1"></div>
                          <code className="text-xs">max-w-xs (限制最大宽度)</code>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <div className="w-20 h-32 max-h-16 bg-red-500 rounded mb-1"></div>
                          <code className="text-xs">max-h-16 (限制最大高度)</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 尺寸对照表 */}
                <div className="bg-gray-50 rounded-xl p-6 border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">完整尺寸对照表</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">固定尺寸</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>w-0 = 0px</li>
                        <li>w-px = 1px</li>
                        <li>w-1 = 4px (0.25rem)</li>
                        <li>w-4 = 16px (1rem)</li>
                        <li>w-8 = 32px (2rem)</li>
                        <li>w-16 = 64px (4rem)</li>
                        <li>w-32 = 128px (8rem)</li>
                        <li>w-64 = 256px (16rem)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">相对尺寸</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>w-1/2 = 50%</li>
                        <li>w-1/3 = 33.333333%</li>
                        <li>w-2/3 = 66.666667%</li>
                        <li>w-1/4 = 25%</li>
                        <li>w-3/4 = 75%</li>
                        <li>w-1/5 = 20%</li>
                        <li>w-full = 100%</li>
                        <li>w-screen = 100vw</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">约束尺寸</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>max-w-xs = 320px</li>
                        <li>max-w-sm = 384px</li>
                        <li>max-w-md = 448px</li>
                        <li>max-w-lg = 512px</li>
                        <li>max-w-xl = 576px</li>
                        <li>max-w-2xl = 672px</li>
                        <li>max-w-4xl = 896px</li>
                        <li>max-w-none = none</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 实战案例 */}
            {activeDemo === 'examples' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Container 和 Box Model 实战案例</h2>
                  <p className="text-gray-600">通过实际项目案例学习容器和盒模型的应用</p>
                </div>

                {/* 经典网站布局 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">经典网站布局</h3>
                  
                  <div className="border border-gray-300 rounded-lg overflow-hidden">
                    {/* Header */}
                    <header className="bg-gray-800 text-white">
                      <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                          <div className="text-xl font-bold">Logo</div>
                          <nav className="hidden md:flex space-x-6">
                            <a href="#" className="hover:text-gray-300">首页</a>
                            <a href="#" className="hover:text-gray-300">产品</a>
                            <a href="#" className="hover:text-gray-300">关于</a>
                            <a href="#" className="hover:text-gray-300">联系</a>
                          </nav>
                        </div>
                      </div>
                    </header>

                    {/* Hero Section */}
                    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
                      <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                          欢迎来到我们的网站
                        </h1>
                        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                          这是一个使用 Container 和响应式设计构建的现代网站
                        </p>
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                          开始探索
                        </button>
                      </div>
                    </section>

                    {/* Content */}
                    <section className="py-16">
                      <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4"></div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">特性 {i}</h3>
                              <p className="text-gray-600">
                                这是特性的详细描述，展示了如何使用容器和间距系统。
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>

                    {/* Footer */}
                    <footer className="bg-gray-900 text-white py-8">
                      <div className="container mx-auto px-4 text-center">
                        <p>&copy; 2024 公司名称. 保留所有权利.</p>
                      </div>
                    </footer>
                  </div>

                  <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">布局关键技术：</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• <code>container mx-auto px-4</code> - 响应式容器，自动居中，添加水平内边距</li>
                      <li>• <code>py-16</code> - 垂直区块间距，创建良好的视觉层次</li>
                      <li>• <code>grid md:grid-cols-2 lg:grid-cols-3 gap-8</code> - 响应式网格布局</li>
                      <li>• <code>max-w-2xl mx-auto</code> - 限制文本行长度，提高可读性</li>
                    </ul>
                  </div>
                </div>

                {/* 卡片网格系统 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">响应式卡片网格</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                      <div key={i} className="group">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                          {/* 图片区域 */}
                          <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative">
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                          </div>
                          
                          {/* 内容区域 */}
                          <div className="p-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                              产品 {i}
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                              这是产品的简短描述，展示了卡片的内容区域设计。
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-2xl font-bold text-gray-900">¥{99 + i * 10}</span>
                              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                                购买
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">卡片系统设计要点：</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• <code>grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4</code> - 4档响应式网格</li>
                      <li>• <code>overflow-hidden</code> - 确保圆角效果完整</li>
                      <li>• <code>group hover:scale-105</code> - 整体卡片缩放效果</li>
                      <li>• <code>transition-all duration-300</code> - 平滑过渡动画</li>
                      <li>• <code>p-6</code> - 统一的内容区域内边距</li>
                    </ul>
                  </div>
                </div>

                {/* 表单布局案例 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">表单布局设计</h3>
                  
                  <div className="max-w-2xl mx-auto">
                    <form className="space-y-6">
                      {/* 个人信息区块 */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">个人信息</h4>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              姓名 *
                            </label>
                            <input 
                              type="text" 
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                              placeholder="请输入姓名"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              邮箱 *
                            </label>
                            <input 
                              type="email" 
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                              placeholder="请输入邮箱"
                            />
                          </div>
                        </div>

                        <div className="mt-6">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            电话号码
                          </label>
                          <input 
                            type="tel" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="请输入电话号码"
                          />
                        </div>
                      </div>

                      {/* 地址信息区块 */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">地址信息</h4>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              详细地址
                            </label>
                            <textarea 
                              rows={3}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                              placeholder="请输入详细地址"
                            ></textarea>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                省份
                              </label>
                              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option>请选择省份</option>
                                <option>北京</option>
                                <option>上海</option>
                                <option>广东</option>
                              </select>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                城市
                              </label>
                              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option>请选择城市</option>
                              </select>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                邮编
                              </label>
                              <input 
                                type="text" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                placeholder="邮编"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 提交按钮 */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <button 
                          type="submit"
                          className="flex-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          提交表单
                        </button>
                        <button 
                          type="button"
                          className="flex-1 sm:flex-none border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                        >
                          重置
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="mt-6 bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">表单设计原则：</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• <code>max-w-2xl mx-auto</code> - 限制表单最大宽度，提高可读性</li>
                      <li>• <code>space-y-6</code> - 统一的垂直间距</li>
                      <li>• <code>bg-gray-50 rounded-xl p-6</code> - 区块分组，增强视觉层次</li>
                      <li>• <code>grid md:grid-cols-2 gap-6</code> - 响应式字段布局</li>
                      <li>• <code>focus:ring-2 focus:ring-blue-500</code> - 一致的焦点状态</li>
                    </ul>
                  </div>
                </div>

                {/* 最佳实践总结 */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl p-8">
                  <h3 className="text-xl font-semibold mb-6 text-center">🎯 Container 和 Box Model 最佳实践</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-300 mb-3">容器使用原则</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• 页面级容器使用 container mx-auto</li>
                        <li>• 内容区域添加 px-4 md:px-8 内边距</li>
                        <li>• 限制文本行长度 max-w-2xl mx-auto</li>
                        <li>• 大屏幕限制宽度 max-w-6xl</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-green-300 mb-3">盒模型规范</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• 统一使用 p-4, p-6, p-8 内边距</li>
                        <li>• 区块间距使用 space-y-6, space-y-8</li>
                        <li>• 边框配合圆角 border rounded-lg</li>
                        <li>• 阴影层次 shadow-sm → shadow-lg</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-300 mb-3">响应式策略</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• 移动优先 w-full md:w-1/2</li>
                        <li>• 渐进增强 px-4 md:px-8 lg:px-12</li>
                        <li>• 网格适配 grid-cols-1 md:grid-cols-2</li>
                        <li>• 弹性布局 flex-col md:flex-row</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-gray-300">
                      掌握这些基础概念，你就能构建出结构清晰、响应式友好的现代网页布局
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}