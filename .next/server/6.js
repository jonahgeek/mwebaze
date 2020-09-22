exports.ids = [6];
exports.modules = {

/***/ "./writings/how-to-useeffect.md":
/*!**************************************!*\
  !*** ./writings/how-to-useeffect.md ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"---\\ntitle: \\\"How to useEffect, simplified.\\\"\\ndate: \\\"2020-08-28\\\"\\nog:\\n  description: \\\"How to useEffect, a simplified guide.\\\"\\n  image: \\\"https://telmo.im/og/howtouseeffect.png\\\"\\nauthor:\\n  twitter: \\\"telmo\\\"\\n  name: \\\"Telmo Goncalves\\\"\\n---\\n\\nAlright, I've wrote about `useState` in the past, I thought about giving it a go with `useEffect`.\\n\\nIf you’re familiar with React class lifecycle methods, you can think of `useEffect` hook\\nas `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined.\\n\\n---\\n\\nIf you want to run your code once when the component mounts we can do:\\n\\n```js\\nuseEffect(() => {\\n  // Your code\\n}, [])\\n```\\n\\nBy using `[]` we're _telling_ the code inside `useEffect` to run only once.\\n\\n---\\n\\nWhat about if we want to run the code on every render of the component? **Careful** that\\nthis can be tricky and I don't really advice using it.\\n\\n```js\\nuseEffect(() => {\\n  // Your code\\n})\\n```\\n\\nNotice that we removed the `[]`, this way our code will run every render.\\n\\n---\\n\\n## useState & useEffect\\n\\nLet us combine both `useState` and `useEffect`:\\n\\n```js\\n// Here we are setting the `online` state to false\\nconst [online, setOnline] = useState(false)\\n```\\n\\nBuild a button to trigger a change on the `online` state:\\n\\n```html\\n<button onClick={() => setOnline(!online)}>\\n  Change status\\n</button>\\n```\\n\\nNow let us say that we want to trigger a simple `console.log` whenever\\nthe state `online` changes, we can use `useEffect` for that:\\n\\n```js\\nuseEffect(() => {\\n  if (online) {\\n    console.log('User is now online!')\\n  } else {\\n    console.log('User is now offline!')\\n  }\\n}, [online])\\n```\\n\\nBy using `online` inside `[]`, the code inside `useEffect` will run every\\nsingle time there's a change of the `online` state.\\n\\n---\\n\\nThis is a pretty simple explanation of how `useEffect` works. If you want to play with\\nthis code just check this [codesandbox](https://codesandbox.io/s/priceless-dijkstra-xs058).\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cml0aW5ncy9ob3ctdG8tdXNlZWZmZWN0Lm1kPzcwOTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSwyckJBQTRuQixtQkFBbUIsZ1JBQWdSLG1CQUFtQixrWEFBa1gseUJBQXlCLHNNQUFzTSxpQkFBaUIsNkNBQTZDLE9BQU8sOENBQThDLEdBQUcsbVZBQW1WIiwiZmlsZSI6Ii4vd3JpdGluZ3MvaG93LXRvLXVzZWVmZmVjdC5tZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiLS0tXFxudGl0bGU6IFxcXCJIb3cgdG8gdXNlRWZmZWN0LCBzaW1wbGlmaWVkLlxcXCJcXG5kYXRlOiBcXFwiMjAyMC0wOC0yOFxcXCJcXG5vZzpcXG4gIGRlc2NyaXB0aW9uOiBcXFwiSG93IHRvIHVzZUVmZmVjdCwgYSBzaW1wbGlmaWVkIGd1aWRlLlxcXCJcXG4gIGltYWdlOiBcXFwiaHR0cHM6Ly90ZWxtby5pbS9vZy9ob3d0b3VzZWVmZmVjdC5wbmdcXFwiXFxuYXV0aG9yOlxcbiAgdHdpdHRlcjogXFxcInRlbG1vXFxcIlxcbiAgbmFtZTogXFxcIlRlbG1vIEdvbmNhbHZlc1xcXCJcXG4tLS1cXG5cXG5BbHJpZ2h0LCBJJ3ZlIHdyb3RlIGFib3V0IGB1c2VTdGF0ZWAgaW4gdGhlIHBhc3QsIEkgdGhvdWdodCBhYm91dCBnaXZpbmcgaXQgYSBnbyB3aXRoIGB1c2VFZmZlY3RgLlxcblxcbklmIHlvdeKAmXJlIGZhbWlsaWFyIHdpdGggUmVhY3QgY2xhc3MgbGlmZWN5Y2xlIG1ldGhvZHMsIHlvdSBjYW4gdGhpbmsgb2YgYHVzZUVmZmVjdGAgaG9va1xcbmFzIGBjb21wb25lbnREaWRNb3VudGAsIGBjb21wb25lbnREaWRVcGRhdGVgLCBhbmQgYGNvbXBvbmVudFdpbGxVbm1vdW50YCBjb21iaW5lZC5cXG5cXG4tLS1cXG5cXG5JZiB5b3Ugd2FudCB0byBydW4geW91ciBjb2RlIG9uY2Ugd2hlbiB0aGUgY29tcG9uZW50IG1vdW50cyB3ZSBjYW4gZG86XFxuXFxuYGBganNcXG51c2VFZmZlY3QoKCkgPT4ge1xcbiAgLy8gWW91ciBjb2RlXFxufSwgW10pXFxuYGBgXFxuXFxuQnkgdXNpbmcgYFtdYCB3ZSdyZSBfdGVsbGluZ18gdGhlIGNvZGUgaW5zaWRlIGB1c2VFZmZlY3RgIHRvIHJ1biBvbmx5IG9uY2UuXFxuXFxuLS0tXFxuXFxuV2hhdCBhYm91dCBpZiB3ZSB3YW50IHRvIHJ1biB0aGUgY29kZSBvbiBldmVyeSByZW5kZXIgb2YgdGhlIGNvbXBvbmVudD8gKipDYXJlZnVsKiogdGhhdFxcbnRoaXMgY2FuIGJlIHRyaWNreSBhbmQgSSBkb24ndCByZWFsbHkgYWR2aWNlIHVzaW5nIGl0LlxcblxcbmBgYGpzXFxudXNlRWZmZWN0KCgpID0+IHtcXG4gIC8vIFlvdXIgY29kZVxcbn0pXFxuYGBgXFxuXFxuTm90aWNlIHRoYXQgd2UgcmVtb3ZlZCB0aGUgYFtdYCwgdGhpcyB3YXkgb3VyIGNvZGUgd2lsbCBydW4gZXZlcnkgcmVuZGVyLlxcblxcbi0tLVxcblxcbiMjIHVzZVN0YXRlICYgdXNlRWZmZWN0XFxuXFxuTGV0IHVzIGNvbWJpbmUgYm90aCBgdXNlU3RhdGVgIGFuZCBgdXNlRWZmZWN0YDpcXG5cXG5gYGBqc1xcbi8vIEhlcmUgd2UgYXJlIHNldHRpbmcgdGhlIGBvbmxpbmVgIHN0YXRlIHRvIGZhbHNlXFxuY29uc3QgW29ubGluZSwgc2V0T25saW5lXSA9IHVzZVN0YXRlKGZhbHNlKVxcbmBgYFxcblxcbkJ1aWxkIGEgYnV0dG9uIHRvIHRyaWdnZXIgYSBjaGFuZ2Ugb24gdGhlIGBvbmxpbmVgIHN0YXRlOlxcblxcbmBgYGh0bWxcXG48YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9ubGluZSghb25saW5lKX0+XFxuICBDaGFuZ2Ugc3RhdHVzXFxuPC9idXR0b24+XFxuYGBgXFxuXFxuTm93IGxldCB1cyBzYXkgdGhhdCB3ZSB3YW50IHRvIHRyaWdnZXIgYSBzaW1wbGUgYGNvbnNvbGUubG9nYCB3aGVuZXZlclxcbnRoZSBzdGF0ZSBgb25saW5lYCBjaGFuZ2VzLCB3ZSBjYW4gdXNlIGB1c2VFZmZlY3RgIGZvciB0aGF0OlxcblxcbmBgYGpzXFxudXNlRWZmZWN0KCgpID0+IHtcXG4gIGlmIChvbmxpbmUpIHtcXG4gICAgY29uc29sZS5sb2coJ1VzZXIgaXMgbm93IG9ubGluZSEnKVxcbiAgfSBlbHNlIHtcXG4gICAgY29uc29sZS5sb2coJ1VzZXIgaXMgbm93IG9mZmxpbmUhJylcXG4gIH1cXG59LCBbb25saW5lXSlcXG5gYGBcXG5cXG5CeSB1c2luZyBgb25saW5lYCBpbnNpZGUgYFtdYCwgdGhlIGNvZGUgaW5zaWRlIGB1c2VFZmZlY3RgIHdpbGwgcnVuIGV2ZXJ5XFxuc2luZ2xlIHRpbWUgdGhlcmUncyBhIGNoYW5nZSBvZiB0aGUgYG9ubGluZWAgc3RhdGUuXFxuXFxuLS0tXFxuXFxuVGhpcyBpcyBhIHByZXR0eSBzaW1wbGUgZXhwbGFuYXRpb24gb2YgaG93IGB1c2VFZmZlY3RgIHdvcmtzLiBJZiB5b3Ugd2FudCB0byBwbGF5IHdpdGhcXG50aGlzIGNvZGUganVzdCBjaGVjayB0aGlzIFtjb2Rlc2FuZGJveF0oaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL3ByaWNlbGVzcy1kaWprc3RyYS14czA1OCkuXFxuXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./writings/how-to-useeffect.md\n");

/***/ })

};;