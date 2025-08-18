"use client"
import { useState } from 'react';

export default function TailwindOpacityBlendTutorial() {
  const [activeSection, setActiveSection] = useState('opacity');

  const sections = {
    opacity: {
      title: '透明度控制',
      description: '学习如何控制元素和背景的透明度'
    },
    'color-opacity': {
      title: '颜色透明度',
      description: '控制文字、背景和边框颜色的透明度'
    },
    'blend-modes': {
      title: '混合模式',
      description: '使用 mix-blend-mode 创建视觉效果'
    },
    'bg-blend': {
      title: '背景混合',
      description: '背景图片与颜色的混合模式'
    },
    'practical': {
      title: '实用案例',
      description: '在实际项目中的应用示例'
    },
    'advanced': {
      title: '高级技巧',
      description: '复杂透明度和混合效果的组合'
    }
  } as any;

  // 创建示例图片
  const createSampleImage = (color :any, pattern :any) => {
    const svgContent = `<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="${color}"/>
            <circle cx="10" cy="10" r="5" fill="white" opacity="0.3"/>
          </pattern>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
            <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.5" />
          </linearGradient>
        </defs>
        <rect width="200" height="150" fill="${pattern === 'gradient' ? 'url(#grad)' : pattern === 'pattern' ? 'url(#pattern)' : color}"/>
      </svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent)}`;
  };

  const sampleImage1 = createSampleImage('#3B82F6', 'solid');
  const sampleImage2 = createSampleImage('#10B981', 'pattern');
  const gradientImage = createSampleImage('#8B5CF6', 'gradient');

  const renderContent = () => {
    switch (activeSection) {
      case 'opacity':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">基础透明度控制</h3>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">元素透明度 (opacity)</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[
                    { class: 'opacity-100', value: '100%', desc: '完全不透明' },
                    { class: 'opacity-75', value: '75%', desc: '轻微透明' },
                    { class: 'opacity-50', value: '50%', desc: '半透明' },
                    { class: 'opacity-25', value: '25%', desc: '高度透明' },
                    { class: 'opacity-0', value: '0%', desc: '完全透明' }
                  ].map((item) => (
                    <div key={item.class} className="text-center">
                      <div className={`${item.class} bg-blue-500 text-white p-4 rounded-lg mb-2`}>
                        <p className="font-medium">Demo</p>
                      </div>
                      <p className="text-sm font-medium">{item.value}</p>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                      <code className="text-xs bg-gray-200 px-2 py-1 rounded">{item.class}</code>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">透明度的层叠效果</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">层叠透明度</h4>
                  <div className="relative h-40 bg-white rounded border">
                    <div className="absolute inset-4 bg-red-500 opacity-75 rounded flex items-center justify-center text-white font-bold">
                      Layer 1 (75%)
                    </div>
                    <div className="absolute inset-8 bg-blue-500 opacity-75 rounded flex items-center justify-center text-white font-bold text-sm">
                      Layer 2 (75%)
                    </div>
                    <div className="absolute inset-12 bg-green-500 opacity-75 rounded flex items-center justify-center text-white font-bold text-xs">
                      Layer 3 (75%)
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    多个透明层重叠时，透明度会相互影响
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">悬停透明度变化</h4>
                  <div className="space-y-3">
                    <div className="bg-purple-500 text-white p-4 rounded transition-opacity duration-300 hover:opacity-75 cursor-pointer">
                      悬停查看透明度变化
                    </div>
                    <div className="bg-orange-500 text-white p-4 rounded transition-opacity duration-300 hover:opacity-50 cursor-pointer">
                      悬停变为半透明
                    </div>
                    <div className="bg-pink-500 text-white p-4 rounded transition-opacity duration-300 hover:opacity-25 cursor-pointer">
                      悬停变为高度透明
                    </div>
                  </div>
                  <code className="text-xs bg-gray-200 px-2 py-1 rounded mt-2 block">
                    hover:opacity-75 transition-opacity duration-300
                  </code>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">透明度在图片上的应用</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative">
                  <img
                    src={sampleImage1}
                    alt="示例图片"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">悬停遮罩</span>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={sampleImage2}
                    alt="示例图片"
                    className="w-full h-32 object-cover rounded-lg opacity-75"
                  />
                  <div className="absolute bottom-2 left-2 bg-white bg-opacity-90 px-3 py-1 rounded text-sm font-medium">
                    半透明图片
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={gradientImage}
                    alt="示例图片"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 rounded-lg"></div>
                  <div className="absolute bottom-2 left-2 text-white font-bold">
                    渐变遮罩
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'color-opacity':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">文字颜色透明度</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">text-opacity 类</h4>
                <div className="space-y-3">
                  <p className="text-red-600 text-opacity-100 text-lg font-medium">
                    text-opacity-100: 完全不透明的红色文字
                  </p>
                  <p className="text-red-600 text-opacity-75 text-lg font-medium">
                    text-opacity-75: 75% 不透明的红色文字
                  </p>
                  <p className="text-red-600 text-opacity-50 text-lg font-medium">
                    text-opacity-50: 50% 不透明的红色文字
                  </p>
                  <p className="text-red-600 text-opacity-25 text-lg font-medium">
                    text-opacity-25: 25% 不透明的红色文字
                  </p>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>使用 text-opacity 可以在保持颜色的同时调整透明度</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">背景颜色透明度</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">bg-opacity 类</h4>
                  <div className="relative">
                    <div 
                      className="h-32 rounded bg-cover bg-center"
                      style={{backgroundImage: `url(${sampleImage1})`}}
                    ></div>
                    <div className="absolute inset-0 space-y-2 p-2">
                      <div className="bg-white bg-opacity-100 p-2 rounded text-sm font-medium">
                        bg-opacity-100
                      </div>
                      <div className="bg-white bg-opacity-75 p-2 rounded text-sm font-medium">
                        bg-opacity-75
                      </div>
                      <div className="bg-white bg-opacity-50 p-2 rounded text-sm font-medium">
                        bg-opacity-50
                      </div>
                      <div className="bg-white bg-opacity-25 p-2 rounded text-sm font-medium">
                        bg-opacity-25
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">不同颜色的透明度</h4>
                  <div className="space-y-3">
                    <div className="bg-red-500 bg-opacity-75 text-white p-3 rounded">
                      红色背景 75% 透明度
                    </div>
                    <div className="bg-blue-500 bg-opacity-60 text-white p-3 rounded">
                      蓝色背景 60% 透明度
                    </div>
                    <div className="bg-green-500 bg-opacity-40 text-white p-3 rounded">
                      绿色背景 40% 透明度
                    </div>
                    <div className="bg-purple-500 bg-opacity-20 text-purple-900 p-3 rounded">
                      紫色背景 20% 透明度
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">边框透明度</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">border-opacity 类</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { class: 'border-opacity-100', desc: '完全不透明' },
                    { class: 'border-opacity-75', desc: '75% 不透明' },
                    { class: 'border-opacity-50', desc: '50% 不透明' },
                    { class: 'border-opacity-25', desc: '25% 不透明' }
                  ].map((item) => (
                    <div key={item.class} className="text-center">
                      <div className={`border-4 border-red-500 ${item.class} bg-white p-4 rounded-lg`}>
                        <p className="text-sm font-medium">边框示例</p>
                      </div>
                      <p className="text-xs mt-2">{item.desc}</p>
                      <code className="text-xs bg-gray-200 px-2 py-1 rounded">{item.class}</code>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'blend-modes':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">mix-blend-mode 基础</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">常用混合模式</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { class: 'mix-blend-normal', name: 'normal', desc: '正常' },
                    { class: 'mix-blend-multiply', name: 'multiply', desc: '正片叠底' },
                    { class: 'mix-blend-screen', name: 'screen', desc: '滤色' },
                    { class: 'mix-blend-overlay', name: 'overlay', desc: '叠加' },
                    { class: 'mix-blend-darken', name: 'darken', desc: '变暗' },
                    { class: 'mix-blend-lighten', name: 'lighten', desc: '变亮' },
                    { class: 'mix-blend-color-dodge', name: 'color-dodge', desc: '颜色减淡' },
                    { class: 'mix-blend-color-burn', name: 'color-burn', desc: '颜色加深' }
                  ].map((blend) => (
                    <div key={blend.name} className="text-center">
                      <div className="relative h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg overflow-hidden">
                        <div className={`absolute inset-2 bg-yellow-400 rounded ${blend.class}`}></div>
                      </div>
                      <p className="text-sm font-medium mt-2">{blend.desc}</p>
                      <code className="text-xs bg-gray-200 px-1 py-0.5 rounded">{blend.name}</code>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">混合模式对比</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">multiply - 正片叠底</h4>
                  <div className="relative h-32 bg-red-400 rounded-lg overflow-hidden">
                    <div className="absolute top-4 left-4 w-20 h-20 bg-blue-400 mix-blend-multiply rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-20 h-20 bg-yellow-400 mix-blend-multiply rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    颜色相乘，产生较暗的颜色，常用于阴影效果
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">screen - 滤色</h4>
                  <div className="relative h-32 bg-gray-800 rounded-lg overflow-hidden">
                    <div className="absolute top-4 left-4 w-20 h-20 bg-red-400 mix-blend-screen rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-20 h-20 bg-blue-400 mix-blend-screen rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    颜色反向相乘，产生较亮的颜色，常用于光效
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">文字混合效果</h3>
              <div className="space-y-6">
                <div className="relative">
                  <div 
                    className="h-32 rounded-lg bg-cover bg-center"
                    style={{backgroundImage: `url(${gradientImage})`}}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-6xl font-bold text-white mix-blend-difference">
                      BLEND
                    </h2>
                  </div>
                </div>

                <div className="relative bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-32 rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-6xl font-bold text-black mix-blend-multiply">
                      MULTIPLY
                    </h2>
                  </div>
                </div>

                <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 h-32 rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-6xl font-bold text-yellow-400 mix-blend-screen">
                      SCREEN
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'bg-blend':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">背景混合模式基础</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">bg-blend-mode 类</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { class: 'bg-blend-normal', name: 'normal', desc: '正常' },
                    { class: 'bg-blend-multiply', name: 'multiply', desc: '正片叠底' },
                    { class: 'bg-blend-screen', name: 'screen', desc: '滤色' },
                    { class: 'bg-blend-overlay', name: 'overlay', desc: '叠加' },
                    { class: 'bg-blend-darken', name: 'darken', desc: '变暗' },
                    { class: 'bg-blend-lighten', name: 'lighten', desc: '变亮' },
                    { class: 'bg-blend-color-dodge', name: 'color-dodge', desc: '颜色减淡' },
                    { class: 'bg-blend-soft-light', name: 'soft-light', desc: '柔光' }
                  ].map((blend) => (
                    <div key={blend.name} className="text-center">
                      <div 
                        className={`h-24 rounded-lg bg-red-500 ${blend.class}`}
                        style={{
                          backgroundImage: `url(${sampleImage1})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      ></div>
                      <p className="text-sm font-medium mt-2">{blend.desc}</p>
                      <code className="text-xs bg-gray-200 px-1 py-0.5 rounded">{blend.name}</code>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">图片与颜色混合</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">multiply - 暗调效果</h4>
                  <div 
                    className="h-40 rounded-lg bg-blue-600 bg-blend-multiply bg-cover bg-center"
                    style={{backgroundImage: `url(${sampleImage2})`}}
                  ></div>
                  <p className="text-sm text-gray-600">蓝色与图片混合产生暗调效果</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">overlay - 对比效果</h4>
                  <div 
                    className="h-40 rounded-lg bg-purple-500 bg-blend-overlay bg-cover bg-center"
                    style={{backgroundImage: `url(${sampleImage2})`}}
                  ></div>
                  <p className="text-sm text-gray-600">紫色与图片混合增强对比</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">soft-light - 柔和效果</h4>
                  <div 
                    className="h-40 rounded-lg bg-yellow-400 bg-blend-soft-light bg-cover bg-center"
                    style={{backgroundImage: `url(${sampleImage2})`}}
                  ></div>
                  <p className="text-sm text-gray-600">黄色与图片混合产生温暖色调</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'practical':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">卡片悬停效果</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{backgroundImage: `url(${sampleImage1})`}}
                  ></div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium">
                      查看详情
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <h3 className="text-white font-bold text-lg">产品标题</h3>
                    <p className="text-gray-200 text-sm">产品描述信息</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl shadow-lg">
                  <div 
                    className="h-48 bg-cover bg-center transition-all duration-300 group-hover:scale-110"
                    style={{backgroundImage: `url(${sampleImage2})`}}
                  ></div>
                  <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white bg-opacity-90 p-4 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-gray-900">混合效果卡片</h3>
                      <p className="text-gray-600 text-sm">悬停查看颜色混合</p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl shadow-lg">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{backgroundImage: `url(${gradientImage})`}}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 mix-blend-overlay opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold mb-2">渐变混合</h3>
                      <p className="text-sm opacity-75 group-hover:opacity-100 transition-opacity">
                        动态混合效果
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Next.js 完整示例</h3>
              <div className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <pre>{`// 创建图片卡片组件
export default function ImageCard({ image, title, description, onClick }) {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      <div 
        className="h-64 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
        style={{backgroundImage: \`url(\${image})\`}}
      />
      
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}

// 画廊页面示例
export default function Gallery() {
  const images = [
    { id: 1, src: '/images/photo1.jpg', title: '自然风光', description: '美丽的山川景色' },
    { id: 2, src: '/images/photo2.jpg', title: '城市夜景', description: '璀璨的都市霓虹' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">图片画廊</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <ImageCard
              key={image.id}
              image={image.src}
              title={image.title}
              description={image.description}
              onClick={() => console.log('查看图片:', image.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}`}</pre>
              </div>
            </div>
          </div>
        );

      case 'advanced':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">复合透明度效果</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">分层透明度</h4>
                  <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-red-500 opacity-30 mix-blend-multiply"></div>
                    <div className="absolute inset-4 bg-yellow-400 opacity-40 mix-blend-overlay rounded"></div>
                    <div className="absolute inset-8 bg-green-500 opacity-50 mix-blend-screen rounded"></div>
                    <div className="relative h-full flex items-center justify-center text-white font-bold text-lg">
                      多层混合
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">动态透明度</h4>
                  <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                      style={{backgroundImage: `url(${sampleImage2})`}}
                    ></div>
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 mix-blend-overlay opacity-20 group-hover:opacity-80 transition-opacity duration-1000"></div>
                    
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    
                    <div className="relative h-full flex items-center justify-center text-white font-bold text-lg opacity-70 group-hover:opacity-100 transition-opacity">
                      悬停查看效果
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">创意文字效果</h3>
              <div className="space-y-8">
                <div className="relative h-32 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-6xl font-bold text-white mix-blend-difference tracking-wider">
                      CREATIVE
                    </h2>
                  </div>
                </div>

                <div className="relative h-32 overflow-hidden rounded-lg">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{backgroundImage: `url(${gradientImage})`}}
                  ></div>
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-6xl font-bold text-yellow-400 mix-blend-screen tracking-wider">
                      GLOWING
                    </h2>
                  </div>
                </div>

                <div className="relative h-32 bg-gray-900 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent tracking-wider">
                      GRADIENT
                    </h2>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 mix-blend-overlay opacity-20"></div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">性能优化建议</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold mb-3 text-yellow-800">⚠️ 性能注意事项</h4>
                  <ul className="text-sm space-y-2 text-yellow-700">
                    <li>• 混合模式可能影响渲染性能</li>
                    <li>• 避免过多层叠的混合效果</li>
                    <li>• 在移动设备上谨慎使用复杂混合</li>
                    <li>• 使用 will-change 优化动画性能</li>
                    <li>• 考虑使用 CSS containment</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="font-semibold mb-3 text-green-800">✅ 最佳实践</h4>
                  <ul className="text-sm space-y-2 text-green-700">
                    <li>• 优先使用 opacity 而非 rgba</li>
                    <li>• 合理使用硬件加速</li>
                    <li>• 预加载关键背景图片</li>
                    <li>• 使用 transform 替代位置变化</li>
                    <li>• 测试不同设备的兼容性</li>
                  </ul>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            Tailwind CSS 透明度和混合模式教程
          </h1>
          <p className="text-lg text-gray-600">
            掌握透明度控制、颜色混合和视觉效果的完整技巧
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeSection === key
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 shadow'
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

          <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">🎨 透明度和混合模式技巧</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">透明度最佳实践</h4>
                <ul className="text-sm space-y-1">
                  <li>• 使用语义化的透明度值</li>
                  <li>• 考虑可访问性和对比度</li>
                  <li>• 合理使用背景透明度</li>
                  <li>• 避免过度透明影响可读性</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">混合模式应用</h4>
                <ul className="text-sm space-y-1">
                  <li>• multiply 适合创建阴影效果</li>
                  <li>• screen 适合创建光效</li>
                  <li>• overlay 增强图片对比度</li>
                  <li>• 注意浏览器兼容性</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">📚 快速参考</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">透明度类</h4>
                <div className="space-y-1">
                  <code className="bg-white px-2 py-1 rounded block">opacity-0 到 opacity-100</code>
                  <code className="bg-white px-2 py-1 rounded block">text-opacity-*</code>
                  <code className="bg-white px-2 py-1 rounded block">bg-opacity-*</code>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">混合模式</h4>
                <div className="space-y-1">
                  <code className="bg-white px-2 py-1 rounded block">mix-blend-*</code>
                  <code className="bg-white px-2 py-1 rounded block">bg-blend-*</code>
                  <code className="bg-white px-2 py-1 rounded block">isolation</code>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">常用组合</h4>
                <div className="space-y-1">
                  <code className="bg-white px-2 py-1 rounded block">hover:opacity-*</code>
                  <code className="bg-white px-2 py-1 rounded block">transition-opacity</code>
                  <code className="bg-white px-2 py-1 rounded block">group-hover:*</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}