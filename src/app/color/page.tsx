"use client"
import { useState } from 'react'

export default function ColorSpacingSystems() {
  const [activeTab, setActiveTab] = useState('colors')
  const [selectedColor, setSelectedColor] = useState('blue')
  const [spacingDemo, setSpacingDemo] = useState('padding')

  // TailwindCSS 颜色调色板
  const colorPalettes = {
    gray: {
      50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db', 400: '#9ca3af',
      500: '#6b7280', 600: '#4b5563', 700: '#374151', 800: '#1f2937', 900: '#111827'
    },
    red: {
      50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5', 400: '#f87171',
      500: '#ef4444', 600: '#dc2626', 700: '#b91c1c', 800: '#991b1b', 900: '#7f1d1d'
    },
    blue: {
      50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa',
      500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a'
    },
    green: {
      50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac', 400: '#4ade80',
      500: '#22c55e', 600: '#16a34a', 700: '#15803d', 800: '#166534', 900: '#14532d'
    },
    purple: {
      50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe', 400: '#c084fc',
      500: '#a855f7', 600: '#9333ea', 700: '#7c3aed', 800: '#6b21a8', 900: '#581c87'
    },
    yellow: {
      50: '#fefce8', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d', 400: '#fbbf24',
      500: '#f59e0b', 600: '#d97706', 700: '#b45309', 800: '#92400e', 900: '#78350f'
    }
  }

  // 间距系统映射
  const spacingSystem = {
    '0': '0px',
    'px': '1px',
    '0.5': '0.125rem', // 2px
    '1': '0.25rem',    // 4px
    '1.5': '0.375rem', // 6px
    '2': '0.5rem',     // 8px
    '2.5': '0.625rem', // 10px
    '3': '0.75rem',    // 12px
    '3.5': '0.875rem', // 14px
    '4': '1rem',       // 16px
    '5': '1.25rem',    // 20px
    '6': '1.5rem',     // 24px
    '7': '1.75rem',    // 28px
    '8': '2rem',       // 32px
    '9': '2.25rem',    // 36px
    '10': '2.5rem',    // 40px
    '11': '2.75rem',   // 44px
    '12': '3rem',      // 48px
    '14': '3.5rem',    // 56px
    '16': '4rem',      // 64px
    '20': '5rem',      // 80px
    '24': '6rem',      // 96px
    '28': '7rem',      // 112px
    '32': '8rem',      // 128px
    '36': '9rem',      // 144px
    '40': '10rem',     // 160px
    '44': '11rem',     // 176px
    '48': '12rem',     // 192px
    '52': '13rem',     // 208px
    '56': '14rem',     // 224px
    '60': '15rem',     // 240px
    '64': '16rem',     // 256px
    '72': '18rem',     // 288px
    '80': '20rem',     // 320px
    '96': '24rem'      // 384px
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            TailwindCSS 颜色系统 & 间距系统
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            掌握设计系统的核心：科学的颜色调色板和数学化的间距体系
          </p>
        </div>

        {/* 标签页导航 */}
        <div className="bg-white rounded-xl shadow-sm border mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {[
                { id: 'colors', label: '颜色系统', icon: '🎨' },
                { id: 'spacing', label: '间距系统', icon: '📏' },
                { id: 'examples', label: '实战应用', icon: '💼' },
                { id: 'custom', label: '自定义配置', icon: '⚙️' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab.id
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
            {/* 颜色系统 */}
            {activeTab === 'colors' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">颜色系统详解</h2>
                  <p className="text-gray-600">TailwindCSS 使用 50-900 的数字体系创建一致的颜色调色板</p>
                </div>

                {/* 颜色选择器 */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {Object.keys(colorPalettes).map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        selectedColor === color
                          ? 'bg-gray-800 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </button>
                  ))}
                </div>

                {/* 选中颜色的调色板 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 capitalize">{selectedColor} 调色板</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-3 mb-6">
                    {Object.entries(colorPalettes[selectedColor]).map(([shade, hexValue]) => (
                      <div key={shade} className="text-center">
                        <div 
                          className="w-full h-20 rounded-lg mb-2 shadow-sm border border-gray-200 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                          style={{ backgroundColor: hexValue }}
                          onClick={() => navigator.clipboard.writeText(hexValue)}
                          title={`点击复制 ${hexValue}`}
                        >
                          {parseInt(shade) >= 600 && (
                            <span className="text-white text-xs font-medium">{shade}</span>
                          )}
                          {parseInt(shade) < 600 && (
                            <span className="text-gray-700 text-xs font-medium">{shade}</span>
                          )}
                        </div>
                        <div className="text-xs font-medium text-gray-700">{selectedColor}-{shade}</div>
                        <div className="text-xs text-gray-500 font-mono">{hexValue}</div>
                      </div>
                    ))}
                  </div>

                  {/* 使用示例 */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800">使用示例：</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {/* 背景色示例 */}
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium text-gray-700">背景色 (bg-)</h5>
                        <div className={`bg-${selectedColor}-100 p-3 rounded-lg`}>
                          <code className="text-xs">bg-{selectedColor}-100</code>
                        </div>
                        <div className={`bg-${selectedColor}-500 p-3 rounded-lg text-white`}>
                          <code className="text-xs">bg-{selectedColor}-500</code>
                        </div>
                        <div className={`bg-${selectedColor}-800 p-3 rounded-lg text-white`}>
                          <code className="text-xs">bg-{selectedColor}-800</code>
                        </div>
                      </div>

                      {/* 文字色示例 */}
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium text-gray-700">文字色 (text-)</h5>
                        <div className={`text-${selectedColor}-400 p-3 bg-gray-50 rounded-lg`}>
                          <code className="text-xs">text-{selectedColor}-400</code>
                        </div>
                        <div className={`text-${selectedColor}-600 p-3 bg-gray-50 rounded-lg`}>
                          <code className="text-xs">text-{selectedColor}-600</code>
                        </div>
                        <div className={`text-${selectedColor}-800 p-3 bg-gray-50 rounded-lg`}>
                          <code className="text-xs">text-{selectedColor}-800</code>
                        </div>
                      </div>

                      {/* 边框色示例 */}
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium text-gray-700">边框色 (border-)</h5>
                        <div className={`border-2 border-${selectedColor}-200 p-3 rounded-lg bg-white`}>
                          <code className="text-xs">border-{selectedColor}-200</code>
                        </div>
                        <div className={`border-2 border-${selectedColor}-500 p-3 rounded-lg bg-white`}>
                          <code className="text-xs">border-{selectedColor}-500</code>
                        </div>
                        <div className={`border-2 border-${selectedColor}-700 p-3 rounded-lg bg-white`}>
                          <code className="text-xs">border-{selectedColor}-700</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 颜色使用指南 */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🎨 颜色使用指南</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">亮色调 (50-400)</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>50-100:</strong> 背景色、卡片背景</li>
                        <li>• <strong>200-300:</strong> 边框、分割线</li>
                        <li>• <strong>400:</strong> 占位符文字、禁用状态</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">深色调 (500-900)</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>500-600:</strong> 主要按钮、链接</li>
                        <li>• <strong>700-800:</strong> 标题、重要文字</li>
                        <li>• <strong>900:</strong> 强调文字、深色主题</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 颜色组合示例 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">常见颜色组合</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* 主题色组合 */}
                    <div className="bg-blue-500 p-6 rounded-xl text-white">
                      <h4 className="font-semibold mb-2">主题色组合</h4>
                      <p className="text-blue-100 text-sm mb-3">bg-blue-500 + text-white</p>
                      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm transition-colors">
                        按钮
                      </button>
                    </div>

                    {/* 成功状态 */}
                    <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                      <h4 className="font-semibold text-green-800 mb-2">成功状态</h4>
                      <p className="text-green-600 text-sm mb-3">bg-green-50 + border-green-200</p>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        成功
                      </span>
                    </div>

                    {/* 警告状态 */}
                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                      <h4 className="font-semibold text-yellow-800 mb-2">警告状态</h4>
                      <p className="text-yellow-600 text-sm mb-3">bg-yellow-50 + border-yellow-200</p>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                        警告
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 间距系统 */}
            {activeTab === 'spacing' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">间距系统详解</h2>
                  <p className="text-gray-600">基于 0.25rem (4px) 的数学化间距体系，确保视觉一致性</p>
                </div>

                {/* 间距类型选择 */}
                <div className="flex justify-center space-x-4 mb-6">
                  {[
                    { id: 'padding', label: 'Padding 内边距' },
                    { id: 'margin', label: 'Margin 外边距' },
                    { id: 'space', label: 'Space 子元素间距' },
                    { id: 'gap', label: 'Gap 网格间距' }
                  ].map(type => (
                    <button
                      key={type.id}
                      onClick={() => setSpacingDemo(type.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                        spacingDemo === type.id
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>

                {/* 间距对照表 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">间距对照表</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b bg-gray-50">
                          <th className="text-left py-3 px-4">类名</th>
                          <th className="text-left py-3 px-4">数值 (rem)</th>
                          <th className="text-left py-3 px-4">像素值</th>
                          <th className="text-left py-3 px-4">使用场景</th>
                          <th className="text-left py-3 px-4">视觉示例</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { key: '0', rem: '0rem', px: '0px', usage: '重置间距' },
                          { key: 'px', rem: '1px', px: '1px', usage: '分割线' },
                          { key: '1', rem: '0.25rem', px: '4px', usage: '微小间距' },
                          { key: '2', rem: '0.5rem', px: '8px', usage: '小间距' },
                          { key: '3', rem: '0.75rem', px: '12px', usage: '文字间距' },
                          { key: '4', rem: '1rem', px: '16px', usage: '基础间距' },
                          { key: '6', rem: '1.5rem', px: '24px', usage: '中等间距' },
                          { key: '8', rem: '2rem', px: '32px', usage: '大间距' },
                          { key: '12', rem: '3rem', px: '48px', usage: '区块间距' },
                          { key: '16', rem: '4rem', px: '64px', usage: '大区块间距' },
                          { key: '24', rem: '6rem', px: '96px', usage: '页面级间距' }
                        ].map(item => (
                          <tr key={item.key} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-mono bg-gray-100 text-gray-800">
                              {spacingDemo}-{item.key}
                            </td>
                            <td className="py-3 px-4 font-mono text-gray-600">{item.rem}</td>
                            <td className="py-3 px-4 font-mono text-gray-600">{item.px}</td>
                            <td className="py-3 px-4 text-gray-700">{item.usage}</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <div 
                                  className="bg-blue-200 border-2 border-blue-400"
                                  style={{
                                    width: '20px',
                                    height: '20px',
                                    [spacingDemo]: spacingSystem[item.key]
                                  }}
                                ></div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 不同间距类型的演示 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {spacingDemo === 'padding' && 'Padding 内边距演示'}
                    {spacingDemo === 'margin' && 'Margin 外边距演示'}
                    {spacingDemo === 'space' && 'Space 子元素间距演示'}
                    {spacingDemo === 'gap' && 'Gap 网格间距演示'}
                  </h3>

                  {/* Padding 演示 */}
                  {spacingDemo === 'padding' && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {['2', '4', '6', '8'].map(size => (
                          <div key={size} className="text-center">
                            <div className="bg-blue-100 border-2 border-dashed border-blue-300 inline-block">
                              <div className={`bg-blue-500 text-white p-${size} text-sm font-medium`}>
                                p-{size}
                              </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">padding: {spacingSystem[size]}</p>
                          </div>
                        ))}
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">方向性内边距：</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                          <div className="bg-white p-3 rounded border">
                            <code>pt-4</code> - 上内边距
                          </div>
                          <div className="bg-white p-3 rounded border">
                            <code>pr-4</code> - 右内边距
                          </div>
                          <div className="bg-white p-3 rounded border">
                            <code>pb-4</code> - 下内边距
                          </div>
                          <div className="bg-white p-3 rounded border">
                            <code>pl-4</code> - 左内边距
                          </div>
                          <div className="bg-white p-3 rounded border">
                            <code>px-4</code> - 水平内边距
                          </div>
                          <div className="bg-white p-3 rounded border">
                            <code>py-4</code> - 垂直内边距
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Margin 演示 */}
                  {spacingDemo === 'margin' && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {['2', '4', '6', '8'].map(size => (
                          <div key={size} className="text-center">
                            <div className="bg-gray-100 p-4 border-2 border-dashed border-gray-300">
                              <div className={`bg-green-500 text-white px-3 py-2 m-${size} text-sm font-medium inline-block`}>
                                m-{size}
                              </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">margin: {spacingSystem[size]}</p>
                          </div>
                        ))}
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">特殊外边距值：</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                          <div className="bg-white p-3 rounded border">
                            <code>m-auto</code> - 自动居中
                          </div>
                          <div className="bg-white p-3 rounded border">
                            <code>-m-4</code> - 负外边距
                          </div>
                          <div className="bg-white p-3 rounded border">
                            <code>mx-auto</code> - 水平居中
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Space 演示 */}
                  {spacingDemo === 'space' && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        {['2', '4', '6', '8'].map(size => (
                          <div key={size}>
                            <h4 className="text-sm font-medium text-gray-700 mb-2">space-y-{size}</h4>
                            <div className={`space-y-${size} bg-gray-50 p-4 rounded-lg`}>
                              <div className="bg-purple-500 text-white px-3 py-2 rounded text-sm">第一个元素</div>
                              <div className="bg-purple-500 text-white px-3 py-2 rounded text-sm">第二个元素</div>
                              <div className="bg-purple-500 text-white px-3 py-2 rounded text-sm">第三个元素</div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">间距: {spacingSystem[size]}</p>
                          </div>
                        ))}
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Space 类型：</h4>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="bg-white p-3 rounded border">
                            <code>space-x-4</code> - 水平间距
                          </div>
                          <div className="bg-white p-3 rounded border">
                            <code>space-y-4</code> - 垂直间距
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Gap 演示 */}
                  {spacingDemo === 'gap' && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        {['2', '4', '6', '8'].map(size => (
                          <div key={size}>
                            <h4 className="text-sm font-medium text-gray-700 mb-2">gap-{size}</h4>
                            <div className={`grid grid-cols-3 gap-${size} bg-gray-50 p-4 rounded-lg`}>
                              <div className="bg-orange-500 text-white px-3 py-2 rounded text-sm text-center">1</div>
                              <div className="bg-orange-500 text-white px-3 py-2 rounded text-sm text-center">2</div>
                              <div className="bg-orange-500 text-white px-3 py-2 rounded text-sm text-center">3</div>
                              <div className="bg-orange-500 text-white px-3 py-2 rounded text-sm text-center">4</div>
                              <div className="bg-orange-500 text-white px-3 py-2 rounded text-sm text-center">5</div>
                              <div className="bg-orange-500 text-white px-3 py-2 rounded text-sm text-center">6</div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">网格间距: {spacingSystem[size]}</p>
                          </div>
                        ))}
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Gap 类型：</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                          <div className="bg-white p-3 rounded border">
                            <code>gap-4</code> - 全方向间距
                          </div>
                          <div className="bg-white p-3 rounded border">
                            <code>gap-x-4</code> - 水平间距
                          </div>
                          <div className="bg-white p-3 rounded border">
                            <code>gap-y-4</code> - 垂直间距
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 间距系统最佳实践 */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">📏 间距系统最佳实践</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">常用间距搭配</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>按钮内边距:</strong> px-4 py-2 或 px-6 py-3</li>
                        <li>• <strong>卡片内边距:</strong> p-4 或 p-6</li>
                        <li>• <strong>页面边距:</strong> px-4 md:px-8</li>
                        <li>• <strong>元素间距:</strong> space-y-4 或 gap-4</li>
                        <li>• <strong>标题下方:</strong> mb-4 或 mb-6</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">响应式间距</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>容器:</strong> px-4 md:px-8 lg:px-12</li>
                        <li>• <strong>区块间距:</strong> py-8 md:py-12 lg:py-16</li>
                        <li>• <strong>网格间距:</strong> gap-4 md:gap-6 lg:gap-8</li>
                        <li>• <strong>文字间距:</strong> space-y-2 md:space-y-4</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 实战应用 */}
            {activeTab === 'examples' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">颜色 + 间距实战应用</h2>
                  <p className="text-gray-600">通过实际案例学习颜色和间距系统的综合运用</p>
                </div>

                {/* 按钮组件库 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">按钮组件系统</h3>
                  
                  <div className="space-y-6">
                    {/* 主要按钮 */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">主要按钮 (不同尺寸)</h4>
                      <div className="flex flex-wrap items-center gap-3">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors">
                          小按钮 (px-3 py-1)
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
                          标准按钮 (px-4 py-2)
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
                          大按钮 (px-6 py-3)
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg transition-colors">
                          超大按钮 (px-8 py-4)
                        </button>
                      </div>
                    </div>

                    {/* 不同状态按钮 */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">不同状态按钮</h4>
                      <div className="flex flex-wrap gap-3">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
                          主要
                        </button>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors">
                          成功
                        </button>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition-colors">
                          警告
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors">
                          危险
                        </button>
                        <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors">
                          默认
                        </button>
                      </div>
                    </div>

                    {/* 轮廓按钮 */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">轮廓按钮</h4>
                      <div className="flex flex-wrap gap-3">
                        <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition-colors">
                          主要轮廓
                        </button>
                        <button className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded transition-colors">
                          成功轮廓
                        </button>
                        <button className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded transition-colors">
                          危险轮廓
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">按钮设计原则：</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 使用 500-600 作为主色，600-700 作为悬停色</li>
                      <li>• 小按钮 px-3 py-1，标准 px-4 py-2，大按钮 px-6 py-3</li>
                      <li>• 添加 transition-colors 实现平滑过渡</li>
                      <li>• 保持圆角一致性 (rounded 或 rounded-lg)</li>
                    </ul>
                  </div>
                </div>

                {/* 卡片组件系统 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">卡片组件系统</h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* 基础卡片 */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">基础卡片</h4>
                      <p className="text-gray-600 text-sm mb-4">
                        白色背景，浅色边框，适中内边距
                      </p>
                      <div className="text-xs text-gray-500 font-mono bg-gray-100 p-2 rounded">
                        bg-white p-6 border border-gray-200
                      </div>
                    </div>

                    {/* 悬停卡片 */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">悬停效果卡片</h4>
                      <p className="text-gray-600 text-sm mb-4">
                        鼠标悬停时增强阴影和边框
                      </p>
                      <div className="text-xs text-gray-500 font-mono bg-gray-100 p-2 rounded">
                        hover:shadow-md hover:border-gray-300
                      </div>
                    </div>

                    {/* 彩色卡片 */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200 p-6">
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">彩色卡片</h4>
                      <p className="text-blue-700 text-sm mb-4">
                        渐变背景，主题色边框
                      </p>
                      <div className="text-xs text-blue-600 font-mono bg-white/60 p-2 rounded">
                        bg-gradient-to-br from-blue-50
                      </div>
                    </div>
                  </div>
                </div>

                {/* 表单组件系统 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">表单组件系统</h3>
                  
                  <div className="max-w-2xl space-y-6">
                    {/* 基础输入框 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        基础输入框
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="请输入内容"
                      />
                      <p className="text-xs text-gray-500 mt-1 font-mono">
                        px-4 py-3 + focus:ring-2 focus:ring-blue-500
                      </p>
                    </div>

                    {/* 成功状态 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        成功状态
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border-2 border-green-300 bg-green-50 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-green-900"
                        value="输入正确"
                        readOnly
                      />
                      <p className="text-green-600 text-sm mt-1">✓ 验证通过</p>
                    </div>

                    {/* 错误状态 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        错误状态
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border-2 border-red-300 bg-red-50 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-red-900 placeholder-red-400"
                        placeholder="有错误的输入"
                      />
                      <p className="text-red-600 text-sm mt-1">✗ 请输入有效内容</p>
                    </div>

                    {/* 选择框组合 */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          下拉选择
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option>选项 1</option>
                          <option>选项 2</option>
                          <option>选项 3</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          文本域
                        </label>
                        <textarea 
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          placeholder="请输入详细内容..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 通知组件系统 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">通知组件系统</h3>
                  
                  <div className="space-y-4">
                    {/* 信息通知 */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full mr-3"></div>
                        <div>
                          <h4 className="font-medium text-blue-800">信息提示</h4>
                          <p className="text-blue-700 text-sm">这是一条重要的信息通知</p>
                        </div>
                      </div>
                    </div>

                    {/* 成功通知 */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                        <div>
                          <h4 className="font-medium text-green-800">操作成功</h4>
                          <p className="text-green-700 text-sm">您的操作已成功完成</p>
                        </div>
                      </div>
                    </div>

                    {/* 警告通知 */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full mr-3"></div>
                        <div>
                          <h4 className="font-medium text-yellow-800">注意警告</h4>
                          <p className="text-yellow-700 text-sm">请注意这个重要警告信息</p>
                        </div>
                      </div>
                    </div>

                    {/* 错误通知 */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-red-500 rounded-full mr-3"></div>
                        <div>
                          <h4 className="font-medium text-red-800">错误提示</h4>
                          <p className="text-red-700 text-sm">操作失败，请重试</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">通知系统设计模式：</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>背景:</strong> 使用 50 色调 (blue-50, green-50...)</li>
                      <li>• <strong>边框:</strong> 使用 200 色调 (blue-200, green-200...)</li>
                      <li>• <strong>文字:</strong> 使用 700-800 色调增强对比度</li>
                      <li>• <strong>间距:</strong> p-4 内边距，mr-3 图标间距</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 自定义配置 */}
            {activeTab === 'custom' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">自定义颜色和间距配置</h2>
                  <p className="text-gray-600">学习如何扩展和定制 TailwindCSS 的设计系统</p>
                </div>

                {/* 自定义颜色配置 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">自定义颜色配置</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                      <div className="text-green-400 mb-2">// tailwind.config.js</div>
                      <pre>{`module.exports = {
  theme: {
    extend: {
      colors: {
        // 添加品牌色
        brand: {
          50: '#eff6ff',
          100: '#dbeafe', 
          500: '#3b82f6',
          900: '#1e3a8a'
        },
        
        // 添加自定义颜色
        'custom-blue': '#1fb6ff',
        'custom-purple': '#7e5bef',
        'custom-pink': '#ff49db',
        'custom-orange': '#ff7849',
        'custom-green': '#13ce66',
        
        // 覆盖默认颜色
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          // ... 其他色调
        }
      }
    }
  }
}`}</pre>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-blue-500 p-4 rounded-lg text-white text-center">
                        <div className="font-semibold">brand-500</div>
                        <div className="text-xs opacity-80">#3b82f6</div>
                      </div>
                      <div style={{backgroundColor: '#1fb6ff'}} className="p-4 rounded-lg text-white text-center">
                        <div className="font-semibold">custom-blue</div>
                        <div className="text-xs opacity-80">#1fb6ff</div>
                      </div>
                      <div style={{backgroundColor: '#7e5bef'}} className="p-4 rounded-lg text-white text-center">
                        <div className="font-semibold">custom-purple</div>
                        <div className="text-xs opacity-80">#7e5bef</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 自定义间距配置 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">自定义间距配置</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                      <div className="text-green-400 mb-2">// tailwind.config.js</div>
                      <pre>{`module.exports = {
  theme: {
    extend: {
      spacing: {
        // 添加自定义间距
        '18': '4.5rem',    // 72px
        '88': '22rem',     // 352px
        '128': '32rem',    // 512px
        
        // 添加小数间距
        '1.5': '0.375rem', // 6px
        '2.5': '0.625rem', // 10px
        '3.5': '0.875rem', // 14px
        
        // 添加特殊尺寸
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      }
    }
  }
}`}</pre>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-800">自定义间距示例：</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="text-center">
                          <div className="bg-purple-200 border-2 border-dashed border-purple-400 p-2">
                            <div className="bg-purple-500 text-white p-1.5 text-xs">p-1.5</div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">6px</div>
                        </div>
                        <div className="text-center">
                          <div className="bg-purple-200 border-2 border-dashed border-purple-400 p-2">
                            <div className="bg-purple-500 text-white p-18 text-xs flex items-center justify-center">p-18</div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">72px</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CSS 变量集成 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">CSS 变量集成</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                      <div className="text-green-400 mb-2">// globals.css</div>
                      <pre>{`:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --spacing-xs: 0.5rem;
  --spacing-sm: 0.75rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
}

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)', 
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
      }
    }
  }
}`}</pre>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">CSS 变量的优势：</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• 运行时动态修改颜色和间距</li>
                        <li>• 支持主题切换功能</li>
                        <li>• 可以通过 JavaScript 动态控制</li>
                        <li>• 减少 CSS 打包体积</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 完整配置示例 */}
                <div className="bg-gray-800 text-white rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">🚀 完整配置示例</h3>
                  
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="text-green-400 mb-2">// 企业级 tailwind.config.js 示例</div>
                      <pre className="text-gray-300 overflow-x-auto">{`module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 品牌色系
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a'
        },
        // 功能色系  
        success: '#10b981',
        warning: '#f59e0b', 
        danger: '#ef4444',
        info: '#3b82f6'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}`}</pre>
                    </div>
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