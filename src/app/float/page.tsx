"use client"
import { useState } from 'react';

export default function TailwindFloatClearTutorial() {
  const [activeSection, setActiveSection] = useState('float');

  const sections = {
    float: {
      title: 'Float 浮动',
      description: '让元素向左或向右浮动，其他元素会围绕它排列',
      examples: [
        {
          class: 'float-left',
          desc: '左浮动 - 元素向左浮动，文本从右侧环绕',
          demo: 'float-left'
        },
        {
          class: 'float-right',
          desc: '右浮动 - 元素向右浮动，文本从左侧环绕',
          demo: 'float-right'
        },
        {
          class: 'float-none',
          desc: '取消浮动 - 恢复正常文档流',
          demo: 'float-none'
        }
      ]
    },
    clear: {
      title: 'Clear 清除浮动',
      description: '控制元素是否允许浮动元素在其旁边',
      examples: [
        {
          class: 'clear-left',
          desc: '清除左浮动 - 不允许左侧有浮动元素',
          demo: 'clear-left'
        },
        {
          class: 'clear-right',
          desc: '清除右浮动 - 不允许右侧有浮动元素',
          demo: 'clear-right'
        },
        {
          class: 'clear-both',
          desc: '清除所有浮动 - 两侧都不允许浮动元素',
          demo: 'clear-both'
        },
        {
          class: 'clear-none',
          desc: '不清除浮动 - 允许浮动元素在旁边',
          demo: 'clear-none'
        }
      ]
    },
    practical: {
      title: '实际应用案例',
      description: '在现代开发中的实用场景和替代方案',
      examples: [
        {
          class: 'text-wrap',
          desc: '文章中的图片环绕',
          demo: 'article-image'
        },
        {
          class: 'flex-alternative',
          desc: 'Flexbox 替代方案',
          demo: 'flex-alternative'
        },
        {
          class: 'grid-alternative',
          desc: 'Grid 替代方案',
          demo: 'grid-alternative'
        }
      ]
    }
  };

  const renderDemo = (example) => {
    const { demo, class: className } = example;

    switch (demo) {
      case 'float-left':
        return (
          <div className="bg-gray-50 p-6 rounded border">
            <div className={`${className} w-24 h-24 bg-blue-500 text-white p-2 rounded mr-4 mb-2`}>
              浮动盒子
            </div>
            <p className="text-gray-700">
              这是一段较长的文本内容，用来演示浮动效果。当元素设置为左浮动时，
              它会脱离正常的文档流，向左移动到容器的边缘，而后面的文本内容会从右侧环绕这个浮动元素。
              这种布局方式在传统的网页设计中经常被用来实现文字环绕图片的效果。
              浮动元素会影响后续元素的布局，直到遇到清除浮动的元素为止。
            </p>
          </div>
        );

      case 'float-right':
        return (
          <div className="bg-gray-50 p-6 rounded border">
            <div className={`${className} w-24 h-24 bg-red-500 text-white p-2 rounded ml-4 mb-2`}>
              浮动盒子
            </div>
            <p className="text-gray-700">
              这是一段较长的文本内容，用来演示右浮动效果。当元素设置为右浮动时，
              它会脱离正常的文档流，向右移动到容器的边缘，而后面的文本内容会从左侧环绕这个浮动元素。
              右浮动常用于创建侧边栏效果，或者让某些元素（如按钮、标签）对齐到容器的右侧。
              需要注意的是，多个右浮动元素会按照从右到左的顺序排列。
            </p>
          </div>
        );

      case 'float-none':
        return (
          <div className="bg-gray-50 p-6 rounded border">
            <div className={`${className} w-24 h-24 bg-green-500 text-white p-2 rounded mb-2`}>
              普通盒子
            </div>
            <p className="text-gray-700">
              这是一段文本内容，用来演示取消浮动的效果。当元素设置为 float-none 时，
              它会回到正常的文档流中，按照标准的块级元素方式显示。这意味着元素会独占一行，
              后续的内容会在它的下方显示，而不会环绕在旁边。float-none 通常用于重置之前设置的浮动属性。
            </p>
          </div>
        );

      case 'clear-left':
        return (
          <div className="bg-gray-50 p-6 rounded border">
            <div className="float-left w-20 h-20 bg-blue-500 text-white p-2 rounded mr-4 mb-2 text-sm">
              左浮动
            </div>
            <div className="float-right w-20 h-20 bg-red-500 text-white p-2 rounded ml-4 mb-2 text-sm">
              右浮动
            </div>
            <div className={`${className} bg-yellow-200 p-3 rounded border-2 border-yellow-400`}>
              clear-left: 这个元素清除了左浮动，所以它会出现在左浮动元素的下方，但右浮动元素仍然可能在它旁边。
            </div>
          </div>
        );

      case 'clear-right':
        return (
          <div className="bg-gray-50 p-6 rounded border">
            <div className="float-left w-20 h-20 bg-blue-500 text-white p-2 rounded mr-4 mb-2 text-sm">
              左浮动
            </div>
            <div className="float-right w-20 h-20 bg-red-500 text-white p-2 rounded ml-4 mb-2 text-sm">
              右浮动
            </div>
            <div className={`${className} bg-yellow-200 p-3 rounded border-2 border-yellow-400`}>
              clear-right: 这个元素清除了右浮动，所以它会出现在右浮动元素的下方，但左浮动元素仍然可能在它旁边。
            </div>
          </div>
        );

      case 'clear-both':
        return (
          <div className="bg-gray-50 p-6 rounded border">
            <div className="float-left w-20 h-20 bg-blue-500 text-white p-2 rounded mr-4 mb-2 text-sm">
              左浮动
            </div>
            <div className="float-right w-20 h-20 bg-red-500 text-white p-2 rounded ml-4 mb-2 text-sm">
              右浮动
            </div>
            <div className={`${className} bg-green-200 p-3 rounded border-2 border-green-400`}>
              clear-both: 这个元素清除了所有浮动，所以它会出现在所有浮动元素的下方，两侧都不会有浮动元素。
            </div>
          </div>
        );

      case 'clear-none':
        return (
          <div className="bg-gray-50 p-6 rounded border">
            <div className="float-left w-20 h-20 bg-blue-500 text-white p-2 rounded mr-4 mb-2 text-sm">
              左浮动
            </div>
            <div className="float-right w-20 h-20 bg-red-500 text-white p-2 rounded ml-4 mb-2 text-sm">
              右浮动
            </div>
            <div className={`${className} bg-purple-200 p-3 rounded border-2 border-purple-400`}>
              clear-none: 这个元素不清除任何浮动，所以浮动元素可能会和它重叠或环绕。
            </div>
          </div>
        );

      case 'article-image':
        return (
          <div className="bg-white p-6 rounded border shadow-sm">
            <h3 className="text-xl font-bold mb-4">文章标题：探索现代网页设计</h3>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzRGNDZFNSIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5Zu+54mHPC90ZXh0Pgo8L3N2Zz4K"
              alt="示例图片"
              className="float-left w-32 h-20 object-cover rounded mr-4 mb-2"
            />
            <p className="text-gray-700 mb-4">
              在现代网页设计中，我们经常需要实现文字环绕图片的效果。传统的做法是使用 float 属性，
              让图片浮动到文本的一侧。这种布局方式在博客文章、新闻页面和产品介绍中非常常见。
            </p>
            <p className="text-gray-700 mb-4">
              浮动布局的优势在于它能够创建自然的文字流动效果，让内容看起来更加紧凑和专业。
              然而，使用浮动也需要注意一些问题，比如容器高度塌陷和清除浮动的处理。
            </p>
            <div className="clear-both"></div>
            <p className="text-gray-700">
              在这段文字之前，我们使用了 clear-both 来确保它出现在浮动图片的下方，
              而不是继续环绕在图片旁边。这是处理浮动布局时的一个重要技巧。
            </p>
          </div>
        );

      case 'flex-alternative':
        return (
          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded border">
              <h4 className="font-semibold mb-2 text-red-800">❌ 使用 Float（不推荐）</h4>
              <div className="bg-white p-4 rounded">
                <div className="float-left w-24 h-16 bg-blue-500 text-white p-2 rounded mr-4 text-sm">
                  侧边栏
                </div>
                <div className="overflow-hidden">
                  <div className="bg-gray-100 p-3 rounded">主要内容区域</div>
                </div>
                <div className="clear-both"></div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded border">
              <h4 className="font-semibold mb-2 text-green-800">✅ 使用 Flexbox（推荐）</h4>
              <div className="bg-white p-4 rounded">
                <div className="flex gap-4">
                  <div className="w-24 h-16 bg-blue-500 text-white p-2 rounded text-sm flex items-center justify-center">
                    侧边栏
                  </div>
                  <div className="flex-1 bg-gray-100 p-3 rounded flex items-center">
                    主要内容区域
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'grid-alternative':
        return (
          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded border">
              <h4 className="font-semibold mb-2 text-red-800">❌ 使用 Float（复杂）</h4>
              <div className="bg-white p-4 rounded">
                <div className="float-left w-1/4 bg-blue-500 text-white p-2 rounded mr-4 text-sm">
                  导航
                </div>
                <div className="float-right w-1/4 bg-green-500 text-white p-2 rounded ml-4 text-sm">
                  侧边栏
                </div>
                <div className="overflow-hidden bg-gray-100 p-2 rounded text-sm">
                  主要内容
                </div>
                <div className="clear-both"></div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded border">
              <h4 className="font-semibold mb-2 text-green-800">✅ 使用 Grid（简洁）</h4>
              <div className="bg-white p-4 rounded">
                <div className="grid grid-cols-4 gap-4 h-16">
                  <div className="bg-blue-500 text-white p-2 rounded text-sm flex items-center justify-center">
                    导航
                  </div>
                  <div className="col-span-2 bg-gray-100 p-2 rounded text-sm flex items-center justify-center">
                    主要内容
                  </div>
                  <div className="bg-green-500 text-white p-2 rounded text-sm flex items-center justify-center">
                    侧边栏
                  </div>
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tailwind CSS Float 和 Clear 教程
          </h1>
          <p className="text-lg text-gray-600">
            学习浮动和清除浮动的用法，以及现代替代方案
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
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-50 shadow'
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
              <div key={index} className="border-l-4 border-orange-400 pl-6">
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
                  {renderDemo(example)}
                </div>
              </div>
            ))}
          </div>

          {/* Float 和 Clear 类名参考 */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-4">📋 类名参考</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Float 浮动</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <code className="bg-blue-100 px-2 py-1 rounded text-sm font-mono">float-left</code>
                    <span className="text-sm text-gray-600">向左浮动</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-blue-100 px-2 py-1 rounded text-sm font-mono">float-right</code>
                    <span className="text-sm text-gray-600">向右浮动</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-blue-100 px-2 py-1 rounded text-sm font-mono">float-none</code>
                    <span className="text-sm text-gray-600">取消浮动</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Clear 清除浮动</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <code className="bg-blue-100 px-2 py-1 rounded text-sm font-mono">clear-left</code>
                    <span className="text-sm text-gray-600">清除左浮动</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-blue-100 px-2 py-1 rounded text-sm font-mono">clear-right</code>
                    <span className="text-sm text-gray-600">清除右浮动</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-blue-100 px-2 py-1 rounded text-sm font-mono">clear-both</code>
                    <span className="text-sm text-gray-600">清除所有浮动</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-blue-100 px-2 py-1 rounded text-sm font-mono">clear-none</code>
                    <span className="text-sm text-gray-600">不清除浮动</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 实用技巧和注意事项 */}
          <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
            <h3 className="text-lg font-bold text-yellow-800 mb-4">⚠️ 注意事项和最佳实践</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-yellow-100 p-3 rounded border-l-4 border-yellow-400">
                <h4 className="font-semibold mb-1">容器高度塌陷问题</h4>
                <p>当容器内的所有子元素都浮动时，容器的高度会变为 0。解决方案：在容器上添加 <code className="bg-yellow-200 px-1 rounded">overflow-hidden</code> 或使用清除浮动技巧。</p>
              </div>
              
              <div className="bg-blue-100 p-3 rounded border-l-4 border-blue-400">
                <h4 className="font-semibold mb-1">现代替代方案</h4>
                <p>在现代开发中，推荐使用 Flexbox 或 Grid 来替代 Float 布局，它们更灵活、更可预测，且更容易维护。</p>
              </div>
              
              <div className="bg-green-100 p-3 rounded border-l-4 border-green-400">
                <h4 className="font-semibold mb-1">适用场景</h4>
                <p>Float 主要适用于文字环绕图片的场景。对于复杂的布局需求，建议使用更现代的布局方法。</p>
              </div>
            </div>
          </div>

          {/* Next.js 中的使用示例 */}
          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-lg font-bold text-green-800 mb-4">🚀 Next.js 中的使用</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`// components/Article.js - 创建文章组件
export default function Article({ title, content, image }) {
  return (
    <article className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      
      {/* 传统的图片环绕文字布局 */}
      <div className="prose">
        {image && (
          <img
            src={image}
            alt=""
            className="float-left w-48 h-32 object-cover rounded mr-6 mb-4"
          />
        )}
        
        <div className="text-gray-700 leading-relaxed">
          {content}
        </div>
        
        {/* 确保后续内容不受浮动影响 */}
        <div className="clear-both pt-4">
          <h2 className="text-xl font-bold">相关文章</h2>
          {/* 更多内容... */}
        </div>
      </div>
    </article>
  );
}

// 现代替代方案 - 使用 Grid
export function ModernArticle({ title, content, image }) {
  return (
    <article className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      
      {/* 使用 Grid 实现更灵活的布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-6">
        {image && (
          <img
            src={image}
            alt=""
            className="w-full h-48 lg:h-64 object-cover rounded"
          />
        )}
        
        <div className="text-gray-700 leading-relaxed">
          {content}
        </div>
      </div>
    </article>
  );
}

// pages/blog/[slug].js 或 app/blog/[slug]/page.js - 博客页面
export default function BlogPost() {
  // 示例数据
  const post = {
    title: "探索现代网页设计",
    content: "这里是文章内容...",
    image: "/images/article-image.jpg"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 直接在页面中使用浮动布局 */}
      <article className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
        
        <div className="prose">
          <img
            src={post.image}
            alt=""
            className="float-left w-48 h-32 object-cover rounded mr-6 mb-4"
          />
          
          <div className="text-gray-700 leading-relaxed">
            <p>在现代网页设计中，我们经常需要实现文字环绕图片的效果...</p>
            <p>浮动布局的优势在于它能够创建自然的文字流动效果...</p>
          </div>
          
          <div className="clear-both pt-4">
            <h2 className="text-xl font-bold">相关文章</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded shadow">相关文章 1</div>
              <div className="bg-white p-4 rounded shadow">相关文章 2</div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}`}
            </pre>
          </div>

          {/* 清除浮动技巧 */}
          <div className="mt-8 p-6 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-bold text-purple-800 mb-4">🛠️ 清除浮动的常用技巧</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold mb-2">1. 使用 clear-both</h4>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  &lt;div className="clear-both"&gt;&lt;/div&gt;
                </code>
                <p className="text-sm text-gray-600 mt-1">在浮动元素后添加一个清除浮动的空元素</p>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold mb-2">2. 容器使用 overflow-hidden</h4>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  &lt;div className="overflow-hidden"&gt;...浮动元素...&lt;/div&gt;
                </code>
                <p className="text-sm text-gray-600 mt-1">让容器建立新的块级格式化上下文</p>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold mb-2">3. 使用 Flexbox（推荐）</h4>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  &lt;div className="flex gap-4"&gt;...子元素...&lt;/div&gt;
                </code>
                <p className="text-sm text-gray-600 mt-1">使用现代布局方法，避免浮动带来的问题</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}