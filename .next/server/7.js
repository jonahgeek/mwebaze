exports.ids = [7];
exports.modules = {

/***/ "./writings/introduction-to-usestate.md":
/*!**********************************************!*\
  !*** ./writings/introduction-to-usestate.md ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"---\\ntitle: \\\"Introduction to useState\\\"\\ndate: \\\"2020-03-05\\\"\\nog:\\n  description: \\\"A quick introduction to ReactJS useState method\\\"\\n  image: \\\"https://telmo.im/og/usestate.png\\\"\\nauthor:\\n  twitter: \\\"telmo\\\"\\n  name: \\\"Telmo Goncalves\\\"\\n---\\n\\nI've been working with React Hooks for some time now and I thought about writing a quick and simple post on how to use `useState`.\\n\\n---\\n\\n# Let us get started\\n\\nFirst of all, we need to import `useState` from `react`\\n\\n```js\\nimport React, { useState } from 'react'\\n```\\n\\nTake into account the following function:\\n\\n```js\\nimport React, { useState } from 'react'\\n\\nfunction Steps() {\\n  return (\\n    <div>\\n      Today I've walked 0 steps.\\n    </div>\\n  )\\n}\\n```\\n\\nAlright, we want to control the amount of steps we've walked today, for that we can use the `useState` method, let us take a look:\\n\\n```js\\nimport React, { useState } from 'react'\\n```\\n\\nTake into account the following function:\\n\\n```js\\nimport React, { useState } from 'react'\\n\\nfunction Steps() {\\n  const [steps] = useState(0)\\n\\n  return (\\n    <div>\\n      Today I've walked {steps} steps.\\n    </div>\\n  )\\n}\\n```\\n\\nWhat are we doing here?\\n\\n- Creating a new state called `steps` and its default value is `0`\\n- We're printing our `steps` value in our function\\n\\n---\\n\\n## Control\\n\\nNow we want to control the value of `steps`, with `useState` you can destructure another prop, so, currently we have `const [steps]`, we will get another method from there, let us change that to `const [steps, setSteps]`.\\n\\n\\nNow we've introduced `setSteps`, with this we can control the value of `steps`, let us create a button to handle an `onClick` function to set the steps to `10`, try it out\\n\\n```js\\nimport React, { useState } from 'react'\\n\\nfunction Steps() {\\n  const [steps, setSteps] = useState(0)\\n  const increaseSteps = () => setSteps(10)\\n\\n  return (\\n    <div>\\n      Today I've walked {steps} steps.\\n\\n      <button onClick={() => increaseSteps()}>\\n        Increase steps\\n      </button>\\n    </div>\\n  )\\n}\\n```\\n\\nWhen you click on our new `button` the steps should increase to `10`, great.\\n\\n---\\n\\n## We can do better\\n\\nWe might want to increase the steps by `1`, not `10`. You might be thinking it's as simple as changing `10` with `1`, give it a try, I'll wait.\\n\\n![](https://media.giphy.com/media/QBd2kLB5qDmysEXre9/giphy.gif)\\n\\nIt only goes to `1` right? 🤷‍♂️\\n\\nNothing to worry, we'll fix it right now, change the `increaseSteps()` function:\\n\\n```js\\nconst increaseSteps = () => setSteps(steps + 1)\\n```\\n\\nWhat are we doing? We're getting the value of `steps` and increasing it by one.\\n\\nYou can also create another button to decrease the value, similar function but using `-1`:\\n\\n```js\\nconst decreaseSteps = () => setSteps(steps - 1)\\n```\\n\\n---\\n\\n## Result\\n\\nI've spiced things a little bit with styling and an emoji 🙂\\n\\n![](https://img.onl/ivDHCX)\\n\\nYou can check the final code in this [Codesandbox](https://codesandbox.io/s/thirsty-chatelet-76cyl)\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cml0aW5ncy9pbnRyb2R1Y3Rpb24tdG8tdXNlc3RhdGUubWQ/M2FlZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLGlqQkFBa2YsV0FBVyx5RkFBeUYsV0FBVyxtQ0FBbUMsNkVBQTZFLHFLQUFxSyxXQUFXLHlGQUF5RixXQUFXLG1DQUFtQyxtRkFBbUYsTUFBTSwyQkFBMkIsMmxCQUEybEIsV0FBVyxtQ0FBbUMseUlBQXlJLE1BQU0sa0NBQWtDLHNCQUFzQiw4REFBOEQsNjhCQUE2OEIiLCJmaWxlIjoiLi93cml0aW5ncy9pbnRyb2R1Y3Rpb24tdG8tdXNlc3RhdGUubWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIi0tLVxcbnRpdGxlOiBcXFwiSW50cm9kdWN0aW9uIHRvIHVzZVN0YXRlXFxcIlxcbmRhdGU6IFxcXCIyMDIwLTAzLTA1XFxcIlxcbm9nOlxcbiAgZGVzY3JpcHRpb246IFxcXCJBIHF1aWNrIGludHJvZHVjdGlvbiB0byBSZWFjdEpTIHVzZVN0YXRlIG1ldGhvZFxcXCJcXG4gIGltYWdlOiBcXFwiaHR0cHM6Ly90ZWxtby5pbS9vZy91c2VzdGF0ZS5wbmdcXFwiXFxuYXV0aG9yOlxcbiAgdHdpdHRlcjogXFxcInRlbG1vXFxcIlxcbiAgbmFtZTogXFxcIlRlbG1vIEdvbmNhbHZlc1xcXCJcXG4tLS1cXG5cXG5JJ3ZlIGJlZW4gd29ya2luZyB3aXRoIFJlYWN0IEhvb2tzIGZvciBzb21lIHRpbWUgbm93IGFuZCBJIHRob3VnaHQgYWJvdXQgd3JpdGluZyBhIHF1aWNrIGFuZCBzaW1wbGUgcG9zdCBvbiBob3cgdG8gdXNlIGB1c2VTdGF0ZWAuXFxuXFxuLS0tXFxuXFxuIyBMZXQgdXMgZ2V0IHN0YXJ0ZWRcXG5cXG5GaXJzdCBvZiBhbGwsIHdlIG5lZWQgdG8gaW1wb3J0IGB1c2VTdGF0ZWAgZnJvbSBgcmVhY3RgXFxuXFxuYGBganNcXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcXG5gYGBcXG5cXG5UYWtlIGludG8gYWNjb3VudCB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uOlxcblxcbmBgYGpzXFxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXFxuXFxuZnVuY3Rpb24gU3RlcHMoKSB7XFxuICByZXR1cm4gKFxcbiAgICA8ZGl2PlxcbiAgICAgIFRvZGF5IEkndmUgd2Fsa2VkIDAgc3RlcHMuXFxuICAgIDwvZGl2PlxcbiAgKVxcbn1cXG5gYGBcXG5cXG5BbHJpZ2h0LCB3ZSB3YW50IHRvIGNvbnRyb2wgdGhlIGFtb3VudCBvZiBzdGVwcyB3ZSd2ZSB3YWxrZWQgdG9kYXksIGZvciB0aGF0IHdlIGNhbiB1c2UgdGhlIGB1c2VTdGF0ZWAgbWV0aG9kLCBsZXQgdXMgdGFrZSBhIGxvb2s6XFxuXFxuYGBganNcXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcXG5gYGBcXG5cXG5UYWtlIGludG8gYWNjb3VudCB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uOlxcblxcbmBgYGpzXFxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXFxuXFxuZnVuY3Rpb24gU3RlcHMoKSB7XFxuICBjb25zdCBbc3RlcHNdID0gdXNlU3RhdGUoMClcXG5cXG4gIHJldHVybiAoXFxuICAgIDxkaXY+XFxuICAgICAgVG9kYXkgSSd2ZSB3YWxrZWQge3N0ZXBzfSBzdGVwcy5cXG4gICAgPC9kaXY+XFxuICApXFxufVxcbmBgYFxcblxcbldoYXQgYXJlIHdlIGRvaW5nIGhlcmU/XFxuXFxuLSBDcmVhdGluZyBhIG5ldyBzdGF0ZSBjYWxsZWQgYHN0ZXBzYCBhbmQgaXRzIGRlZmF1bHQgdmFsdWUgaXMgYDBgXFxuLSBXZSdyZSBwcmludGluZyBvdXIgYHN0ZXBzYCB2YWx1ZSBpbiBvdXIgZnVuY3Rpb25cXG5cXG4tLS1cXG5cXG4jIyBDb250cm9sXFxuXFxuTm93IHdlIHdhbnQgdG8gY29udHJvbCB0aGUgdmFsdWUgb2YgYHN0ZXBzYCwgd2l0aCBgdXNlU3RhdGVgIHlvdSBjYW4gZGVzdHJ1Y3R1cmUgYW5vdGhlciBwcm9wLCBzbywgY3VycmVudGx5IHdlIGhhdmUgYGNvbnN0IFtzdGVwc11gLCB3ZSB3aWxsIGdldCBhbm90aGVyIG1ldGhvZCBmcm9tIHRoZXJlLCBsZXQgdXMgY2hhbmdlIHRoYXQgdG8gYGNvbnN0IFtzdGVwcywgc2V0U3RlcHNdYC5cXG5cXG5cXG5Ob3cgd2UndmUgaW50cm9kdWNlZCBgc2V0U3RlcHNgLCB3aXRoIHRoaXMgd2UgY2FuIGNvbnRyb2wgdGhlIHZhbHVlIG9mIGBzdGVwc2AsIGxldCB1cyBjcmVhdGUgYSBidXR0b24gdG8gaGFuZGxlIGFuIGBvbkNsaWNrYCBmdW5jdGlvbiB0byBzZXQgdGhlIHN0ZXBzIHRvIGAxMGAsIHRyeSBpdCBvdXRcXG5cXG5gYGBqc1xcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xcblxcbmZ1bmN0aW9uIFN0ZXBzKCkge1xcbiAgY29uc3QgW3N0ZXBzLCBzZXRTdGVwc10gPSB1c2VTdGF0ZSgwKVxcbiAgY29uc3QgaW5jcmVhc2VTdGVwcyA9ICgpID0+IHNldFN0ZXBzKDEwKVxcblxcbiAgcmV0dXJuIChcXG4gICAgPGRpdj5cXG4gICAgICBUb2RheSBJJ3ZlIHdhbGtlZCB7c3RlcHN9IHN0ZXBzLlxcblxcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaW5jcmVhc2VTdGVwcygpfT5cXG4gICAgICAgIEluY3JlYXNlIHN0ZXBzXFxuICAgICAgPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgKVxcbn1cXG5gYGBcXG5cXG5XaGVuIHlvdSBjbGljayBvbiBvdXIgbmV3IGBidXR0b25gIHRoZSBzdGVwcyBzaG91bGQgaW5jcmVhc2UgdG8gYDEwYCwgZ3JlYXQuXFxuXFxuLS0tXFxuXFxuIyMgV2UgY2FuIGRvIGJldHRlclxcblxcbldlIG1pZ2h0IHdhbnQgdG8gaW5jcmVhc2UgdGhlIHN0ZXBzIGJ5IGAxYCwgbm90IGAxMGAuIFlvdSBtaWdodCBiZSB0aGlua2luZyBpdCdzIGFzIHNpbXBsZSBhcyBjaGFuZ2luZyBgMTBgIHdpdGggYDFgLCBnaXZlIGl0IGEgdHJ5LCBJJ2xsIHdhaXQuXFxuXFxuIVtdKGh0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhL1FCZDJrTEI1cURteXNFWHJlOS9naXBoeS5naWYpXFxuXFxuSXQgb25seSBnb2VzIHRvIGAxYCByaWdodD8g8J+kt+KAjeKZgu+4j1xcblxcbk5vdGhpbmcgdG8gd29ycnksIHdlJ2xsIGZpeCBpdCByaWdodCBub3csIGNoYW5nZSB0aGUgYGluY3JlYXNlU3RlcHMoKWAgZnVuY3Rpb246XFxuXFxuYGBganNcXG5jb25zdCBpbmNyZWFzZVN0ZXBzID0gKCkgPT4gc2V0U3RlcHMoc3RlcHMgKyAxKVxcbmBgYFxcblxcbldoYXQgYXJlIHdlIGRvaW5nPyBXZSdyZSBnZXR0aW5nIHRoZSB2YWx1ZSBvZiBgc3RlcHNgIGFuZCBpbmNyZWFzaW5nIGl0IGJ5IG9uZS5cXG5cXG5Zb3UgY2FuIGFsc28gY3JlYXRlIGFub3RoZXIgYnV0dG9uIHRvIGRlY3JlYXNlIHRoZSB2YWx1ZSwgc2ltaWxhciBmdW5jdGlvbiBidXQgdXNpbmcgYC0xYDpcXG5cXG5gYGBqc1xcbmNvbnN0IGRlY3JlYXNlU3RlcHMgPSAoKSA9PiBzZXRTdGVwcyhzdGVwcyAtIDEpXFxuYGBgXFxuXFxuLS0tXFxuXFxuIyMgUmVzdWx0XFxuXFxuSSd2ZSBzcGljZWQgdGhpbmdzIGEgbGl0dGxlIGJpdCB3aXRoIHN0eWxpbmcgYW5kIGFuIGVtb2ppIPCfmYJcXG5cXG4hW10oaHR0cHM6Ly9pbWcub25sL2l2REhDWClcXG5cXG5Zb3UgY2FuIGNoZWNrIHRoZSBmaW5hbCBjb2RlIGluIHRoaXMgW0NvZGVzYW5kYm94XShodHRwczovL2NvZGVzYW5kYm94LmlvL3MvdGhpcnN0eS1jaGF0ZWxldC03NmN5bClcXG5cIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./writings/introduction-to-usestate.md\n");

/***/ })

};;