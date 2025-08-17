"use client"
import { useState } from 'react';

export default function TailwindBackgroundTutorial() {
  const [activeSection, setActiveSection] = useState('bg-image');

  const sections = {
    'bg-image': {
      title: '背景图片',
      description: '学习如何设置和使用背景图片'
    },
    'bg-position': {
      title: '背景位置',
      description: '控制背景图片在容器中的位置'
    },
    'bg-size': {
      title: '背景尺寸',
      description: '调整背景图片的大小和缩放方式'
    },
    'bg-repeat': {
      title: '背景重复',
      description: '控制背景图片的重复模式'
    },
    'bg-attachment': {
      title: '背景附着',
      description: '设置背景图片的滚动行为'
    },
    'practical': {
      title: '实用案例',
      description: '在实际项目中的应用示例'
    }
  } as any;

  // 创建示例图片的 SVG
  const createSampleImage = (color :any, text :any) => {
    const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="${color}"/>
        <text x="150" y="100" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
      </svg>`;
    // 使用 encodeURIComponent 替代 btoa 来避免编码问题
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent)}`;
  };

  const sampleImage1 = createSampleImage('#3B82F6', 'Sample Image');
  const sampleImage2 = createSampleImage('#10B981', 'Background');
  const patternImage = createSampleImage('#8B5CF6', 'Pattern');

  const renderContent = () => {
    switch (activeSection) {
      case 'bg-image':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">基础背景图片设置</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">使用 URL 设置背景图片</h4>
                  <div 
                    className="h-48 rounded-lg bg-cover bg-center flex items-center justify-center"
                    style={{backgroundImage: `url(${sampleImage1})`}}
                  >
                    <div className="bg-black bg-opacity-50 text-white p-4 rounded">
                      使用 style 属性设置背景图片
                    </div>
                  </div>
                  <code className="text-sm bg-gray-100 px-3 py-2 rounded block mt-3">
                    style={'{backgroundImage: `url(${sampleImage})`}'}
                  </code>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Tailwind 自定义背景图片</h4>
                  <p className="text-gray-700 mb-4">在 tailwind.config.js 中添加自定义背景图片：</p>
                  <div className="bg-gray-800 text-green-400 p-4 rounded text-sm">
                    <pre>{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')",
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'custom-pattern': "url('data:image/svg+xml;base64,PHN2Zw...')"
      }
    }
  }
}

// 使用方式
<div className="bg-hero-pattern bg-cover bg-center">
  内容
</div>`}</pre>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">内联背景图片</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div 
                      className="h-32 rounded-lg bg-cover bg-center flex items-center justify-center"
                      style={{backgroundImage: `url(${sampleImage1})`}}
                    >
                      <span className="bg-white bg-opacity-80 px-3 py-1 rounded text-sm font-medium">
                        蓝色背景
                      </span>
                    </div>
                    <div 
                      className="h-32 rounded-lg bg-cover bg-center flex items-center justify-center"
                      style={{backgroundImage: `url(${sampleImage2})`}}
                    >
                      <span className="bg-white bg-opacity-80 px-3 py-1 rounded text-sm font-medium">
                        绿色背景
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">背景图片与渐变组合</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{backgroundImage: `url(${sampleImage1})`}}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="relative h-full flex items-end p-6">
                    <div className="text-white">
                      <h4 className="font-bold text-lg">图片 + 渐变遮罩</h4>
                      <p className="text-sm">提升文字可读性</p>
                    </div>
                  </div>
                </div>

                <div className="relative h-48 rounded-lg overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{backgroundImage: `url(${sampleImage2})`}}
                  ></div>
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-60"></div>
                  <div className="relative h-full flex items-center justify-center">
                    <div className="text-white text-center">
                      <h4 className="font-bold text-lg">图片 + 颜色遮罩</h4>
                      <p className="text-sm">统一色调</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'bg-position':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">背景位置控制</h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {[
                  { class: 'bg-top', name: 'top', desc: '顶部' },
                  { class: 'bg-bottom', name: 'bottom', desc: '底部' },
                  { class: 'bg-left', name: 'left', desc: '左侧' },
                  { class: 'bg-right', name: 'right', desc: '右侧' },
                  { class: 'bg-center', name: 'center', desc: '居中' },
                  { class: 'bg-left-top', name: 'left-top', desc: '左上' },
                  { class: 'bg-right-top', name: 'right-top', desc: '右上' },
                  { class: 'bg-left-bottom', name: 'left-bottom', desc: '左下' },
                  { class: 'bg-right-bottom', name: 'right-bottom', desc: '右下' }
                ].map((pos) => (
                  <div key={pos.name} className="text-center">
                    <div 
                      className={`h-24 rounded-lg ${pos.class} bg-no-repeat border-2 border-gray-300 flex items-center justify-center`}
                      style={{
                        backgroundImage: `url(${createSampleImage('#F59E0B', 'Dot')})`,
                        backgroundSize: '60px 40px'
                      }}
                    >
                    </div>
                    <p className="text-sm font-medium mt-2">{pos.desc}</p>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">{pos.class}</code>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">精确位置控制</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">使用任意值设置精确位置</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div 
                      className="h-32 rounded-lg bg-no-repeat border-2 border-gray-300"
                      style={{
                        backgroundImage: `url(${createSampleImage('#EF4444', 'Dot')})`,
                        backgroundSize: '40px 40px',
                        backgroundPosition: '10px 10px'
                      }}
                    ></div>
                    <p className="text-sm mt-2">自定义位置 (10px 10px)</p>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">style: backgroundPosition: '10px 10px'</code>
                  </div>
                  
                  <div>
                    <div 
                      className="h-32 rounded-lg bg-no-repeat border-2 border-gray-300"
                      style={{
                        backgroundImage: `url(${createSampleImage('#8B5CF6', 'Dot')})`,
                        backgroundSize: '40px 40px',
                        backgroundPosition: 'center 20px'
                      }}
                    ></div>
                    <p className="text-sm mt-2">水平居中，距顶部20px</p>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">backgroundPosition: 'center 20px'</code>
                  </div>
                  
                  <div>
                    <div 
                      className="h-32 rounded-lg bg-no-repeat border-2 border-gray-300"
                      style={{
                        backgroundImage: `url(${createSampleImage('#10B981', 'Dot')})`,
                        backgroundSize: '40px 40px',
                        backgroundPosition: 'right 10px bottom 10px'
                      }}
                    ></div>
                    <p className="text-sm mt-2">右下角偏移</p>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">backgroundPosition: 'right 10px bottom 10px'</code>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">响应式背景位置</h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">不同屏幕尺寸的背景位置</h4>
                <div 
                  className="h-48 rounded-lg bg-cover md:bg-right lg:bg-center border-2 border-blue-300"
                  style={{backgroundImage: `url(${sampleImage1})`}}
                >
                  <div className="h-full flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 p-4 rounded text-center">
                      <p className="font-medium">响应式背景位置</p>
                      <p className="text-sm text-gray-600">小屏：cover，中屏：right，大屏：center</p>
                    </div>
                  </div>
                </div>
                <code className="text-sm bg-gray-100 px-3 py-2 rounded block mt-3">
                  className="bg-cover md:bg-right lg:bg-center"
                </code>
              </div>
            </div>
          </div>
        );

      case 'bg-size':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">背景尺寸选项</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { 
                    class: 'bg-auto', 
                    name: 'auto', 
                    desc: '原始尺寸',
                    detail: '保持图片原始尺寸'
                  },
                  { 
                    class: 'bg-cover', 
                    name: 'cover', 
                    desc: '覆盖容器',
                    detail: '填满容器，可能裁剪'
                  },
                  { 
                    class: 'bg-contain', 
                    name: 'contain', 
                    desc: '完整显示',
                    detail: '完整显示图片，可能留白'
                  },
                  { 
                    class: '', 
                    name: 'custom', 
                    desc: '自定义尺寸',
                    detail: '使用具体数值'
                  }
                ].map((size) => (
                  <div key={size.name} className="text-center">
                    <div 
                      className={`h-32 rounded-lg ${size.class} bg-center bg-no-repeat border-2 border-gray-300`}
                      style={{
                        backgroundImage: `url(${sampleImage1})`,
                        ...(size.name === 'custom' && { backgroundSize: '80px 60px' })
                      }}
                    ></div>
                    <h4 className="font-semibold mt-2">{size.desc}</h4>
                    <p className="text-sm text-gray-600">{size.detail}</p>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {size.class || 'backgroundSize: 80px'}
                    </code>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Cover vs Contain 对比</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">bg-cover - 填满容器</h4>
                  <div 
                    className="h-40 rounded-lg bg-cover bg-center border-2 border-red-300"
                    style={{backgroundImage: `url(${sampleImage1})`}}
                  ></div>
                  <p className="text-sm text-gray-700 mt-2">
                    图片会缩放填满整个容器，保持比例，可能会裁剪部分内容
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">bg-contain - 完整显示</h4>
                  <div 
                    className="h-40 rounded-lg bg-contain bg-center bg-no-repeat border-2 border-green-300 bg-gray-100"
                    style={{backgroundImage: `url(${sampleImage1})`}}
                  ></div>
                  <p className="text-sm text-gray-700 mt-2">
                    图片会完整显示在容器内，保持比例，可能会有留白区域
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">自定义背景尺寸</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">固定像素</h4>
                  <div 
                    className="h-32 rounded-lg bg-center bg-no-repeat border-2 border-gray-300"
                    style={{
                      backgroundImage: `url(${sampleImage2})`,
                      backgroundSize: '100px 80px'
                    }}
                  ></div>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-2 block">
                    backgroundSize: '100px 80px'
                  </code>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">百分比尺寸</h4>
                  <div 
                    className="h-32 rounded-lg bg-center bg-no-repeat border-2 border-gray-300"
                    style={{
                      backgroundImage: `url(${sampleImage2})`,
                      backgroundSize: '50% 60%'
                    }}
                  ></div>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-2 block">
                    backgroundSize: '50% 60%'
                  </code>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">只设置宽度</h4>
                  <div 
                    className="h-32 rounded-lg bg-center bg-no-repeat border-2 border-gray-300"
                    style={{
                      backgroundImage: `url(${sampleImage2})`,
                      backgroundSize: '120px auto'
                    }}
                  ></div>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-2 block">
                    backgroundSize: '120px auto'
                  </code>
                </div>
              </div>
            </div>
          </div>
        );

      case 'bg-repeat':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">背景重复模式</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { 
                    class: 'bg-repeat', 
                    name: 'repeat', 
                    desc: '水平垂直重复',
                    detail: '默认行为，全方向重复'
                  },
                  { 
                    class: 'bg-no-repeat', 
                    name: 'no-repeat', 
                    desc: '不重复',
                    detail: '只显示一次图片'
                  },
                  { 
                    class: 'bg-repeat-x', 
                    name: 'repeat-x', 
                    desc: '水平重复',
                    detail: '只在水平方向重复'
                  },
                  { 
                    class: 'bg-repeat-y', 
                    name: 'repeat-y', 
                    desc: '垂直重复',
                    detail: '只在垂直方向重复'
                  }
                ].map((repeat) => (
                  <div key={repeat.name} className="text-center">
                    <div 
                      className={`h-32 rounded-lg ${repeat.class} bg-left-top border-2 border-gray-300`}
                      style={{
                        backgroundImage: `url(${createSampleImage('#F59E0B', 'Pattern')})`,
                        backgroundSize: '60px 40px'
                      }}
                    ></div>
                    <h4 className="font-semibold mt-2">{repeat.desc}</h4>
                    <p className="text-xs text-gray-600">{repeat.detail}</p>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">{repeat.class}</code>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">重复模式对比</h3>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">bg-repeat - 创建图案背景</h4>
                  <div 
                    className="h-32 rounded-lg bg-repeat border-2 border-blue-300"
                    style={{
                      backgroundImage: `url(${createSampleImage('#3B82F6', 'Dot')})`,
                      backgroundSize: '40px 40px'
                    }}
                  ></div>
                  <p className="text-sm text-gray-700 mt-2">
                    适合创建重复的图案背景，如纹理、装饰等
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">bg-repeat-x - 水平装饰</h4>
                  <div 
                    className="h-32 rounded-lg bg-repeat-x bg-top border-2 border-green-300"
                    style={{
                      backgroundImage: `url(${createSampleImage('#10B981', 'Line')})`,
                      backgroundSize: '60px 20px'
                    }}
                  ></div>
                  <p className="text-sm text-gray-700 mt-2">
                    适合创建水平装饰条，如页眉装饰、分隔线等
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">bg-repeat-y - 垂直装饰</h4>
                  <div 
                    className="h-32 rounded-lg bg-repeat-y bg-left border-2 border-purple-300"
                    style={{
                      backgroundImage: `url(${createSampleImage('#8B5CF6', 'Bar')})`,
                      backgroundSize: '20px 40px'
                    }}
                  ></div>
                  <p className="text-sm text-gray-700 mt-2">
                    适合创建垂直装饰，如侧边栏装饰、垂直分隔等
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">重复与尺寸组合</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">小图案重复</h4>
                  <div 
                    className="h-32 rounded-lg bg-repeat border-2 border-gray-300"
                    style={{
                      backgroundImage: `url(${createSampleImage('#EF4444', 'Small')})`,
                      backgroundSize: '20px 20px'
                    }}
                  ></div>
                  <p className="text-sm text-gray-600 mt-2">小尺寸图案创建密集纹理</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">大图案重复</h4>
                  <div 
                    className="h-32 rounded-lg bg-repeat border-2 border-gray-300"
                    style={{
                      backgroundImage: `url(${createSampleImage('#F59E0B', 'Large')})`,
                      backgroundSize: '60px 60px'
                    }}
                  ></div>
                  <p className="text-sm text-gray-600 mt-2">大尺寸图案创建醒目装饰</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'bg-attachment':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">背景附着模式</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { 
                    class: 'bg-scroll', 
                    name: 'scroll', 
                    desc: '随内容滚动',
                    detail: '背景图片跟随内容一起滚动（默认）'
                  },
                  { 
                    class: 'bg-fixed', 
                    name: 'fixed', 
                    desc: '固定在视口',
                    detail: '背景图片固定在浏览器视口中'
                  },
                  { 
                    class: 'bg-local', 
                    name: 'local', 
                    desc: '随元素滚动',
                    detail: '背景图片相对于元素内容滚动'
                  }
                ].map((attachment) => (
                  <div key={attachment.name} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">{attachment.desc}</h4>
                    <div className={`h-32 rounded border-2 border-gray-300 overflow-y-auto ${attachment.class} bg-center`}
                         style={{
                           backgroundImage: `url(${sampleImage1})`,
                           backgroundSize: 'cover'
                         }}>
                      <div className="h-64 p-4 bg-white bg-opacity-80">
                        <p className="text-sm">{attachment.detail}</p>
                        <div className="mt-4 space-y-2">
                          <div className="h-4 bg-gray-200 rounded"></div>
                          <div className="h-4 bg-gray-200 rounded"></div>
                          <div className="h-4 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-2 block">{attachment.class}</code>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">视差滚动效果</h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">bg-fixed 创建视差效果</h4>
                <div className="max-h-64 overflow-y-auto border-2 border-blue-300 rounded-lg">
                  <div className="h-32 bg-white p-6">
                    <h5 className="font-semibold">内容区域 1</h5>
                    <p className="text-sm text-gray-600">这里是正常滚动的内容...</p>
                  </div>
                  <div 
                    className="h-48 bg-fixed bg-center bg-cover flex items-center justify-center"
                    style={{backgroundImage: `url(${sampleImage1})`}}
                  >
                    <div className="bg-black bg-opacity-50 text-white p-4 rounded">
                      <h5 className="font-bold">固定背景区域</h5>
                      <p className="text-sm">背景图片固定，创建视差效果</p>
                    </div>
                  </div>
                  <div className="h-32 bg-white p-6">
                    <h5 className="font-semibold">内容区域 2</h5>
                    <p className="text-sm text-gray-600">继续滚动查看效果...</p>
                  </div>
                  <div 
                    className="h-48 bg-fixed bg-center bg-cover flex items-center justify-center"
                    style={{backgroundImage: `url(${sampleImage2})`}}
                  >
                    <div className="bg-black bg-opacity-50 text-white p-4 rounded">
                      <h5 className="font-bold">另一个固定背景</h5>
                      <p className="text-sm">不同的背景图片</p>
                    </div>
                  </div>
                  <div className="h-32 bg-white p-6">
                    <h5 className="font-semibold">内容区域 3</h5>
                    <p className="text-sm text-gray-600">视差滚动效果完成</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mt-3">
                  向上滚动容器可以看到背景图片保持固定，创建视差滚动效果
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">移动端注意事项</h3>
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h4 className="font-semibold mb-3">⚠️ bg-fixed 在移动端的限制</h4>
                <div className="space-y-3 text-sm">
                  <p>• iOS Safari 对 background-attachment: fixed 支持有限</p>
                  <p>• 在移动设备上可能导致性能问题</p>
                  <p>• 建议使用 JavaScript 库实现更好的视差效果</p>
                  <p>• 可以使用媒体查询在移动端禁用固定背景</p>
                </div>
                <div className="mt-4 bg-gray-800 text-green-400 p-3 rounded text-xs">
                  <pre>{`/* 移动端友好的处理方式 */
@media (max-width: 768px) {
  .bg-fixed {
    background-attachment: scroll;
  }
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        );

      case 'practical':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Hero 区域设计</h3>
              <div className="space-y-6">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{backgroundImage: `url(${sampleImage1})`}}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
                  <div className="relative h-full flex items-center justify-center text-center text-white p-6">
                    <div>
                      <h1 className="text-3xl md:text-5xl font-bold mb-4">欢迎来到我们的网站</h1>
                      <p className="text-lg md:text-xl mb-6">体验最好的服务和产品</p>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                        开始探索
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  <pre>{`// Hero 区域组件
export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{backgroundImage: "url('/images/hero-bg.jpg')"}}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60" />
      <div className="relative h-full flex items-center justify-center text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            您的标题
          </h1>
          <p className="text-xl mb-8">
            您的描述文字
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg">
            行动按钮
          </button>
        </div>
      </div>
    </section>
  );
}`}</pre>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">卡片背景设计</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{backgroundImage: `url(${sampleImage1})`}}
                  ></div>
                  <div className="p-6 bg-white">
                    <h3 className="text-lg font-bold mb-2">产品标题</h3>
                    <p className="text-gray-600 text-sm">产品描述信息...</p>
                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded text-sm">
                      了解更多
                    </button>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{backgroundImage: `url(${sampleImage2})`}}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold">覆盖文字卡片</h3>
                      <p className="text-sm opacity-90">文字直接显示在图片上</p>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{backgroundImage: `url(${patternImage})`}}
                  >
                    <div className="absolute inset-0 bg-purple-600 bg-opacity-80"></div>
                    <div className="relative h-full flex items-center justify-center text-white text-center p-4">
                      <div>
                        <h3 className="text-lg font-bold mb-2">遮罩卡片</h3>
                        <p className="text-sm">使用颜色遮罩统一风格</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">响应式背景图片</h3>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">不同设备使用不同背景</h4>
                <div 
                  className="h-48 rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${sampleImage1})`,
                    // 在实际项目中，你可能会使用 CSS 媒体查询来设置不同的背景图片
                  }}
                >
                  <div className="h-full flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 p-4 rounded text-center">
                      <p className="font-medium">响应式背景图片</p>
                      <p className="text-sm text-gray-600">根据屏幕尺寸加载不同图片</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-gray-800 text-green-400 p-3 rounded text-sm">
                  <pre>{`/* CSS 媒体查询实现响应式背景 */
.hero-bg {
  background-image: url('/images/hero-mobile.jpg');
}

@media (min-width: 768px) {
  .hero-bg {
    background-image: url('/images/hero-tablet.jpg');
  }
}

@media (min-width: 1024px) {
  .hero-bg {
    background-image: url('/images/hero-desktop.jpg');
  }
}`}</pre>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">性能优化技巧</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">图片优化</h4>
                  <ul className="text-sm space-y-2">
                    <li>• 使用 WebP 格式减小文件大小</li>
                    <li>• 为不同设备准备不同尺寸</li>
                    <li>• 使用 CDN 加快加载速度</li>
                    <li>• 启用图片懒加载</li>
                    <li>• 压缩图片质量</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">CSS 优化</h4>
                  <ul className="text-sm space-y-2">
                    <li>• 避免过多的背景图片</li>
                    <li>• 使用 CSS Sprites 合并小图标</li>
                    <li>• 预加载关键背景图片</li>
                    <li>• 使用渐变替代简单的背景图案</li>
                    <li>• 合理使用 background-attachment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Next.js 完整示例</h3>
              <div className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <pre>{`// components/BackgroundSection.js
import { useState, useEffect } from 'react';

export default function BackgroundSection({ 
  mobileImage, 
  desktopImage, 
  children, 
  overlay = true 
}) {
  const [currentImage, setCurrentImage] = useState(mobileImage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setCurrentImage(desktopImage);
      } else {
        setCurrentImage(mobileImage);
      }
    };

    // 初始设置
    handleResize();
    
    // 监听窗口大小变化
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileImage, desktopImage]);

  return (
    <section className="relative min-h-screen">
      {/* 背景图片 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
        style={{backgroundImage: \`url(\${currentImage})\`}}
      />
      
      {/* 遮罩层 */}
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      )}
      
      {/* 内容 */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}

// 使用示例
export default function HomePage() {
  return (
    <div>
      <BackgroundSection
        mobileImage="/images/hero-mobile.jpg"
        desktopImage="/images/hero-desktop.jpg"
        overlay={true}
      >
        <div className="container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            欢迎来到我们的网站
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            体验最好的服务和产品，开启全新的数字化之旅
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            开始探索
          </button>
        </div>
      </BackgroundSection>

      {/* 视差滚动区域 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">我们的服务</h2>
          {/* 服务内容 */}
        </div>
      </section>

      <div 
        className="h-96 bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{backgroundImage: "url('/images/parallax-bg.jpg')"}}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">视差滚动效果</h3>
          <p className="text-gray-600">背景图片固定，创造深度感</p>
        </div>
      </div>
    </div>
  );
}`}</pre>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
            Tailwind CSS 背景图片教程
          </h1>
          <p className="text-lg text-gray-600">
            学习背景图片、位置、尺寸、重复和附着的完整控制
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

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">🎯 背景图片最佳实践</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">性能优化</h4>
                <ul className="text-sm space-y-1">
                  <li>• 使用适当的图片格式 (WebP, AVIF)</li>
                  <li>• 压缩图片大小减少加载时间</li>
                  <li>• 使用响应式图片适配不同设备</li>
                  <li>• 考虑使用懒加载技术</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">用户体验</h4>
                <ul className="text-sm space-y-1">
                  <li>• 确保文字在背景图片上清晰可读</li>
                  <li>• 使用遮罩层提高文字对比度</li>
                  <li>• 在移动端谨慎使用 bg-fixed</li>
                  <li>• 提供备用背景色</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">📚 快速参考</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">背景位置</h4>
                <div className="space-y-1">
                  <code className="bg-white px-2 py-1 rounded block">bg-top</code>
                  <code className="bg-white px-2 py-1 rounded block">bg-center</code>
                  <code className="bg-white px-2 py-1 rounded block">bg-bottom</code>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">背景尺寸</h4>
                <div className="space-y-1">
                  <code className="bg-white px-2 py-1 rounded block">bg-cover</code>
                  <code className="bg-white px-2 py-1 rounded block">bg-contain</code>
                  <code className="bg-white px-2 py-1 rounded block">bg-auto</code>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">背景重复</h4>
                <div className="space-y-1">
                  <code className="bg-white px-2 py-1 rounded block">bg-repeat</code>
                  <code className="bg-white px-2 py-1 rounded block">bg-no-repeat</code>
                  <code className="bg-white px-2 py-1 rounded block">bg-repeat-x</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}