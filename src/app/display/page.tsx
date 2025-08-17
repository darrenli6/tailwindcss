"use client"
import { useState } from 'react';

export default function TailwindDisplayTutorial() {
  const [activeSection, setActiveSection] = useState('block');

  const sections = {
    block: {
      title: 'Block 块级元素',
      description: '块级元素占据整行宽度，垂直排列',
      classes: ['block'],
      examples: [
        { class: 'block', desc: '基本块级元素' },
        { class: 'block w-1/2', desc: '指定宽度的块级元素' },
        { class: 'block mx-auto', desc: '居中的块级元素' }
      ]
    },
    inline: {
      title: 'Inline 内联元素',
      description: '内联元素在同一行内排列，不能设置宽高',
      classes: ['inline', 'inline-block'],
      examples: [
        { class: 'inline', desc: '基本内联元素' },
        { class: 'inline-block', desc: '内联块元素（可设置宽高）' },
        { class: 'inline-block w-20 h-20', desc: '带宽高的内联块' }
      ]
    },
    flex: {
      title: 'Flex 弹性布局',
      description: 'Flexbox 用于一维布局，可以灵活控制子元素的排列和对齐',
      classes: ['flex', 'inline-flex'],
      examples: [
        { class: 'flex', desc: '基本弹性容器' },
        { class: 'flex justify-center items-center', desc: '居中对齐' },
        { class: 'flex flex-col', desc: '垂直排列' },
        { class: 'flex flex-wrap', desc: '允许换行' },
        { class: 'flex justify-between', desc: '两端对齐' },
        { class: 'flex items-stretch', desc: '拉伸对齐' }
      ]
    },
    grid: {
      title: 'Grid 网格布局',
      description: 'CSS Grid 用于二维布局，可以同时控制行和列',
      classes: ['grid', 'inline-grid'],
      examples: [
        { class: 'grid grid-cols-2', desc: '2列网格' },
        { class: 'grid grid-cols-3 gap-4', desc: '3列网格带间距' },
        { class: 'grid grid-cols-2 grid-rows-2', desc: '2x2网格' },
        { class: 'grid grid-cols-[100px,1fr,100px]', desc: '自定义列宽' },
        { class: 'grid place-items-center', desc: '内容居中' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tailwind CSS Display 属性教程
          </h1>
          <p className="text-lg text-gray-600">
            学习 block、inline、flex、grid 的用法和区别
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
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 shadow'
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
              <div key={index} className="border-l-4 border-blue-400 pl-6">
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
                  {activeSection === 'block' && (
                    <div className="space-y-4">
                      <div className={`${example.class} bg-blue-200 p-4 rounded border-2 border-blue-400`}>
                        Block Element 1
                      </div>
                      <div className={`${example.class} bg-green-200 p-4 rounded border-2 border-green-400`}>
                        Block Element 2
                      </div>
                    </div>
                  )}

                  {activeSection === 'inline' && (
                    <div className="space-y-4">
                      <div>
                        <span className={`${example.class} bg-blue-200 p-2 border-2 border-blue-400`}>
                          Inline 1
                        </span>
                        <span className={`${example.class} bg-green-200 p-2 ml-2 border-2 border-green-400`}>
                          Inline 2
                        </span>
                        <span className={`${example.class} bg-yellow-200 p-2 ml-2 border-2 border-yellow-400`}>
                          Inline 3
                        </span>
                      </div>
                    </div>
                  )}

                  {activeSection === 'flex' && (
                    <div className={`${example.class} bg-gray-100 p-4 rounded border-2 border-gray-400 min-h-[120px]`}>
                      <div className="bg-red-200 p-3 rounded border-2 border-red-400">
                        Item 1
                      </div>
                      <div className="bg-blue-200 p-3 rounded border-2 border-blue-400">
                        Item 2
                      </div>
                      <div className="bg-green-200 p-3 rounded border-2 border-green-400">
                        Item 3
                      </div>
                    </div>
                  )}

                  {activeSection === 'grid' && (
                    <div className={`${example.class} bg-gray-100 p-4 rounded border-2 border-gray-400`}>
                      <div className="bg-red-200 p-3 rounded border-2 border-red-400">
                        1
                      </div>
                      <div className="bg-blue-200 p-3 rounded border-2 border-blue-400">
                        2
                      </div>
                      <div className="bg-green-200 p-3 rounded border-2 border-green-400">
                        3
                      </div>
                      <div className="bg-yellow-200 p-3 rounded border-2 border-yellow-400">
                        4
                      </div>
                      {example.class.includes('grid-rows-2') && (
                        <>
                          <div className="bg-purple-200 p-3 rounded border-2 border-purple-400">
                            5
                          </div>
                          <div className="bg-pink-200 p-3 rounded border-2 border-pink-400">
                            6
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 实用技巧 */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-4">💡 实用技巧</h3>
            <div className="space-y-2">
              {activeSection === 'block' && (
                <>
                  <p>• 使用 `w-full` 确保元素占满容器宽度</p>
                  <p>• 使用 `mx-auto` 实现水平居中</p>
                  <p>• 块级元素默认垂直排列，可以用 margin 控制间距</p>
                </>
              )}
              {activeSection === 'inline' && (
                <>
                  <p>• `inline` 元素不能设置宽高，使用 `inline-block` 替代</p>
                  <p>• 内联元素之间的空白符会产生间距</p>
                  <p>• 使用 `align-top/middle/bottom` 控制垂直对齐</p>
                </>
              )}
              {activeSection === 'flex' && (
                <>
                  <p>• 使用 `justify-` 类控制主轴对齐</p>
                  <p>• 使用 `items-` 类控制交叉轴对齐</p>
                  <p>• `flex-1` 让子元素平分剩余空间</p>
                  <p>• `flex-col` 改变主轴方向为垂直</p>
                </>
              )}
              {activeSection === 'grid' && (
                <>
                  <p>• 使用 `grid-cols-[数字]` 快速创建等宽列</p>
                  <p>• `gap-` 类统一设置行列间距</p>
                  <p>• 使用 `col-span-` 和 `row-span-` 跨越网格</p>
                  <p>• `place-items-center` 同时居中行和列</p>
                </>
              )}
            </div>
          </div>

          {/* Next.js 集成示例 */}
          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-lg font-bold text-green-800 mb-4">🚀 Next.js 中的使用</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`// pages/index.js 或 app/page.js
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header - Flex布局 */}
      <header className="flex justify-between items-center p-6 bg-blue-600 text-white">
        <h1 className="text-2xl font-bold">Logo</h1>
        <nav className="flex gap-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
        </nav>
      </header>

      {/* Main Content - Grid布局 */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <article className="md:col-span-2 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">主要内容</h2>
          <p className="block mb-4">这是一个段落...</p>
        </article>
        
        <aside className="bg-gray-100 p-6 rounded">
          <h3 className="font-bold mb-4">侧边栏</h3>
          <div className="flex flex-col gap-2">
            <a href="#" className="inline-block p-2 bg-blue-100 rounded">链接1</a>
            <a href="#" className="inline-block p-2 bg-blue-100 rounded">链接2</a>
          </div>
        </aside>
      </main>
    </div>
  );
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}