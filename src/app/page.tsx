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
                <Link href="/tailwindcss/">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span>什么是 TailwindCSS 及其优势</span>
                  </li>
                 </Link> 
                  <Link href="/tailwindcss/">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span>安装与配置方法</span>
                  </li>
                  </Link>
                  <Link href="/tailwindcss/">
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
                <Link href="/tailwindcss/utility" className='hover:text-purple-800'>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Utility-First 设计理念</span>
                  </li>
                  </Link>
                  <Link href="/tailwindcss/mdlg" className='hover:text-purple-800'>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>响应式设计前缀</span>
                  </li>
                  </Link>
                  <Link href="/tailwindcss/hover" className='hover:text-purple-800'>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>状态变体 (hover, focus, active)</span>
                  </li>
                  </Link>
                  <Link href="/tailwindcss/color" className='hover:text-purple-800'>
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
                  <Link href="/tailwindcss/layout" className='hover:text-green-800'>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>Container 和 Box Model</span>
                  </li>
                  </Link>
                  <Link href="/tailwindcss/display" className='hover:text-green-800'>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>Display 属性 (block, inline, flex, grid)</span>
                  </li>
                  </Link>
                  <Link href="/tailwindcss/position" className='hover:text-green-800'>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>Position 定位</span>
                  </li>
                  </Link>
                  <Link href="/tailwindcss/float" className='hover:text-green-800'>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>Float 和 Clear</span>
                  </li>
                  </Link>
                </ul>
               
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
                颜色与背景
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                  <Link href="/tailwindcss/fontcolor" className='hover:text-orange-800'>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    <span>文字颜色和背景颜色</span>
                  </li>
                  </Link>
                  <Link href="/tailwindcss/gradientbg" className='hover:text-orange-800'>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    <span>渐变背景</span>
                  </li>
                  </Link>
                  <Link href="/tailwindcss/bgpic" className='hover:text-orange-800'>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    <span>背景图片和位置</span>
                  </li>
                  </Link>
                  <Link href="/tailwindcss/transparent" className='hover:text-orange-800'>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    <span>透明度和混合模式</span>
                  </li>
                  </Link>
                </ul>
              
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
                字体与文字
                </h3>
                
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                <Link href="/tailwindcss/fontfamily" className='hover:text-orange-800'>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>字体家族和字重</span>
                  </li>
                 </Link> 
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>文字大小和行高</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>文字对齐和装饰</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>字母和单词间距</span>
                  </li>
                </ul>
               
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
                间距与尺寸
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>Margin 和 Padding 系统</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>宽度和高度设置</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>最小/最大尺寸</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>间距的响应式使用</span>
                  </li>
                </ul>
                 
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-rose-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                07
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                边框与圆角
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>边框样式、宽度、颜色</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>圆角设置</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>边框分割线</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>轮廓 (Outline)</span>
                  </li>
                </ul>
                 
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-rose-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                08
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                阴影与效果
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>盒子阴影</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>文字阴影</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>滤镜效果</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>变换 (Transform)</span>
                  </li>
                </ul>
                 
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-black-500 to-rose-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                09
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                Flexbox 详解
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>Flex 容器和项目</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>主轴和交叉轴对齐</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>Flex 方向和换行</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>Flex 项目的增长和收缩</span>
                  </li>
                </ul>
                 
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-rose-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                10
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                Grid 布局
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>Grid 容器和项目</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>网格模板和间距</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>Grid 项目定位</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>响应式网格布局</span>
                  </li>
                </ul>
                 
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