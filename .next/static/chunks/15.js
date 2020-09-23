(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[15],{

/***/ "./writings/persist-dark-mode-with-react.md":
/*!**************************************************!*\
  !*** ./writings/persist-dark-mode-with-react.md ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"---\\ntitle: \\\"Persist Dark Mode with React\\\"\\ndate: \\\"2020-05-10\\\"\\nog:\\n  description: \\\"How to persist dark mode with ReactJS\\\"\\n  image: \\\"https://telmo.im/og/persistdarkmodereact.png\\\"\\nauthor:\\n  twitter: \\\"telmo\\\"\\n  name: \\\"Telmo Goncalves\\\"\\n---\\n\\n> If you're the type of person that likes to go directly to the code here's the [CodesandBox Link](https://codesandbox.io/s/affectionate-varahamihira-u5tvt?file=/src/App.js)\\n\\nBefore we start I suggest you take a look at [this post](https://telmo.im/writings/dark-light-mode-css-javascript), we'll be using that same approach but with React.\\n\\n<br>\\n\\nLet us get started with a simple React component called `App`:\\n\\n```jsx\\nimport React from \\\"react\\\";\\n\\nimport \\\"./styles.css\\\";\\n\\nfunction App() {\\n  return (\\n    <div className=\\\"App\\\">\\n      <h1>Hello stranger!</h1>\\n      <h2>Lets persist our dark theme, shall we?</h2>\\n    </div>\\n  );\\n}\\n\\nexport default App;\\n```\\n\\nNow lets use `useState` to set our default value for `darkMode`, which will be `false`:\\n\\n```js:!-1,6\\nimport React, { useState } from \\\"react\\\";\\n\\nimport \\\"./styles.css\\\";\\n\\nfunction App() {\\n  const [darkMode, setDarkMode] = useState(false);\\n\\n  // ...\\n```\\n\\nNow, lets change our `div` to include a `data-theme` attribute, we'll check if the value of `darkMode` is `true` and set a value of `dark`, otherwise it's `light`:\\n\\n\\n```jsx:!-5\\n// ...\\n\\nfunction App() {\\n  return (\\n    <div className=\\\"App\\\" data-theme={darkMode ? \\\"dark\\\" : \\\"light\\\"}>\\n      <h1>Hello stranger!</h1>\\n      <h2>Lets persist our dark theme, shall we?</h2>\\n    </div>\\n  );\\n}\\n\\n// ...\\n```\\n\\nNow if you change our `useState()` from `false` to `true` you should see that it sets the background of `.App` to black and the text color to white.\\n\\n---\\n\\n## Switch\\n\\nLet us build a switch between dark and light mode. We can start by adding a new function that sets our theme either to `light` or to `dark` mode:\\n\\n```js:7\\nimport React, { useState } from \\\"react\\\";\\n\\nimport \\\"./styles.css\\\";\\n\\nfunction App() {\\n  const [darkMode, setDarkMode] = useState(false);\\n  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);\\n\\n  // ...\\n```\\n\\nWe can still use a little trick on `darkMode ? false : true`, we can change it to `!darkMode`, what does this means?\\n\\nSince `darkMode` is a boolean we're _saying_ we want the opposite value, see the output:\\n\\n```js\\nvar darkMode = true;\\n\\ndarkMode = !darkMode; // false\\ndarkMode = !darkMode; // true\\ndarkMode = !darkMode; // false\\ndarkMode = !darkMode; // true\\n```\\n\\nWe can do this all day!\\n\\n---\\n\\n## Button Switcher\\n\\nNow that we have our `toggleDarkMode` function in place let us create a `<button>` to use it:\\n\\n```jsx:4-6\\nfunction App() {\\n  return (\\n    <div className=\\\"App\\\" data-theme={darkMode ? \\\"dark\\\" : \\\"light\\\"}>\\n      <button onClick={toggleDarkMode}>\\n        Dark mode toggler\\n      </button>\\n      <h1>Hello stranger!</h1>\\n      <h2>Lets persist our dark theme, shall we?</h2>\\n    </div>\\n  );\\n}\\n```\\n\\nIf you try it out is should work just fine, switching from `light` to `dark` mode and vice-versa. We can still use our `darkMode` state to manipulate what the button displays:\\n\\n```jsx:!-2\\n<button onClick={toggleDarkMode}>\\n  {darkMode ? \\\"Lights ON!\\\" : \\\"Lights OFF!\\\"}\\n</button>\\n```\\n\\nLet us move on.\\n\\n---\\n\\n## Persist\\n\\nThis is all good, but what if you switch to dark mode and refresh the page? We're back to light mode. Let us fix that shall we?\\n\\nFor that we'll be using React's `useEffect` and `localStorage`. First we need to import:\\n\\n```js:!-1\\nimport React, { useState, useEffect } from \\\"react\\\";\\n```\\n\\nWith `useEffect` we can run some code every time a value changes, in this case we want to run our code when `darkMode` changes:\\n\\n```js:9-11\\nimport React, { useState, useEffect } from \\\"react\\\";\\n\\nimport \\\"./styles.css\\\";\\n\\nfunction App() {\\n  const [darkMode, setDarkMode] = useState(false);\\n  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);\\n\\n  useEffect(() => {\\n    console.log(`Is in dark mode? ${darkMode}`);\\n  }, [darkMode]);\\n\\n  // ...\\n```\\n\\nIf you check the console you'll see what's happening every time we toggle dark mode. Now that we know this is working we can store our value in `localStorage`:\\n\\n```js:-2,3\\nuseEffect(() => {\\n  console.log(`Is in dark mode? ${darkMode}`);\\n  localStorage.setItem(\\\"DARK_MODE\\\", darkMode);\\n}, [darkMode]);\\n```\\n\\nAlright, all good so far, now we just need read the value of `DARK_MODE` from `localStorage` and set our default `darkMode` value:\\n\\n```js:1,!-2\\nconst storedDarkMode = localStorage.getItem(\\\"DARK_MODE\\\");\\nconst [darkMode, setDarkMode] = useState(storedDarkMode);\\n```\\n\\nGive it a try, change to dark mode and then refresh your page. Boom 💥\\n\\nThat's all, hope it helped you in some way.\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3JpdGluZ3MvcGVyc2lzdC1kYXJrLW1vZGUtd2l0aC1yZWFjdC5tZD8yNWEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWUseXdCQUEwc0IsNEJBQTRCLG9CQUFvQixrSkFBa0osR0FBRyx1QkFBdUIsZ0lBQWdJLFdBQVcsZ0JBQWdCLDRCQUE0QixvQkFBb0Isb0RBQW9ELG9PQUFvTyxxREFBcUQsZ0NBQWdDLDBHQUEwRyxHQUFHLDRXQUE0VyxXQUFXLGdCQUFnQiw0QkFBNEIsb0JBQW9CLG9EQUFvRCxzRUFBc0Usb1FBQW9RLHlCQUF5QixnQ0FBZ0MsK0JBQStCLGdDQUFnQyxzTUFBc00scURBQXFELGdDQUFnQywwQkFBMEIsZUFBZSxzSkFBc0osR0FBRyx5TkFBeU4sZUFBZSxNQUFNLDRDQUE0QyxxVEFBcVQsc0JBQXNCLGdCQUFnQix1S0FBdUssc0JBQXNCLGdCQUFnQiw0QkFBNEIsb0JBQW9CLG9EQUFvRCxzRUFBc0UsdUJBQXVCLHNDQUFzQyxTQUFTLEdBQUcsS0FBSyxjQUFjLHFOQUFxTixvQ0FBb0MsU0FBUyxHQUFHLGtEQUFrRCxHQUFHLGNBQWMsdU5BQXVOLDJEQUEyRCxpSUFBaUkiLCJmaWxlIjoiLi93cml0aW5ncy9wZXJzaXN0LWRhcmstbW9kZS13aXRoLXJlYWN0Lm1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCItLS1cXG50aXRsZTogXFxcIlBlcnNpc3QgRGFyayBNb2RlIHdpdGggUmVhY3RcXFwiXFxuZGF0ZTogXFxcIjIwMjAtMDUtMTBcXFwiXFxub2c6XFxuICBkZXNjcmlwdGlvbjogXFxcIkhvdyB0byBwZXJzaXN0IGRhcmsgbW9kZSB3aXRoIFJlYWN0SlNcXFwiXFxuICBpbWFnZTogXFxcImh0dHBzOi8vdGVsbW8uaW0vb2cvcGVyc2lzdGRhcmttb2RlcmVhY3QucG5nXFxcIlxcbmF1dGhvcjpcXG4gIHR3aXR0ZXI6IFxcXCJ0ZWxtb1xcXCJcXG4gIG5hbWU6IFxcXCJUZWxtbyBHb25jYWx2ZXNcXFwiXFxuLS0tXFxuXFxuPiBJZiB5b3UncmUgdGhlIHR5cGUgb2YgcGVyc29uIHRoYXQgbGlrZXMgdG8gZ28gZGlyZWN0bHkgdG8gdGhlIGNvZGUgaGVyZSdzIHRoZSBbQ29kZXNhbmRCb3ggTGlua10oaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL2FmZmVjdGlvbmF0ZS12YXJhaGFtaWhpcmEtdTV0dnQ/ZmlsZT0vc3JjL0FwcC5qcylcXG5cXG5CZWZvcmUgd2Ugc3RhcnQgSSBzdWdnZXN0IHlvdSB0YWtlIGEgbG9vayBhdCBbdGhpcyBwb3N0XShodHRwczovL3RlbG1vLmltL3dyaXRpbmdzL2RhcmstbGlnaHQtbW9kZS1jc3MtamF2YXNjcmlwdCksIHdlJ2xsIGJlIHVzaW5nIHRoYXQgc2FtZSBhcHByb2FjaCBidXQgd2l0aCBSZWFjdC5cXG5cXG48YnI+XFxuXFxuTGV0IHVzIGdldCBzdGFydGVkIHdpdGggYSBzaW1wbGUgUmVhY3QgY29tcG9uZW50IGNhbGxlZCBgQXBwYDpcXG5cXG5gYGBqc3hcXG5pbXBvcnQgUmVhY3QgZnJvbSBcXFwicmVhY3RcXFwiO1xcblxcbmltcG9ydCBcXFwiLi9zdHlsZXMuY3NzXFxcIjtcXG5cXG5mdW5jdGlvbiBBcHAoKSB7XFxuICByZXR1cm4gKFxcbiAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiQXBwXFxcIj5cXG4gICAgICA8aDE+SGVsbG8gc3RyYW5nZXIhPC9oMT5cXG4gICAgICA8aDI+TGV0cyBwZXJzaXN0IG91ciBkYXJrIHRoZW1lLCBzaGFsbCB3ZT88L2gyPlxcbiAgICA8L2Rpdj5cXG4gICk7XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IEFwcDtcXG5gYGBcXG5cXG5Ob3cgbGV0cyB1c2UgYHVzZVN0YXRlYCB0byBzZXQgb3VyIGRlZmF1bHQgdmFsdWUgZm9yIGBkYXJrTW9kZWAsIHdoaWNoIHdpbGwgYmUgYGZhbHNlYDpcXG5cXG5gYGBqczohLTEsNlxcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXFxcInJlYWN0XFxcIjtcXG5cXG5pbXBvcnQgXFxcIi4vc3R5bGVzLmNzc1xcXCI7XFxuXFxuZnVuY3Rpb24gQXBwKCkge1xcbiAgY29uc3QgW2RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XFxuXFxuICAvLyAuLi5cXG5gYGBcXG5cXG5Ob3csIGxldHMgY2hhbmdlIG91ciBgZGl2YCB0byBpbmNsdWRlIGEgYGRhdGEtdGhlbWVgIGF0dHJpYnV0ZSwgd2UnbGwgY2hlY2sgaWYgdGhlIHZhbHVlIG9mIGBkYXJrTW9kZWAgaXMgYHRydWVgIGFuZCBzZXQgYSB2YWx1ZSBvZiBgZGFya2AsIG90aGVyd2lzZSBpdCdzIGBsaWdodGA6XFxuXFxuXFxuYGBganN4OiEtNVxcbi8vIC4uLlxcblxcbmZ1bmN0aW9uIEFwcCgpIHtcXG4gIHJldHVybiAoXFxuICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJBcHBcXFwiIGRhdGEtdGhlbWU9e2RhcmtNb2RlID8gXFxcImRhcmtcXFwiIDogXFxcImxpZ2h0XFxcIn0+XFxuICAgICAgPGgxPkhlbGxvIHN0cmFuZ2VyITwvaDE+XFxuICAgICAgPGgyPkxldHMgcGVyc2lzdCBvdXIgZGFyayB0aGVtZSwgc2hhbGwgd2U/PC9oMj5cXG4gICAgPC9kaXY+XFxuICApO1xcbn1cXG5cXG4vLyAuLi5cXG5gYGBcXG5cXG5Ob3cgaWYgeW91IGNoYW5nZSBvdXIgYHVzZVN0YXRlKClgIGZyb20gYGZhbHNlYCB0byBgdHJ1ZWAgeW91IHNob3VsZCBzZWUgdGhhdCBpdCBzZXRzIHRoZSBiYWNrZ3JvdW5kIG9mIGAuQXBwYCB0byBibGFjayBhbmQgdGhlIHRleHQgY29sb3IgdG8gd2hpdGUuXFxuXFxuLS0tXFxuXFxuIyMgU3dpdGNoXFxuXFxuTGV0IHVzIGJ1aWxkIGEgc3dpdGNoIGJldHdlZW4gZGFyayBhbmQgbGlnaHQgbW9kZS4gV2UgY2FuIHN0YXJ0IGJ5IGFkZGluZyBhIG5ldyBmdW5jdGlvbiB0aGF0IHNldHMgb3VyIHRoZW1lIGVpdGhlciB0byBgbGlnaHRgIG9yIHRvIGBkYXJrYCBtb2RlOlxcblxcbmBgYGpzOjdcXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFxcXCJyZWFjdFxcXCI7XFxuXFxuaW1wb3J0IFxcXCIuL3N0eWxlcy5jc3NcXFwiO1xcblxcbmZ1bmN0aW9uIEFwcCgpIHtcXG4gIGNvbnN0IFtkYXJrTW9kZSwgc2V0RGFya01vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xcbiAgY29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKSA9PiBzZXREYXJrTW9kZShkYXJrTW9kZSA/IGZhbHNlIDogdHJ1ZSk7XFxuXFxuICAvLyAuLi5cXG5gYGBcXG5cXG5XZSBjYW4gc3RpbGwgdXNlIGEgbGl0dGxlIHRyaWNrIG9uIGBkYXJrTW9kZSA/IGZhbHNlIDogdHJ1ZWAsIHdlIGNhbiBjaGFuZ2UgaXQgdG8gYCFkYXJrTW9kZWAsIHdoYXQgZG9lcyB0aGlzIG1lYW5zP1xcblxcblNpbmNlIGBkYXJrTW9kZWAgaXMgYSBib29sZWFuIHdlJ3JlIF9zYXlpbmdfIHdlIHdhbnQgdGhlIG9wcG9zaXRlIHZhbHVlLCBzZWUgdGhlIG91dHB1dDpcXG5cXG5gYGBqc1xcbnZhciBkYXJrTW9kZSA9IHRydWU7XFxuXFxuZGFya01vZGUgPSAhZGFya01vZGU7IC8vIGZhbHNlXFxuZGFya01vZGUgPSAhZGFya01vZGU7IC8vIHRydWVcXG5kYXJrTW9kZSA9ICFkYXJrTW9kZTsgLy8gZmFsc2VcXG5kYXJrTW9kZSA9ICFkYXJrTW9kZTsgLy8gdHJ1ZVxcbmBgYFxcblxcbldlIGNhbiBkbyB0aGlzIGFsbCBkYXkhXFxuXFxuLS0tXFxuXFxuIyMgQnV0dG9uIFN3aXRjaGVyXFxuXFxuTm93IHRoYXQgd2UgaGF2ZSBvdXIgYHRvZ2dsZURhcmtNb2RlYCBmdW5jdGlvbiBpbiBwbGFjZSBsZXQgdXMgY3JlYXRlIGEgYDxidXR0b24+YCB0byB1c2UgaXQ6XFxuXFxuYGBganN4OjQtNlxcbmZ1bmN0aW9uIEFwcCgpIHtcXG4gIHJldHVybiAoXFxuICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJBcHBcXFwiIGRhdGEtdGhlbWU9e2RhcmtNb2RlID8gXFxcImRhcmtcXFwiIDogXFxcImxpZ2h0XFxcIn0+XFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEYXJrTW9kZX0+XFxuICAgICAgICBEYXJrIG1vZGUgdG9nZ2xlclxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDxoMT5IZWxsbyBzdHJhbmdlciE8L2gxPlxcbiAgICAgIDxoMj5MZXRzIHBlcnNpc3Qgb3VyIGRhcmsgdGhlbWUsIHNoYWxsIHdlPzwvaDI+XFxuICAgIDwvZGl2PlxcbiAgKTtcXG59XFxuYGBgXFxuXFxuSWYgeW91IHRyeSBpdCBvdXQgaXMgc2hvdWxkIHdvcmsganVzdCBmaW5lLCBzd2l0Y2hpbmcgZnJvbSBgbGlnaHRgIHRvIGBkYXJrYCBtb2RlIGFuZCB2aWNlLXZlcnNhLiBXZSBjYW4gc3RpbGwgdXNlIG91ciBgZGFya01vZGVgIHN0YXRlIHRvIG1hbmlwdWxhdGUgd2hhdCB0aGUgYnV0dG9uIGRpc3BsYXlzOlxcblxcbmBgYGpzeDohLTJcXG48YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURhcmtNb2RlfT5cXG4gIHtkYXJrTW9kZSA/IFxcXCJMaWdodHMgT04hXFxcIiA6IFxcXCJMaWdodHMgT0ZGIVxcXCJ9XFxuPC9idXR0b24+XFxuYGBgXFxuXFxuTGV0IHVzIG1vdmUgb24uXFxuXFxuLS0tXFxuXFxuIyMgUGVyc2lzdFxcblxcblRoaXMgaXMgYWxsIGdvb2QsIGJ1dCB3aGF0IGlmIHlvdSBzd2l0Y2ggdG8gZGFyayBtb2RlIGFuZCByZWZyZXNoIHRoZSBwYWdlPyBXZSdyZSBiYWNrIHRvIGxpZ2h0IG1vZGUuIExldCB1cyBmaXggdGhhdCBzaGFsbCB3ZT9cXG5cXG5Gb3IgdGhhdCB3ZSdsbCBiZSB1c2luZyBSZWFjdCdzIGB1c2VFZmZlY3RgIGFuZCBgbG9jYWxTdG9yYWdlYC4gRmlyc3Qgd2UgbmVlZCB0byBpbXBvcnQ6XFxuXFxuYGBganM6IS0xXFxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFxcXCJyZWFjdFxcXCI7XFxuYGBgXFxuXFxuV2l0aCBgdXNlRWZmZWN0YCB3ZSBjYW4gcnVuIHNvbWUgY29kZSBldmVyeSB0aW1lIGEgdmFsdWUgY2hhbmdlcywgaW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gcnVuIG91ciBjb2RlIHdoZW4gYGRhcmtNb2RlYCBjaGFuZ2VzOlxcblxcbmBgYGpzOjktMTFcXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXFxcInJlYWN0XFxcIjtcXG5cXG5pbXBvcnQgXFxcIi4vc3R5bGVzLmNzc1xcXCI7XFxuXFxuZnVuY3Rpb24gQXBwKCkge1xcbiAgY29uc3QgW2RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XFxuICBjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgpID0+IHNldERhcmtNb2RlKGRhcmtNb2RlID8gZmFsc2UgOiB0cnVlKTtcXG5cXG4gIHVzZUVmZmVjdCgoKSA9PiB7XFxuICAgIGNvbnNvbGUubG9nKGBJcyBpbiBkYXJrIG1vZGU/ICR7ZGFya01vZGV9YCk7XFxuICB9LCBbZGFya01vZGVdKTtcXG5cXG4gIC8vIC4uLlxcbmBgYFxcblxcbklmIHlvdSBjaGVjayB0aGUgY29uc29sZSB5b3UnbGwgc2VlIHdoYXQncyBoYXBwZW5pbmcgZXZlcnkgdGltZSB3ZSB0b2dnbGUgZGFyayBtb2RlLiBOb3cgdGhhdCB3ZSBrbm93IHRoaXMgaXMgd29ya2luZyB3ZSBjYW4gc3RvcmUgb3VyIHZhbHVlIGluIGBsb2NhbFN0b3JhZ2VgOlxcblxcbmBgYGpzOi0yLDNcXG51c2VFZmZlY3QoKCkgPT4ge1xcbiAgY29uc29sZS5sb2coYElzIGluIGRhcmsgbW9kZT8gJHtkYXJrTW9kZX1gKTtcXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxcXCJEQVJLX01PREVcXFwiLCBkYXJrTW9kZSk7XFxufSwgW2RhcmtNb2RlXSk7XFxuYGBgXFxuXFxuQWxyaWdodCwgYWxsIGdvb2Qgc28gZmFyLCBub3cgd2UganVzdCBuZWVkIHJlYWQgdGhlIHZhbHVlIG9mIGBEQVJLX01PREVgIGZyb20gYGxvY2FsU3RvcmFnZWAgYW5kIHNldCBvdXIgZGVmYXVsdCBgZGFya01vZGVgIHZhbHVlOlxcblxcbmBgYGpzOjEsIS0yXFxuY29uc3Qgc3RvcmVkRGFya01vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcXFwiREFSS19NT0RFXFxcIik7XFxuY29uc3QgW2RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSB1c2VTdGF0ZShzdG9yZWREYXJrTW9kZSk7XFxuYGBgXFxuXFxuR2l2ZSBpdCBhIHRyeSwgY2hhbmdlIHRvIGRhcmsgbW9kZSBhbmQgdGhlbiByZWZyZXNoIHlvdXIgcGFnZS4gQm9vbSDwn5KlXFxuXFxuVGhhdCdzIGFsbCwgaG9wZSBpdCBoZWxwZWQgeW91IGluIHNvbWUgd2F5LlxcblwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./writings/persist-dark-mode-with-react.md\n");

/***/ })

}]);