'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function HomePage() {
 
  
  return (
    <div className="container mx-auto px-4 py-8">
     
 

     

      {/* 课程大纲区域 */}
      <section className="max-w-4xl mx-auto">
        {/* 大纲标题 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <span className="text-2xl">📖</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TailwindCSS 课程大纲
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            完整学习路径，从入门到精通
          </p>
        </div>

        {/* 章节列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* 第1章 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                01
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  TailwindCSS 简介与环境搭建
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                <Link href="/">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span>什么是 TailwindCSS 及其优势</span>
                  </li>
                 </Link> 
                  <Link href="/">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span>安装与配置方法</span>
                  </li>
                  </Link>
                  <Link href="/">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span>第一个 TailwindCSS 页面</span>
                  </li>
                  </Link>
                </ul>
                
              </div>
            </div>
          </div>

          {/* 第2章 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                02
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  核心概念
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                <Link href="/utility" className='hover:text-purple-800'>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Utility-First 设计理念</span>
                  </li>
                  </Link>
                  <Link href="/mdlg" className='hover:text-purple-800'>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>响应式设计前缀</span>
                  </li>
                  </Link>
                  <Link href="/hover" className='hover:text-purple-800'>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>状态变体 (hover, focus, active)</span>
                  </li>
                  </Link>
                  <Link href="/color" className='hover:text-purple-800'>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>颜色系统和间距系统</span>
                  </li>
                  </Link>
                </ul>
                 
              </div>
            </div>
          </div>

          {/* 第3章 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                03
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                  布局与响应式设计
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                  <Link href="/layout" className='hover:text-green-800'>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>Container 和 Box Model</span>
                  </li>
                  </Link>
                  <Link href="/display" className='hover:text-green-800'>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>Display 属性 (block, inline, flex, grid)</span>
                  </li>
                  </Link>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>容器与间距管理</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>定位与层级控制</span>
                  </li>
                </ul>
                <a href="/chapter3" className="text-green-600 hover:text-green-800 font-medium hover:underline inline-flex items-center">
                  开始学习
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* 第4章 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                04
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                  组件开发与样式组合
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    <span>组件化思维与设计原则</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    <span>样式复用与抽象策略</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    <span>自定义组件库构建</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    <span>最佳实践与性能优化</span>
                  </li>
                </ul>
                <a href="/chapter4" className="text-orange-600 hover:text-orange-800 font-medium hover:underline inline-flex items-center">
                  开始学习
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* 第5章 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                05
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                  自定义配置与扩展
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>tailwind.config.js 深度配置</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>自定义颜色与字体系统</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>插件开发与第三方集成</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>构建优化与生产部署</span>
                  </li>
                </ul>
                <a href="/chapter5" className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline inline-flex items-center">
                  开始学习
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* 第6章 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                06
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                  实战项目与进阶应用
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>企业级仪表板开发</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>电商网站界面构建</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>移动端应用界面开发</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>团队协作与代码规范</span>
                  </li>
                </ul>
                <a href="/chapter6" className="text-pink-600 hover:text-pink-800 font-medium hover:underline inline-flex items-center">
                  开始学习
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 底部提示 */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-800 mb-3">🎯 学习建议</h3>
            <p className="text-gray-600 mb-4">
              建议按顺序学习，每章都包含理论讲解和实践练习
            </p>
            <div className="flex justify-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                📖 理论基础
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                💻 实践练习
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                🚀 项目实战
              </span>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}