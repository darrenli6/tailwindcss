"use client"
import { useState } from 'react'

export default function UtilityFirstConcept() {
  const [activeTab, setActiveTab] = useState('comparison')
  const [showCode, setShowCode] = useState({
    traditional: false,
    utility: false,
    component: false
  })

  const toggleCode = (type) => {
    setShowCode(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Utility-First 设计理念
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            一种全新的 CSS 架构思维：使用小而专一的工具类来构建界面，而不是预先设计好的组件
          </p>
        </div>

        {/* 标签页导航 */}
        <div className="bg-white rounded-xl shadow-sm border mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {[
                { id: 'comparison', label: '对比演示', icon: '⚖️' },
                { id: 'philosophy', label: '设计理念', icon: '💡' },
                { id: 'benefits', label: '优势分析', icon: '🚀' },
                { id: 'examples', label: '实际案例', icon: '📝' }
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
            {/* 对比演示 */}
            {activeTab === 'comparison' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">传统 CSS vs Utility-First</h2>
                  <p className="text-gray-600">通过实际代码对比理解两种方法的差异</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* 传统 CSS 方法 */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-red-600 flex items-center">
                      <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                      传统 CSS 方法
                    </h3>
                    
                    {/* 传统方法的卡片示例 */}
                    <div style={{
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                      padding: '24px',
                      border: '1px solid #e5e7eb'
                    }}>
                      <h4 style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: '#1f2937',
                        marginBottom: '8px'
                      }}>
                        用户卡片
                      </h4>
                      <p style={{
                        color: '#6b7280',
                        marginBottom: '16px'
                      }}>
                        这是一个用传统 CSS 类名构建的卡片
                      </p>
                      <button style={{
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        border: 'none',
                        cursor: 'pointer'
                      }}>
                        查看详情
                      </button>
                    </div>

                    <button 
                      onClick={() => toggleCode('traditional')}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      {showCode.traditional ? '隐藏代码' : '查看代码'}
                    </button>

                    {showCode.traditional && (
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                        <div className="mb-4">
                          <div className="text-green-400 mb-2">/* CSS 文件 */</div>
                          <pre>{`.user-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 24px;
  border: 1px solid #e5e7eb;
}

.user-card-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;
}

.user-card-description {
  color: #6b7280;
  margin-bottom: 16px;
}

.user-card-button {
  background-color: #3b82f6;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

.user-card-button:hover {
  background-color: #2563eb;
}`}</pre>
                        </div>
                        <div>
                          <div className="text-yellow-400 mb-2">/* HTML */</div>
                          <pre>{`<div class="user-card">
  <h4 class="user-card-title">用户卡片</h4>
  <p class="user-card-description">
    这是一个用传统 CSS 类名构建的卡片
  </p>
  <button class="user-card-button">查看详情</button>
</div>`}</pre>
                        </div>
                      </div>
                    )}

                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 mb-2">传统方法的问题：</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• 需要为每个组件编写自定义 CSS</li>
                        <li>• 类名命名困难，容易冲突</li>
                        <li>• CSS 文件越来越大，难以维护</li>
                        <li>• 样式复用性差</li>
                        <li>• 修改样式需要在多个文件间跳转</li>
                      </ul>
                    </div>
                  </div>

                  {/* Utility-First 方法 */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-600 flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                      Utility-First 方法
                    </h3>
                    
                    {/* Utility-First 的卡片示例 */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        用户卡片
                      </h4>
                      <p className="text-gray-600 mb-4">
                        这是一个用 Utility 类构建的卡片
                      </p>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                        查看详情
                      </button>
                    </div>

                    <button 
                      onClick={() => toggleCode('utility')}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      {showCode.utility ? '隐藏代码' : '查看代码'}
                    </button>

                    {showCode.utility && (
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                        <div className="text-green-400 mb-2">/* 只需要 HTML，无需自定义 CSS */</div>
                        <pre>{`<div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
  <h4 class="text-lg font-semibold text-gray-900 mb-2">
    用户卡片
  </h4>
  <p class="text-gray-600 mb-4">
    这是一个用 Utility 类构建的卡片
  </p>
  <button class="bg-blue-500 hover:bg-blue-600 text-white 
                 px-4 py-2 rounded-md transition-colors">
    查看详情
  </button>
</div>`}</pre>
                      </div>
                    )}

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Utility-First 的优势：</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• 无需编写自定义 CSS，直接在 HTML 中应用样式</li>
                        <li>• 类名清晰明确，一目了然</li>
                        <li>• 高度可复用，减少代码重复</li>
                        <li>• 快速原型开发和迭代</li>
                        <li>• 样式就在眼前，所见即所得</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 设计理念 */}
            {activeTab === 'philosophy' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Utility-First 核心理念</h2>
                  <p className="text-gray-600">理解这种设计方法的哲学思想</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* 原子化 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">⚛️</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">原子化设计</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      每个类只做一件事，就像原子一样不可再分
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="bg-gray-100 p-2 rounded font-mono">
                        .text-center → text-align: center
                      </div>
                      <div className="bg-gray-100 p-2 rounded font-mono">
                        .bg-blue-500 → background: blue
                      </div>
                      <div className="bg-gray-100 p-2 rounded font-mono">
                        .p-4 → padding: 1rem
                      </div>
                    </div>
                  </div>

                  {/* 组合式 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🧩</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">组合式构建</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      通过组合多个小类来创建复杂的设计
                    </p>
                    <div className="bg-gray-100 p-3 rounded text-xs font-mono">
                      bg-white + rounded-lg + shadow-sm + p-6 = 卡片
                    </div>
                  </div>

                  {/* 约束式 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">📏</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">约束式设计</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      预定义的设计系统，保证一致性
                    </p>
                    <div className="space-y-1 text-xs">
                      <div className="bg-gray-100 p-1 rounded">间距：4, 8, 12, 16...</div>
                      <div className="bg-gray-100 p-1 rounded">颜色：50, 100, 200...</div>
                    </div>
                  </div>

                  {/* 可预测 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">可预测性</h3>
                    <p className="text-gray-600 text-sm">
                      类名直接对应 CSS 属性，无需猜测
                    </p>
                  </div>

                  {/* 高复用 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">♻️</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">高度复用</h3>
                    <p className="text-gray-600 text-sm">
                      同一套工具类可以构建任何设计
                    </p>
                  </div>

                  {/* 性能优化 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">性能优化</h3>
                    <p className="text-gray-600 text-sm">
                      CSS 文件大小可控，可以清除未使用的样式
                    </p>
                  </div>
                </div>

                {/* 核心对比图 */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                    思维方式对比
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-red-600 mb-3">传统组件化思维</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <span className="text-red-500 mr-2">→</span>
                          <span>我需要一个按钮组件</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-red-500 mr-2">→</span>
                          <span>创建 .button 类</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-red-500 mr-2">→</span>
                          <span>编写 CSS 样式</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-red-500 mr-2">→</span>
                          <span>应用到 HTML</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-green-600 mb-3">Utility-First 思维</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <span className="text-green-500 mr-2">→</span>
                          <span>我需要这些样式效果</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-green-500 mr-2">→</span>
                          <span>组合现有的工具类</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-green-500 mr-2">→</span>
                          <span>直接应用到 HTML</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-green-500 mr-2">→</span>
                          <span>完成！</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 优势分析 */}
            {activeTab === 'benefits' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">为什么选择 Utility-First？</h2>
                  <p className="text-gray-600">深度分析这种方法的优势和挑战</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* 优势 */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-green-600 flex items-center">
                      <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3">✓</span>
                      主要优势
                    </h3>

                    {[
                      {
                        title: '开发速度提升',
                        desc: '无需在 HTML 和 CSS 文件间切换，样式直接在标记中应用',
                        example: '传统：写 CSS → 命名类 → 应用类\nUtility：直接应用 → 完成'
                      },
                      {
                        title: 'CSS 文件大小可控',
                        desc: 'CSS 不会随着项目增长而无限增长，未使用的样式可以被清除',
                        example: '50KB 压缩后 → 无论项目多大都保持这个大小'
                      },
                      {
                        title: '设计一致性',
                        desc: '预定义的设计系统确保颜色、间距、字体等保持一致',
                        example: 'text-lg, text-xl, text-2xl → 而不是随意的 font-size'
                      },
                      {
                        title: '易于维护',
                        desc: '样式紧贴 HTML，修改样式就是修改类名，不会产生副作用',
                        example: '修改 bg-blue-500 → bg-red-500，影响范围清晰可见'
                      },
                      {
                        title: '响应式友好',
                        desc: '内置响应式前缀，轻松处理不同屏幕尺寸',
                        example: 'text-sm md:text-base lg:text-lg'
                      }
                    ].map((benefit, index) => (
                      <div key={index} className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-2">{benefit.title}</h4>
                        <p className="text-green-700 text-sm mb-2">{benefit.desc}</p>
                        <div className="bg-green-100 p-2 rounded text-xs font-mono text-green-800">
                          {benefit.example}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 挑战与解决方案 */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-orange-600 flex items-center">
                      <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm mr-3">!</span>
                      挑战与解决方案
                    </h3>

                    {[
                      {
                        challenge: 'HTML 变得很长',
                        solution: '使用组件化框架 (React/Vue) 封装',
                        example: '<Button variant="primary" size="lg">按钮</Button>'
                      },
                      {
                        challenge: '学习曲线',
                        solution: '从常用类开始，逐步熟悉设计系统',
                        example: '先掌握：bg-, text-, p-, m-, flex 等基础类'
                      },
                      {
                        challenge: '团队协作',
                        solution: '建立团队规范和组件库',
                        example: '统一按钮样式：btn btn-primary btn-lg'
                      },
                      {
                        challenge: '复杂动画',
                        solution: '结合 @layer components 创建复用类',
                        example: '@apply animate-bounce hover:scale-110'
                      },
                      {
                        challenge: '设计师协作',
                        solution: '让设计师了解设计系统的约束',
                        example: '使用 Tailwind 的间距和颜色系统设计'
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                        <h4 className="font-semibold text-orange-800 mb-1">挑战：{item.challenge}</h4>
                        <p className="text-orange-700 text-sm mb-2">解决：{item.solution}</p>
                        <div className="bg-orange-100 p-2 rounded text-xs font-mono text-orange-800">
                          {item.example}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 数据对比 */}
                <div className="bg-gray-800 text-white rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">📊 性能数据对比</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">90%</div>
                      <div className="text-gray-300">开发时间减少</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">50KB</div>
                      <div className="text-gray-300">CSS 文件大小上限</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-1">0</div>
                      <div className="text-gray-300">CSS 命名冲突</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 实际案例 */}
            {activeTab === 'examples' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">实际应用案例</h2>
                  <p className="text-gray-600">看看真实项目中如何应用 Utility-First</p>
                </div>

                <div className="space-y-8">
                  {/* 导航栏案例 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <h3 className="text-lg font-semibold mb-4">案例 1：响应式导航栏</h3>
                    
                    {/* 导航栏演示 */}
                    <div className="bg-white border border-gray-200 rounded-lg mb-4">
                      <nav className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-blue-500 rounded"></div>
                          <span className="font-semibold text-gray-900">Logo</span>
                        </div>
                        <div className="hidden md:flex space-x-6">
                          <a className="text-gray-600 hover:text-gray-900">首页</a>
                          <a className="text-gray-600 hover:text-gray-900">产品</a>
                          <a className="text-gray-600 hover:text-gray-900">关于</a>
                        </div>
                        <div className="md:hidden">
                          <button className="text-gray-600">☰</button>
                        </div>
                      </nav>
                    </div>

                    <button 
                      onClick={() => toggleCode('component')}
                      className="text-sm text-blue-600 hover:text-blue-800 mb-3"
                    >
                      {showCode.component ? '隐藏代码' : '查看代码'}
                    </button>

                    {showCode.component && (
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                        <pre>{`<nav class="flex items-center justify-between p-4">
  <!-- Logo -->
  <div class="flex items-center space-x-2">
    <div class="w-8 h-8 bg-blue-500 rounded"></div>
    <span class="font-semibold text-gray-900">Logo</span>
  </div>
  
  <!-- 桌面菜单 -->
  <div class="hidden md:flex space-x-6">
    <a class="text-gray-600 hover:text-gray-900">首页</a>
    <a class="text-gray-600 hover:text-gray-900">产品</a>
    <a class="text-gray-600 hover:text-gray-900">关于</a>
  </div>
  
  <!-- 移动菜单按钮 -->
  <div class="md:hidden">
    <button class="text-gray-600">☰</button>
  </div>
</nav>`}</pre>
                      </div>
                    )}

                    <div className="bg-blue-50 p-4 rounded-lg mt-4">
                      <h4 className="font-semibold text-blue-800 mb-2">关键 Utility 类解析：</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li><code className="bg-blue-100 px-1 rounded">flex items-center justify-between</code> - Flexbox 布局</li>
                        <li><code className="bg-blue-100 px-1 rounded">hidden md:flex</code> - 响应式显示/隐藏</li>
                        <li><code className="bg-blue-100 px-1 rounded">hover:text-gray-900</code> - 悬停状态</li>
                        <li><code className="bg-blue-100 px-1 rounded">space-x-6</code> - 子元素间距</li>
                      </ul>
                    </div>
                  </div>

                  {/* 卡片网格案例 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <h3 className="text-lg font-semibold mb-4">案例 2：响应式卡片网格</h3>
                    
                    {/* 卡片网格演示 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                      {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
                          <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                          <div className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">产品 {i}</h4>
                            <p className="text-gray-600 text-sm mb-3">这是产品的简短描述信息</p>
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-bold text-gray-900">¥99</span>
                              <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors">
                                购买
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                      <pre>{`<!-- 响应式网格：手机1列，平板2列，桌面3列 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 
              overflow-hidden hover:shadow-md transition-shadow duration-200">
    <!-- 图片区域 -->
    <div class="h-32 bg-gradient-to-br from-blue-400 to-purple-500"></div>
    
    <!-- 内容区域 -->
    <div class="p-4">
      <h4 class="font-semibold text-gray-900 mb-2">产品标题</h4>
      <p class="text-gray-600 text-sm mb-3">产品描述</p>
      
      <!-- 价格和按钮 -->
      <div class="flex items-center justify-between">
        <span class="text-lg font-bold text-gray-900">¥99</span>
        <button class="bg-blue-500 hover:bg-blue-600 text-white 
                       px-3 py-1 rounded text-sm transition-colors">
          购买
        </button>
      </div>
    </div>
  </div>
</div>`}</pre>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg mt-4">
                      <h4 className="font-semibold text-green-800 mb-2">Utility-First 的威力体现：</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• <strong>响应式布局</strong>：grid-cols-1 md:grid-cols-2 lg:grid-cols-3</li>
                        <li>• <strong>悬停效果</strong>：hover:shadow-md hover:bg-blue-600</li>
                        <li>• <strong>过渡动画</strong>：transition-shadow transition-colors</li>
                        <li>• <strong>灵活间距</strong>：gap-6, p-4, mb-2</li>
                        <li>• <strong>无需写一行 CSS</strong>：所有样式都在 HTML 中完成</li>
                      </ul>
                    </div>
                  </div>

                  {/* 表单案例 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <h3 className="text-lg font-semibold mb-4">案例 3：复杂表单布局</h3>
                    
                    {/* 表单演示 */}
                    <form className="max-w-2xl space-y-6">
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
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          留言
                        </label>
                        <textarea 
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                          placeholder="请输入您的留言..."
                        ></textarea>
                      </div>
                      
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label className="ml-2 text-sm text-gray-600">
                          我同意 <a className="text-blue-600 hover:text-blue-800">服务条款</a>
                        </label>
                      </div>
                      
                      <div className="flex space-x-4">
                        <button 
                          type="submit"
                          className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          提交表单
                        </button>
                        <button 
                          type="button"
                          className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                        >
                          重置
                        </button>
                      </div>
                    </form>

                    <div className="bg-purple-50 p-4 rounded-lg mt-6">
                      <h4 className="font-semibold text-purple-800 mb-2">表单中的 Utility 类应用：</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-700">
                        <div>
                          <strong>布局相关：</strong>
                          <ul className="mt-1 space-y-1">
                            <li>• grid md:grid-cols-2 gap-6</li>
                            <li>• w-full, max-w-2xl</li>
                            <li>• space-y-6, space-x-4</li>
                          </ul>
                        </div>
                        <div>
                          <strong>交互状态：</strong>
                          <ul className="mt-1 space-y-1">
                            <li>• focus:ring-2 focus:ring-blue-500</li>
                            <li>• hover:bg-gray-50</li>
                            <li>• active:bg-blue-800</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 仪表盘案例 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <h3 className="text-lg font-semibold mb-4">案例 4：仪表盘布局</h3>
                    
                    {/* 仪表盘演示 */}
                    <div className="space-y-6">
                      {/* 顶部统计卡片 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                          { title: '总用户', value: '12,345', change: '+12%', color: 'blue' },
                          { title: '总收入', value: '¥98,765', change: '+8%', color: 'green' },
                          { title: '订单数', value: '1,234', change: '-3%', color: 'red' },
                          { title: '转化率', value: '3.2%', change: '+15%', color: 'purple' }
                        ].map((stat, i) => (
                          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-gray-600">{stat.title}</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                              </div>
                              <div className={`text-sm font-medium ${
                                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                              }`}>
                                {stat.change}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* 图表区域 */}
                      <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">销售趋势</h4>
                          <div className="h-64 bg-gradient-to-t from-blue-50 to-white rounded-lg flex items-end justify-center">
                            <div className="text-gray-500">图表区域</div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">最新活动</h4>
                          <div className="space-y-4">
                            {[1,2,3,4].map(i => (
                              <div key={i} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <div className="flex-1">
                                  <p className="text-sm text-gray-900">用户活动 {i}</p>
                                  <p className="text-xs text-gray-500">2分钟前</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-indigo-50 p-4 rounded-lg mt-6">
                      <h4 className="font-semibold text-indigo-800 mb-2">复杂布局的 Utility 组合：</h4>
                      <div className="text-sm text-indigo-700 space-y-2">
                        <div><strong>多层网格：</strong> grid-cols-1 sm:grid-cols-2 lg:grid-cols-4</div>
                        <div><strong>条件样式：</strong> 根据数据动态应用 text-green-600 / text-red-600</div>
                        <div><strong>布局跨列：</strong> lg:col-span-2 实现不等宽布局</div>
                        <div><strong>空间管理：</strong> space-y-6, space-x-3 控制元素间距</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 总结 */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl p-8">
                  <h3 className="text-xl font-semibold mb-4 text-center">🎯 Utility-First 实战要点总结</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-300 mb-2">开发流程</h4>
                      <ol className="space-y-1 text-gray-300 list-decimal list-inside">
                        <li>分析设计稿的视觉层次</li>
                        <li>选择合适的布局方式</li>
                        <li>组合基础 utility 类</li>
                        <li>添加交互和响应式</li>
                        <li>优化和重构重复代码</li>
                      </ol>
                    </div>
                    
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-green-300 mb-2">常用模式</h4>
                      <ul className="space-y-1 text-gray-300">
                        <li>• flex items-center justify-between</li>
                        <li>• grid grid-cols-1 md:grid-cols-2</li>
                        <li>• w-full max-w-4xl mx-auto</li>
                        <li>• hover:shadow-lg transition-shadow</li>
                        <li>• focus:ring-2 focus:ring-blue-500</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-300 mb-2">进阶技巧</h4>
                      <ul className="space-y-1 text-gray-300">
                        <li>• 组件化重复的 utility 组合</li>
                        <li>• 使用 @layer components</li>
                        <li>• 配置自定义设计系统</li>
                        <li>• 结合 CSS 变量</li>
                        <li>• 性能优化和 purge</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-gray-300">
                      Utility-First 不是银弹，但它提供了一种高效、可维护、可扩展的 CSS 架构方案
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