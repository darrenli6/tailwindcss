"use client"
import { useState } from 'react'

export default function StateVariantsDemo() {
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: true,
    item3: false
  })
  
  const [selectedTab, setSelectedTab] = useState('tab1')
  const [inputValue, setInputValue] = useState('')
  const [isPressed, setIsPressed] = useState(false)

  const handleCheckboxChange = (itemId :any) => {
    setCheckedItems((prev: any) => ({
      ...prev,
      [itemId]: !prev[itemId]
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            TailwindCSS 状态前缀详解
          </h1>
          <p className="text-lg text-gray-600">
            掌握交互状态，创造优秀的用户体验
          </p>
        </div>

        {/* 状态前缀参考表 */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">状态前缀参考表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left py-3 px-4">前缀</th>
                  <th className="text-left py-3 px-4">CSS 伪类</th>
                  <th className="text-left py-3 px-4">触发条件</th>
                  <th className="text-left py-3 px-4">使用场景</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-mono bg-blue-50 text-blue-600">hover:</td>
                  <td className="py-3 px-4 font-mono">:hover</td>
                  <td className="py-3 px-4">鼠标悬停</td>
                  <td className="py-3 px-4">按钮、链接、卡片</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-mono bg-green-50 text-green-600">focus:</td>
                  <td className="py-3 px-4 font-mono">:focus</td>
                  <td className="py-3 px-4">获得焦点</td>
                  <td className="py-3 px-4">表单输入框</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-mono bg-purple-50 text-purple-600">active:</td>
                  <td className="py-3 px-4 font-mono">:active</td>
                  <td className="py-3 px-4">被点击时</td>
                  <td className="py-3 px-4">按钮按下效果</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-mono bg-gray-50 text-gray-600">disabled:</td>
                  <td className="py-3 px-4 font-mono">:disabled</td>
                  <td className="py-3 px-4">元素被禁用</td>
                  <td className="py-3 px-4">禁用状态样式</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-mono bg-yellow-50 text-yellow-600">checked:</td>
                  <td className="py-3 px-4 font-mono">:checked</td>
                  <td className="py-3 px-4">被选中</td>
                  <td className="py-3 px-4">复选框、单选框</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono bg-red-50 text-red-600">group-hover:</td>
                  <td className="py-3 px-4 font-mono">父元素:hover</td>
                  <td className="py-3 px-4">父元素被悬停</td>
                  <td className="py-3 px-4">卡片内元素联动</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 基础交互状态 */}
          <div className="space-y-8">
            {/* 按钮状态演示 */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4">按钮交互状态</h3>
              <div className="space-y-4">
                {/* 基础悬停按钮 */}
                <div>
                  <p className="text-sm text-gray-500 mb-2">hover: 悬停效果</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-200">
                    悬停我看看
                  </button>
                  <code className="block text-xs text-gray-500 mt-1">
                    bg-blue-500 hover:bg-blue-600
                  </code>
                </div>

                {/* 按下状态 */}
                <div>
                  <p className="text-sm text-gray-500 mb-2">active: 按下效果</p>
                  <button className="bg-green-500 hover:bg-green-600 active:bg-green-700 active:scale-95 text-white px-6 py-3 rounded-lg transition-all duration-150">
                    点击我
                  </button>
                  <code className="block text-xs text-gray-500 mt-1">
                    active:bg-green-700 active:scale-95
                  </code>
                </div>

                {/* 焦点状态 */}
                <div>
                  <p className="text-sm text-gray-500 mb-2">focus: 焦点效果（用Tab键试试）</p>
                  <button className="bg-purple-500 hover:bg-purple-600 focus:bg-purple-700 focus:ring-4 focus:ring-purple-300 text-white px-6 py-3 rounded-lg transition-all duration-200">
                    用Tab选中我
                  </button>
                  <code className="block text-xs text-gray-500 mt-1">
                    focus:ring-4 focus:ring-purple-300
                  </code>
                </div>

                {/* 禁用状态 */}
                <div>
                  <p className="text-sm text-gray-500 mb-2">disabled: 禁用状态</p>
                  <button 
                    disabled 
                    className="bg-gray-500 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg"
                  >
                    禁用按钮
                  </button>
                  <code className="block text-xs text-gray-500 mt-1">
                    disabled:bg-gray-300 disabled:cursor-not-allowed
                  </code>
                </div>
              </div>
            </div>

            {/* 表单状态演示 */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4">表单输入状态</h3>
              <div className="space-y-4">
                {/* 基础输入框 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    基础输入框
                  </label>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="点击输入内容"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                  <code className="block text-xs text-gray-500 mt-1">
                    focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  </code>
                </div>

                {/* 特殊状态输入框 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    错误状态输入框
                  </label>
                  <input
                    type="text"
                    placeholder="包含错误的输入框"
                    className="w-full px-4 py-3 border-2 border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-red-50"
                  />
                  <p className="text-red-500 text-sm mt-1">这里有一个错误信息</p>
                </div>

                {/* 成功状态输入框 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    成功状态输入框
                  </label>
                  <input
                    type="text"
                    defaultValue="正确的输入值"
                    className="w-full px-4 py-3 border-2 border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-green-50"
                  />
                  <p className="text-green-500 text-sm mt-1">输入正确！</p>
                </div>
              </div>
            </div>
          </div>

          {/* 高级交互状态 */}
          <div className="space-y-8">
            {/* 复选框和单选框 */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4">复选框状态</h3>
              <div className="space-y-3">
                {Object.entries(checkedItems).map(([key, value], index) => (
                  <label key={key} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={() => handleCheckboxChange(key)}
                      className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600"
                    />
                    <span className="text-gray-700">选项 {index + 1}</span>
                  </label>
                ))}
                <code className="block text-xs text-gray-500 mt-2">
                  checked:bg-blue-600 checked:border-blue-600
                </code>
              </div>
            </div>

            {/* Group 状态演示 */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4">Group 联动效果</h3>
              <div className="space-y-4">
                {/* 卡片悬停联动 */}
                <div className="group bg-gray-50 hover:bg-gray-100 rounded-lg p-4 cursor-pointer transition-all duration-200 border-2 border-transparent hover:border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        悬停整个卡片
                      </h4>
                      <p className="text-sm text-gray-500 group-hover:text-gray-700">
                        观察标题和图标的变化
                      </p>
                    </div>
                    <div className="text-gray-400 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-200">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <code className="block text-xs text-gray-500">
                  group-hover:text-blue-600 group-hover:scale-110
                </code>

                {/* 列表项联动 */}
                <div className="space-y-2">
                  {['项目 A', '项目 B', '项目 C'].map((item, index) => (
                    <div key={index} className="group flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
                      <span className="text-gray-700 group-hover:text-blue-700">{item}</span>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button className="text-blue-500 hover:text-blue-700 text-sm">编辑</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 标签页状态 */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4">标签页状态</h3>
              <div className="border-b border-gray-200">
                <nav className="flex space-x-1">
                  {[
                    { id: 'tab1', label: '标签一' },
                    { id: 'tab2', label: '标签二' },
                    { id: 'tab3', label: '标签三' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id)}
                      className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-200 ${
                        selectedTab === tab.id
                          ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                当前选中: <strong>{selectedTab}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* 高级技巧演示 */}
        <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
          <h2 className="text-xl font-semibold mb-4">🚀 高级状态组合技巧</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* 多状态组合按钮 */}
            <div>
              <h3 className="font-semibold mb-3">多状态组合</h3>
              <button
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
                onMouseLeave={() => setIsPressed(false)}
                className={`
                  px-6 py-3 rounded-lg font-medium transition-all duration-150
                  bg-white text-indigo-600
                  hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-md
                  active:scale-95 active:shadow-sm
                  focus:outline-none focus:ring-4 focus:ring-white/30
                  disabled:opacity-50 disabled:cursor-not-allowed
                  ${isPressed ? 'scale-95 shadow-sm' : ''}
                `}
              >
                多状态按钮
              </button>
              <code className="block text-xs text-indigo-200 mt-2 font-mono">
                hover:shadow-md active:scale-95 focus:ring-4
              </code>
            </div>

            {/* 响应式 + 状态组合 */}
            <div>
              <h3 className="font-semibold mb-3">响应式 + 状态组合</h3>
              <button className="
                px-4 py-2 md:px-6 md:py-3 
                text-sm md:text-base
                bg-white text-purple-600 
                rounded-lg font-medium 
                hover:bg-purple-50 
                md:hover:shadow-lg
                transition-all duration-200
              ">
                响应式状态按钮
              </button>
              <code className="block text-xs text-purple-200 mt-2 font-mono">
                md:px-6 md:hover:shadow-lg
              </code>
            </div>
          </div>
        </div>

        {/* 实用建议 */}
        <div className="mt-8 bg-gray-800 text-white rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">💡 状态设计最佳实践</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold mb-2">基础原则</h3>
              <ul className="space-y-1 text-gray-300">
                <li>• 始终提供视觉反馈</li>
                <li>• 使用过渡动画增强体验</li>
                <li>• 确保键盘导航友好</li>
                <li>• 保持状态变化一致性</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">常用组合</h3>
              <ul className="space-y-1 text-gray-300 font-mono text-xs">
                <li>• hover:scale-105 transition-transform</li>
                <li>• focus:ring-2 focus:ring-blue-500</li>
                <li>• active:scale-95 transition-all</li>
                <li>• disabled:opacity-50 disabled:cursor-not-allowed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}