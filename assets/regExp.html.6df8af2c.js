import{_ as s,o as n,c as a,d as e}from"./app.6d0bab28.js";const t={},p=e(`<h1 id="\u6B63\u5219\u8868\u8FBE\u5F0F-g\u4FEE\u9970\u7B26-\u8E29\u5751\u5206\u4EAB" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u8868\u8FBE\u5F0F-g\u4FEE\u9970\u7B26-\u8E29\u5751\u5206\u4EAB" aria-hidden="true">#</a> \u6B63\u5219\u8868\u8FBE\u5F0F\uFF08/g\u4FEE\u9970\u7B26\uFF09\u8E29\u5751\u5206\u4EAB</h1><hr><p>\u5728\u4E66\u5199\u6B63\u5219\u8868\u8FBE\u5F0F\u65F6\uFF0C\u6709\u4E00\u4E2A\u5E38\u7528\u7684\u7B26\u53F7&#39;/g&#39;\u4EE3\u8868\u5728\u8BE5\u5B57\u7B26\u4E32\u4E2D\u8FDB\u884C\u5168\u5C40\u641C\u7D22\uFF0C\u5E38\u7528\u65B9\u6CD5test()\u6216\u5728String.replace()\u4E2D\u505A\u5339\u914D\u66FF\u6362\u6587\u672C\uFF0C \u975E\u5E38\u7684\u65B9\u4FBF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> regExp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">ab</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u67D0\u79CD\u9700\u6C42\u4E0B\uFF0C\u6211\u5BF9\u8FD9\u4E2A\u6B63\u5219\u8C03\u7528\u4E86\u4E24\u6B21</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>regExp<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>regExp<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\u4F1A\u662F\u4EC0\u4E48\uFF0C\u4E24\u6B21true\uFF1F\u521A\u5F00\u59CB\u6211\u4E5F\u662F\u8FD9\u4E48\u8BA4\u4E3A\u7684\uFF0C\u6267\u884C\u4E00\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F97\u5230\u4E86</span>
<span class="token boolean">true</span>
<span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0\u6B64\u9519\u8BEF\uFF0C\u6839\u636Emdn\u6587\u6863\u4E2D\u5BF9\u6B63\u5219\u8868\u8FBE\u5F0F\u7684lastIndex\u5C5E\u6027\u7684\u63CF\u8FF0</p><blockquote><p>\u53EA\u6709\u6B63\u5219\u8868\u8FBE\u5F0F\u4F7F\u7528\u4E86\u8868\u793A\u5168\u5C40\u68C0\u7D22\u7684 &quot;g&quot; \u6216\u8005\u7C98\u6027\u68C0\u7D22\u7684 &quot;y&quot; \u6807\u5FD7\u65F6\uFF0C\u8BE5\u5C5E\u6027\u624D\u4F1A\u8D77\u4F5C\u7528\u3002\u6B64\u65F6\u5E94\u7528\u4E0B\u9762\u7684\u89C4\u5219\uFF1A<br></p><ul><li>\u5982\u679C lastIndex \u5927\u4E8E\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u5219 regexp.test \u548C regexp.exec \u5C06\u4F1A\u5339\u914D\u5931\u8D25\uFF0C\u7136\u540E lastIndex \u88AB\u8BBE\u7F6E\u4E3A 0\u3002</li><li>\u5982\u679C lastIndex \u7B49\u4E8E\u6216\u5C0F\u4E8E\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u5219\u8BE5\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u4ECE lastIndex \u4F4D\u7F6E\u5F00\u59CB\u7684\u5B57\u7B26\u4E32\u3002 <ul><li>\u5982\u679C regexp.test \u548C regexp.exec \u5339\u914D\u6210\u529F\uFF0ClastIndex \u4F1A\u88AB\u8BBE\u7F6E\u4E3A\u7D27\u968F\u6700\u8FD1\u4E00\u6B21\u6210\u529F\u5339\u914D\u7684\u4E0B\u4E00\u4E2A\u4F4D\u7F6E\u3002</li><li>\u5982\u679C regexp.test \u548C regexp.exec \u5339\u914D\u5931\u8D25\uFF0ClastIndex \u4F1A\u88AB\u8BBE\u7F6E\u4E3A 0</li></ul></li></ul></blockquote><p>\u7531\u8FD9\u53E5\u8BDD</p><blockquote><p>\u5982\u679C regexp.test \u548C regexp.exec \u5339\u914D\u6210\u529F\uFF0ClastIndex \u4F1A\u88AB\u8BBE\u7F6E\u4E3A\u7D27\u968F\u6700\u8FD1\u4E00\u6B21\u6210\u529F\u5339\u914D\u7684\u4E0B\u4E00\u4E2A\u4F4D\u7F6E\u3002</p></blockquote><p>\u53EF\u4EE5\u5F97\u5230\uFF0C\u5728\u7B2C\u4E00\u6B21\u8C03\u7528\u7ED3\u675F\u5E76\u5339\u914D\u6210\u529F\u540E\uFF0C\u4E0B\u6807\uFF08lastIndex\uFF09\u5E76\u4E0D\u4F1A\u56DE\u52300\uFF0C\u6D4B\u8BD5\u4E00\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token boolean">true</span>
<span class="token number">2</span>
<span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u5728\u7B2C\u4E00\u6B21\u8C03\u7528test()\u540E\uFF0ClastIndex\u505C\u5728\u4E862\u8FD9\u4E2A\u4F4D\u7F6E\uFF0C\u4E5F\u5C31\u662F\u4E0B\u4E00\u6B21\u8C03\u7528test()\u65F6\uFF0ClastIndex\u5C06\u4ECE2\u5F00\u59CB\uFF0C \u6240\u4EE5\u7B2C\u4E8C\u6B21\u8C03\u7528test()\u65F6\u4F1A\u5F97\u5230false\uFF0C\u5982\u679C\u60F3\u8981\u8FD4\u56DE\u7ED3\u679C\u90FD\u662Ftrue\uFF0C\u90A3\u4E48\u53EF\u4EE5\u624B\u52A8\u5C06lastIndex\u91CD\u7F6E\u4E3A0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>regExp<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  regExp<span class="token punctuation">.</span>lastIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u6B21\u6267\u884C\u540E\uFF0C\u67E5\u770B\u6267\u884C\u7ED3\u679C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token boolean">true</span>
<span class="token number">0</span>
<span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u6B64\u53EF\u89C1\uFF0C\u4E0B\u6807\u53C8\u56DE\u5230\u4E860\uFF0C\u7B2C\u4E8C\u6B21\u8C03\u7528test()\u5219\u5339\u914D\u6210\u529F</p><hr><p>\u5982\u679C\u60F3\u4E0D\u7528\u591A\u6B21\u8C03\u7528\u65F6\u90FD\u8981\u91CD\u7F6E\u4E3A0\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u4E0D\u4F7F\u7528/g\u6216/y\u7B26\u53F7\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u8868\u8FBE\u5F0F\u653E\u5728\u51FD\u6570\u5185\uFF0C \u4F7F\u51FD\u6570\u6BCF\u6B21\u8C03\u7528\u65F6\u90FD\u662F\u91CD\u65B0\u5B9A\u4E49\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C \u4E5F\u5C31\u4E0D\u5B58\u5728\u4E0B\u6807\u8FD8\u662F\u4E0A\u4E00\u6B21\u8C03\u7528\u7684\u60C5\u51B5</p>`,21),l=[p];function c(i,o){return n(),a("div",null,l)}var u=s(t,[["render",c],["__file","regExp.html.vue"]]);export{u as default};