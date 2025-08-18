"use client"
import { useState } from 'react';

export default function TailwindFontTutorial() {
  const [activeSection, setActiveSection] = useState('family');

  const sections = {
    family: {
      title: 'Font Family 字体家族',
      description: '控制文本的字体系列，包括无衬线、衬线、等宽字体等',
      examples: [
        { 
          class: 'font-sans', 
          desc: '无衬线字体 (默认)',
          text: 'The quick brown fox jumps over the lazy dog. 快速的棕色狐狸跳过懒狗。'
        },
        { 
          class: 'font-serif', 
          desc: '衬线字体',
          text: 'The quick brown fox jumps over the lazy dog. 快速的棕色狐狸跳过懒狗。'
        },
        { 
          class: 'font-mono', 
          desc: '等宽字体',
          text: 'The quick brown fox jumps over the lazy dog. console.log("Hello World");'
        }
      ]
    },
    weight: {
      title: 'Font Weight 字重',
      description: '控制文本的粗细程度，从极细到极粗',
      examples: [
        { class: 'font-thin', desc: '极细 (100)', text: 'Font Weight Thin - 极细字重' },
        { class: 'font-extralight', desc: '特细 (200)', text: 'Font Weight Extra Light - 特细字重' },
        { class: 'font-light', desc: '细 (300)', text: 'Font Weight Light - 细字重' },
        { class: 'font-normal', desc: '正常 (400)', text: 'Font Weight Normal - 正常字重' },
        { class: 'font-medium', desc: '中等 (500)', text: 'Font Weight Medium - 中等字重' },
        { class: 'font-semibold', desc: '半粗 (600)', text: 'Font Weight Semibold - 半粗字重' },
        { class: 'font-bold', desc: '粗 (700)', text: 'Font Weight Bold - 粗字重' },
        { class: 'font-extrabold', desc: '特粗 (800)', text: 'Font Weight Extra Bold - 特粗字重' },
        { class: 'font-black', desc: '极粗 (900)', text: 'Font Weight Black - 极粗字重' }
      ]
    },
    size: {
      title: 'Font Size 字体大小',
      description: '控制文本的大小，从极小到极大',
      examples: [
        { class: 'text-xs', desc: '极小 (12px)', text: 'Extra Small Text 极小文本' },
        { class: 'text-sm', desc: '小 (14px)', text: 'Small Text 小文本' },
        { class: 'text-base', desc: '基础 (16px)', text: 'Base Text 基础文本' },
        { class: 'text-lg', desc: '大 (18px)', text: 'Large Text 大文本' },
        { class: 'text-xl', desc: '特大 (20px)', text: 'Extra Large Text 特大文本' },
        { class: 'text-2xl', desc: '2倍大 (24px)', text: '2X Large Text 2倍大文本' },
        { class: 'text-3xl', desc: '3倍大 (30px)', text: '3X Large Text 3倍大文本' },
        { class: 'text-4xl', desc: '4倍大 (36px)', text: '4X Large Text' },
        { class: 'text-5xl', desc: '5倍大 (48px)', text: '5X Large Text' },
        { class: 'text-6xl', desc: '6倍大 (60px)', text: '6X Large' }
      ]
    },
    style: {
      title: 'Font Style 字体样式',
      description: '控制文本的样式，包括斜体和正常样式',
      examples: [
        { class: 'italic', desc: '斜体', text: 'Italic text style - 斜体文本样式' },
        { class: 'not-italic', desc: '非斜体 (重置)', text: 'Not italic text style - 非斜体文本样式' }
      ]
    },
    spacing: {
      title: 'Letter & Line Spacing',
      description: '控制字母间距和行高',
      examples: [
        { class: 'tracking-tighter', desc: '字母间距最紧', text: 'Tighter letter spacing 更紧的字母间距' },
        { class: 'tracking-tight', desc: '字母间距紧', text: 'Tight letter spacing 紧的字母间距' },
        { class: 'tracking-normal', desc: '字母间距正常', text: 'Normal letter spacing 正常的字母间距' },
        { class: 'tracking-wide', desc: '字母间距宽', text: 'Wide letter spacing 宽的字母间距' },
        { class: 'tracking-wider', desc: '字母间距更宽', text: 'Wider letter spacing 更宽的字母间距' },
        { class: 'tracking-widest', desc: '字母间距最宽', text: 'Widest letter spacing 最宽的字母间距' }
      ]
    },
    lineHeight: {
      title: 'Line Height 行高',
      description: '控制文本行与行之间的间距',
      examples: [
        { 
          class: 'leading-none', 
          desc: '无行高 (1)', 
          text: 'This is a multi-line text example to demonstrate line height effects. 这是一个多行文本示例，用于演示行高效果。Line height controls the vertical spacing between lines of text.',
          isMultiLine: true
        },
        { 
          class: 'leading-tight', 
          desc: '紧行高 (1.25)', 
          text: 'This is a multi-line text example to demonstrate line height effects. 这是一个多行文本示例，用于演示行高效果。Line height controls the vertical spacing between lines of text.',
          isMultiLine: true
        },
        { 
          class: 'leading-normal', 
          desc: '正常行高 (1.5)', 
          text: 'This is a multi-line text example to demonstrate line height effects. 这是一个多行文本示例，用于演示行高效果。Line height controls the vertical spacing between lines of text.',
          isMultiLine: true
        },
        { 
          class: 'leading-relaxed', 
          desc: '宽松行高 (1.625)', 
          text: 'This is a multi-line text example to demonstrate line height effects. 这是一个多行文本示例，用于演示行高效果。Line height controls the vertical spacing between lines of text.',
          isMultiLine: true
        },
        { 
          class: 'leading-loose', 
          desc: '松散行高 (2)', 
          text: 'This is a multi-line text example to demonstrate line height effects. 这是一个多行文本示例，用于演示行高效果。Line height controls the vertical spacing between lines of text.',
          isMultiLine: true
        }
      ]
    }
  } as any;

  const fontClasses = {
    family: ['font-sans', 'font-serif', 'font-mono'],
    weight: ['font-thin', 'font-extralight', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold', 'font-black'],
    size: ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl', 'text-8xl', 'text-9xl'],
    tracking: ['tracking-tighter', 'tracking-tight', 'tracking-normal', 'tracking-wide', 'tracking-wider', 'tracking-widest'],
    leading: ['leading-none', 'leading-tight', 'leading-snug', 'leading-normal', 'leading-relaxed', 'leading-loose']
  };

  const renderExample = (example :any) => {
    const { class: className, text, isMultiLine } = example;
    
    return (
      <div className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-sm">
        <p className={`${className} ${isMultiLine ? 'text-sm max-w-md' : ''}`}>
          {text}
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tailwind CSS 字体家族和字重教程
          </h1>
          <p className="text-lg text-gray-600">
            掌握字体家族、字重、大小、样式和间距的完整控制
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
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-indigo-50 shadow'
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
          <div className="space-y-6">
            {sections[activeSection].examples.map((example : any, index : any) => (
              <div key={index} className="border-l-4 border-indigo-400 pl-6">
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
                  {renderExample(example)}
                </div>
              </div>
            ))}
          </div>

          {/* 字体类名参考 */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-4">🎨 字体类名参考</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(fontClasses).map(([category, classes]) => (
                <div key={category}>
                  <h4 className="font-semibold text-gray-700 mb-2 capitalize">
                    {category === 'family' ? '字体家族' : 
                     category === 'weight' ? '字重' :
                     category === 'size' ? '大小' :
                     category === 'tracking' ? '字母间距' :
                     category === 'leading' ? '行高' : category}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {classes.map((cls) => (
                      <span key={cls} className="bg-blue-100 px-2 py-1 rounded text-xs font-mono">
                        {cls}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 实用技巧 */}
          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-lg font-bold text-green-800 mb-4">💡 实用技巧</h3>
            <div className="space-y-3">
              {activeSection === 'family' && (
                <>
                  <p>• <code>font-sans</code> 是默认字体，适合大部分场景</p>
                  <p>• <code>font-serif</code> 适合长文阅读和正式文档</p>
                  <p>• <code>font-mono</code> 用于代码显示和数据表格</p>
                  <p>• 可以通过配置文件自定义字体家族</p>
                </>
              )}
              {activeSection === 'weight' && (
                <>
                  <p>• 标题通常使用 <code>font-bold</code> 或 <code>font-semibold</code></p>
                  <p>• 正文使用 <code>font-normal</code> 保持可读性</p>
                  <p>• 强调文本可使用 <code>font-medium</code></p>
                  <p>• 注意不是所有字体都支持所有字重</p>
                </>
              )}
              {activeSection === 'size' && (
                <>
                  <p>• <code>text-base</code> (16px) 是浏览器默认大小</p>
                  <p>• 移动端建议最小使用 <code>text-sm</code></p>
                  <p>• 标题层级: H1(text-4xl) &gt; H2(text-3xl) &gt; H3(text-2xl)</p>
                  <p>• 响应式设计中可以使用 <code>md:text-lg lg:text-xl</code></p>
                </>
              )}
              {activeSection === 'style' && (
                <>
                  <p>• <code>italic</code> 用于强调或引用文本</p>
                  <p>• <code>not-italic</code> 用于重置继承的斜体样式</p>
                  <p>• 中文字体的斜体效果通常不明显</p>
                </>
              )}
              {activeSection === 'spacing' && (
                <>
                  <p>• 标题可以使用 <code>tracking-tight</code> 提升视觉效果</p>
                  <p>• 大写字母文本建议使用 <code>tracking-wide</code></p>
                  <p>• 小字体可以适当增加字母间距提升可读性</p>
                </>
              )}
              {activeSection === 'lineHeight' && (
                <>
                  <p>• 正文建议使用 <code>leading-normal</code> 或 <code>leading-relaxed</code></p>
                  <p>• 标题可以使用 <code>leading-tight</code> 节省空间</p>
                  <p>• 诗歌或代码可以使用 <code>leading-loose</code></p>
                </>
              )}
            </div>
          </div>

          {/* 字体配置示例 */}
          <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
            <h3 className="text-lg font-bold text-yellow-800 mb-4">⚙️ 自定义字体配置</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'chinese': ['PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'sans-serif'],
        'english': ['Inter', 'system-ui', 'sans-serif'],
        'brand': ['Montserrat', 'sans-serif'],
        'code': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'xxs': '0.625rem',
        '10xl': '10rem',
      },
      fontWeight: {
        'extra-light': 200,
        'extra-bold': 800,
      },
      letterSpacing: {
        'extra-wide': '0.2em',
      },
      lineHeight: {
        'extra-tight': 1.1,
        'extra-loose': 2.5,
      }
    }
  }
}`}
            </pre>
          </div>

          {/* 最佳实践 */}
          <div className="mt-8 p-6 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-bold text-purple-800 mb-4">🎯 最佳实践</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">字体选择原则</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>可读性优先</strong>：确保文本在各种设备上都清晰可读</li>
                  <li>• <strong>性能考虑</strong>：避免加载过多自定义字体</li>
                  <li>• <strong>品牌一致性</strong>：建立统一的字体体系</li>
                  <li>• <strong>层次分明</strong>：通过字重和大小建立视觉层级</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">响应式字体</h4>
                <div className="bg-purple-100 p-3 rounded text-sm font-mono">
                  <p>className="text-sm md:text-base lg:text-lg"</p>
                  <p>className="font-normal md:font-medium"</p>
                  <p>className="leading-tight md:leading-normal"</p>
                </div>
              </div>
            </div>
          </div>

          {/* 实际应用示例 */}
          <div className="mt-8 p-6 bg-indigo-50 rounded-lg">
            <h3 className="text-lg font-bold text-indigo-800 mb-4">🚀 实际应用示例</h3>
            <div className="bg-white p-6 rounded-lg border">
              <div className="space-y-6">
                {/* 文章标题样式 */}
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h1 className="text-3xl font-bold text-gray-800 leading-tight mb-2">
                    文章标题样式演示
                  </h1>
                  <p className="text-sm text-gray-500 font-medium tracking-wide">
                    ARTICLE TITLE DEMONSTRATION
                  </p>
                </div>

                {/* 段落文本样式 */}
                <div className="prose max-w-none">
                  <p className="text-base font-normal leading-relaxed text-gray-700 mb-4">
                    这是一个标准的段落文本示例，使用了合适的字体大小、字重和行高来确保最佳的阅读体验。
                    文字间距和行间距都经过精心调整，既不会显得过于紧密，也不会过于松散。
                  </p>
                  <p className="text-lg font-light leading-loose text-gray-600 italic">
                    这是一个引用样式的文本，使用了较大的字号、较轻的字重和斜体样式来突出显示。
                  </p>
                </div>

                {/* 代码展示样式 */}
                <div className="bg-gray-900 p-4 rounded">
                  <code className="font-mono text-sm text-green-400 leading-relaxed">
                    const example = "这是代码字体展示";<br/>
                    console.log(example);
                  </code>
                </div>

                {/* 卡片标题和描述 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 tracking-tight">
                    卡片标题
                  </h3>
                  <p className="text-sm text-gray-600 font-medium leading-normal">
                    卡片描述文本，使用中等字重和正常行高，确保信息清晰传达。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}