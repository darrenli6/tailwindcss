"use client"
import { useState } from 'react';

export default function TailwindGradientTutorial() {
  const [activeSection, setActiveSection] = useState('directions');

  const sections = {
    directions: {
      title: '渐变方向',
      description: '学习 8 种不同的渐变方向和它们的视觉效果'
    },
    colors: {
      title: '颜色组合',
      description: '探索不同颜色组合创造的渐变效果'
    },
    'multi-stop': {
      title: '多色渐变',
      description: '使用 via 关键字创建多个颜色过渡点'
    },
    'text-gradient': {
      title: '文字渐变',
      description: '让文字本身具有渐变效果'
    },
    practical: {
      title: '实用案例',
      description: '在现实项目中的渐变应用技巧'
    },
    creative: {
      title: '创意效果',
      description: '高级渐变技巧和创意组合'
    }
  } as any;

  // 渐变方向定义
  const gradientDirections = [
    { 
      class: 'bg-gradient-to-r',
      name: 'to-r (向右)',
      description: '从左到右的水平渐变',
      icon: '→'
    },
    { 
      class: 'bg-gradient-to-l',
      name: 'to-l (向左)',
      description: '从右到左的水平渐变',
      icon: '←'
    },
    { 
      class: 'bg-gradient-to-t',
      name: 'to-t (向上)',
      description: '从下到上的垂直渐变',
      icon: '↑'
    },
    { 
      class: 'bg-gradient-to-b',
      name: 'to-b (向下)',
      description: '从上到下的垂直渐变',
      icon: '↓'
    },
    { 
      class: 'bg-gradient-to-tr',
      name: 'to-tr (右上)',
      description: '对角线渐变到右上角',
      icon: '↗'
    },
    { 
      class: 'bg-gradient-to-tl',
      name: 'to-tl (左上)',
      description: '对角线渐变到左上角',
      icon: '↖'
    },
    { 
      class: 'bg-gradient-to-br',
      name: 'to-br (右下)',
      description: '对角线渐变到右下角',
      icon: '↘'
    },
    { 
      class: 'bg-gradient-to-bl',
      name: 'to-bl (左下)',
      description: '对角线渐变到左下角',
      icon: '↙'
    }
  ];

  // 颜色组合
  const colorCombinations = [
    {
      name: '蓝紫渐变',
      class: 'from-blue-500 to-purple-600',
      description: '经典的蓝紫组合，现代感十足',
      theme: '科技、专业'
    },
    {
      name: '日落渐变',
      class: 'from-orange-400 to-red-500',
      description: '温暖的橙红渐变，如日落般美丽',
      theme: '温暖、活力'
    },
    {
      name: '清新渐变',
      class: 'from-green-400 to-cyan-500',
      description: '清新的绿青组合，自然舒适',
      theme: '自然、健康'
    },
    {
      name: '粉紫渐变',
      class: 'from-pink-400 to-purple-500',
      description: '梦幻的粉紫色调，浪漫优雅',
      theme: '浪漫、优雅'
    },
    {
      name: '金黄渐变',
      class: 'from-yellow-400 to-orange-500',
      description: '明亮的金黄色调，充满活力',
      theme: '活力、积极'
    },
    {
      name: '深色渐变',
      class: 'from-gray-700 to-gray-900',
      description: '低调的深色渐变，专业稳重',
      theme: '专业、稳重'
    }
  ];

  // 多色渐变
  const multiStopGradients = [
    {
      name: '彩虹光谱',
      class: 'from-red-500 via-yellow-500 to-green-500',
      description: '红-黄-绿的三色渐变'
    },
    {
      name: '紫粉蓝',
      class: 'from-purple-500 via-pink-500 to-blue-500',
      description: '紫-粉-蓝的梦幻组合'
    },
    {
      name: '火焰效果',
      class: 'from-yellow-400 via-red-500 to-pink-500',
      description: '黄-红-粉的火焰色调'
    },
    {
      name: '夜空渐变',
      class: 'from-indigo-900 via-purple-800 to-pink-700',
      description: '深蓝-紫-粉的夜空效果'
    },
    {
      name: '森林渐变',
      class: 'from-green-600 via-emerald-500 to-teal-400',
      description: '绿-翠绿-青绿的森林色调'
    },
    {
      name: '海洋深度',
      class: 'from-blue-900 via-blue-600 to-cyan-400',
      description: '深蓝-蓝-青的海洋层次'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'directions':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">8种渐变方向详解</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {gradientDirections.map((direction, index) => (
                  <div key={index} className="group">
                    <div className={`${direction.class} from-blue-500 to-purple-600 h-32 rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-3 transition-transform group-hover:scale-105`}>
                      {direction.icon}
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1">{direction.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{direction.description}</p>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">{direction.class}</code>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">方向对比效果</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">水平方向</h4>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-red-500 to-blue-500 h-16 rounded flex items-center justify-center text-white font-medium">
                      从左到右 (to-r)
                    </div>
                    <div className="bg-gradient-to-l from-red-500 to-blue-500 h-16 rounded flex items-center justify-center text-white font-medium">
                      从右到左 (to-l)
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">垂直方向</h4>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-t from-green-500 to-yellow-500 h-16 rounded flex items-center justify-center text-white font-medium">
                      从下到上 (to-t)
                    </div>
                    <div className="bg-gradient-to-b from-green-500 to-yellow-500 h-16 rounded flex items-center justify-center text-white font-medium">
                      从上到下 (to-b)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">对角线方向展示</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-tr from-purple-500 to-pink-500 h-24 rounded flex items-center justify-center text-white font-medium text-sm">
                  右上 ↗
                </div>
                <div className="bg-gradient-to-tl from-purple-500 to-pink-500 h-24 rounded flex items-center justify-center text-white font-medium text-sm">
                  左上 ↖
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-24 rounded flex items-center justify-center text-white font-medium text-sm">
                  右下 ↘
                </div>
                <div className="bg-gradient-to-bl from-purple-500 to-pink-500 h-24 rounded flex items-center justify-center text-white font-medium text-sm">
                  左下 ↙
                </div>
              </div>
            </div>
          </div>
        );

      case 'colors':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">经典颜色组合</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {colorCombinations.map((combo, index) => (
                  <div key={index} className="group">
                    <div className={`bg-gradient-to-r ${combo.class} h-32 rounded-lg mb-3 transition-transform group-hover:scale-105 flex items-end p-4`}>
                      <span className="text-white font-bold text-lg drop-shadow-lg">{combo.name}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{combo.description}</p>
                    <span className="inline-block text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{combo.theme}</span>
                    <br />
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-2 inline-block">{combo.class}</code>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">色彩深浅对比</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">蓝色系深浅渐变</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-r from-blue-200 to-blue-400 h-16 rounded flex items-center justify-center text-blue-900 font-medium">
                      浅蓝渐变
                    </div>
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-16 rounded flex items-center justify-center text-white font-medium">
                      中蓝渐变
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-900 h-16 rounded flex items-center justify-center text-white font-medium">
                      深蓝渐变
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">渐变强度对比</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-r from-purple-300 to-purple-400 h-16 rounded flex items-center justify-center text-purple-900 font-medium">
                      微妙渐变
                    </div>
                    <div className="bg-gradient-to-r from-purple-400 to-purple-700 h-16 rounded flex items-center justify-center text-white font-medium">
                      中等渐变
                    </div>
                    <div className="bg-gradient-to-r from-purple-200 to-purple-900 h-16 rounded flex items-center justify-center text-white font-medium">
                      强烈渐变
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">互补色渐变</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-red-500 to-green-500 h-24 rounded flex items-center justify-center text-white font-bold">
                  红绿互补
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-orange-500 h-24 rounded flex items-center justify-center text-white font-bold">
                  蓝橙互补
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-yellow-500 h-24 rounded flex items-center justify-center text-white font-bold">
                  紫黄互补
                </div>
                <div className="bg-gradient-to-r from-cyan-500 to-red-500 h-24 rounded flex items-center justify-center text-white font-bold">
                  青红互补
                </div>
              </div>
            </div>
          </div>
        );

      case 'multi-stop':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">三色渐变效果</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {multiStopGradients.map((gradient, index) => (
                  <div key={index} className="group">
                    <div className={`bg-gradient-to-r ${gradient.class} h-32 rounded-lg mb-3 transition-transform group-hover:scale-105 flex items-center justify-center text-white font-bold text-lg drop-shadow-lg`}>
                      {gradient.name}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{gradient.description}</p>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">{gradient.class}</code>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">via 关键字详解</h3>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">基础用法</h4>
                  <p className="text-gray-700 mb-4">使用 via-color 在起始和结束颜色之间添加中间色</p>
                  <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-16 rounded flex items-center justify-center text-white font-medium mb-2">
                    from-blue-500 via-purple-500 to-pink-500
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">多个 via 点</h4>
                  <p className="text-gray-700 mb-4">可以使用多个 via 创建更复杂的渐变</p>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 h-12 rounded flex items-center justify-center text-white font-medium text-sm">
                      四色彩虹渐变
                    </div>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded block">
                      from-red-500 via-yellow-500 via-green-500 to-blue-500
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'text-gradient':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">文字渐变基础</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  文字渐变需要三个关键类：bg-gradient-*、bg-clip-text 和 text-transparent
                </p>
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    渐变标题文字
                  </h2>
                  <code className="text-sm bg-gray-100 px-3 py-2 rounded block">
                    bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
                  </code>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">各种文字渐变效果</h3>
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                    LOGO
                  </h1>
                  <p className="text-sm text-gray-600">品牌Logo渐变效果</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                      自然清新
                    </h3>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                      热情活力
                    </h3>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      梦幻浪漫
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent">
                      专业稳重
                    </h3>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                      科技未来
                    </h3>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                      温暖舒适
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">多色文字渐变</h3>
              <div className="space-y-4 text-center">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                  彩虹文字
                </h1>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  梦幻渐变
                </h1>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  科技感标题
                </h1>
              </div>
            </div>
          </div>
        );

      case 'practical':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">按钮渐变设计</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  主要操作按钮
                </button>
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  成功操作按钮
                </button>
                <button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  警告操作按钮
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">卡片渐变设计</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-xl text-white">
                  <div className="bg-white bg-opacity-20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">商业方案</h3>
                  <p className="text-blue-100">专业的商业解决方案，助力企业发展</p>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-xl text-white">
                  <div className="bg-white bg-opacity-20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">生态友好</h3>
                  <p className="text-green-100">环保可持续的绿色解决方案</p>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-xl text-white">
                  <div className="bg-white bg-opacity-20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">创意设计</h3>
                  <p className="text-purple-100">释放创意，打造独特的设计作品</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Hero 区域设计</h3>
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-12 rounded-xl text-white text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  创建美丽的网站
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  使用现代技术和设计理念，打造令人印象深刻的用户体验
                </p>
                <div className="space-x-4">
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    开始使用
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors">
                    了解更多
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Next.js 项目实现</h3>
              <div className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <pre>{`// components/GradientButton.js
export default function GradientButton({ variant = 'primary', children, ...props }) {
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700',
    success: 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700',
    warning: 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600'
  };

  return (
    <button
      className={\`\${variants[variant]} text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105\`}
      {...props}
    >
      {children}
    </button>
  );
}

// pages/index.js 使用示例
export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            欢迎来到未来
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            体验最新的技术和设计，创造无限可能
          </p>
          <GradientButton variant="primary">立即开始</GradientButton>
        </div>
      </section>
    </div>
  );
}`}</pre>
              </div>
            </div>
          </div>
        );

      case 'creative':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">渐变边框效果</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">渐变边框卡片</h4>
                    <p className="text-gray-600">使用渐变创建漂亮的边框效果</p>
                  </div>
                </div>
                <div className="p-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <h4 className="font-bold text-white mb-2">深色渐变边框</h4>
                    <p className="text-gray-300">在深色背景上的渐变边框</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">渐变遮罩效果</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold text-lg">渐变遮罩</h4>
                    <p>文字清晰可见</p>
                  </div>
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-60"></div>
                  <div className="absolute top-4 right-4 text-white text-right">
                    <h4 className="font-bold text-lg">角落遮罩</h4>
                    <p>创造深度感</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">复杂渐变组合</h3>
              <div className="space-y-6">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-800 to-transparent opacity-50"></div>
                  <div className="relative h-full flex items-center justify-center text-white">
                    <div className="text-center">
                      <h2 className="text-3xl font-bold mb-4">多层渐变效果</h2>
                      <p className="text-lg text-purple-200">结合多个渐变层创造复杂视觉</p>
                    </div>
                  </div>
                </div>

                <div className="relative h-64 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900 opacity-60"></div>
                  <div className="relative h-full flex items-center justify-center text-white">
                    <div className="text-center">
                      <h2 className="text-3xl font-bold mb-4">日落天空效果</h2>
                      <p className="text-lg">模拟自然渐变色彩</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">渐变图标和装饰</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mx-auto">
                  🚀
                </div>
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mx-auto">
                  ⭐
                </div>
                <div className="bg-gradient-to-br from-pink-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mx-auto">
                  ❤️
                </div>
                <div className="bg-gradient-to-br from-yellow-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mx-auto">
                  ⚡
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Tailwind CSS 渐变背景教程
          </h1>
          <p className="text-lg text-gray-600">
            掌握渐变的方向、颜色组合、多色渐变和创意应用
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeSection === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 shadow'
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
            <h3 className="text-lg font-bold text-gray-800 mb-4">🎨 渐变设计技巧</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">颜色选择</h4>
                <ul className="text-sm space-y-1">
                  <li>• 使用相邻颜色创造和谐感</li>
                  <li>• 对比色渐变更有视觉冲击</li>
                  <li>• 控制颜色饱和度避免过于刺眼</li>
                  <li>• 考虑品牌色彩的一致性</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">应用场景</h4>
                <ul className="text-sm space-y-1">
                  <li>• 按钮和交互元素</li>
                  <li>• 背景和Hero区域</li>
                  <li>• 文字和Logo设计</li>
                  <li>• 边框和装饰效果</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">📚 快速参考</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">基础语法</h4>
                <code className="bg-white px-2 py-1 rounded block mb-1">bg-gradient-to-{'{direction}'}</code>
                <code className="bg-white px-2 py-1 rounded block mb-1">from-{'{color}'}</code>
                <code className="bg-white px-2 py-1 rounded block">to-{'{color}'}</code>
              </div>
              <div>
                <h4 className="font-semibold mb-2">多色渐变</h4>
                <code className="bg-white px-2 py-1 rounded block mb-1">via-{'{color}'}</code>
                <p className="text-gray-600 mt-1">在起始和结束色之间添加中间色</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">文字渐变</h4>
                <code className="bg-white px-2 py-1 rounded block mb-1">bg-clip-text</code>
                <code className="bg-white px-2 py-1 rounded block">text-transparent</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}