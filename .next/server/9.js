exports.ids = [9];
exports.modules = {

/***/ "./writings/javascript-performance.md":
/*!********************************************!*\
  !*** ./writings/javascript-performance.md ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"---\\ntitle: \\\"Performance Matters\\\"\\ndate: \\\"2020-01-10\\\"\\nauthor:\\n  twitter: \\\"telmo\\\"\\n  name: \\\"Telmo Goncalves\\\"\\n---\\n\\nA few people asked me how I've been testing JavaScript performance timings. I\\nuse a really simple technique. Although this is a short post it might help someone.\\nLet's go!\\n\\n---\\n\\nWe'll be using the example of one of my latest Tweets where I've used the following\\ncode example:\\n\\n```js\\nconst flatUnique = data => [...new Set([].concat(...data))];\\n\\nconst arr = [\\\"ReactJS\\\", [\\\"NextJS\\\", \\\"ReactJS\\\"], [\\\"JavaScript\\\", \\\"ReactJS\\\"], \\\"JavaScript\\\"];\\n\\nconsole.log(flatUnique(arr)); // [\\\"ReactJS\\\", \\\"NextJS\\\", \\\"JavaScript\\\"]\\n```\\n\\n<br />\\n\\nAlright, let's start by using performance, `performance` comes with JavaScript and\\nhas a lot of proto properties, if you open your developer tools console and type `performance`\\nyou can see what I'm talking about. If you're too lazy to do that check this\\n[image](https://img.onl/hU4rdE).\\n\\n<br />\\n\\nFor this scenario we'll be using the `.now()` function, let's take care of that:\\n\\n```js:4\\nconst flatUnique = data => [...new Set([].concat(...data))];\\n\\nconst arr = [\\\"ReactJS\\\", [\\\"NextJS\\\", \\\"ReactJS\\\"], [\\\"JavaScript\\\", \\\"ReactJS\\\"], \\\"JavaScript\\\"];\\nconst start = performance.now();\\n\\nconsole.log(flatUnique(arr)); // [\\\"ReactJS\\\", \\\"NextJS\\\", \\\"JavaScript\\\"]\\n```\\n\\nWhat we're doing here is setting the _current time_, this is pretty much\\nthe same thing as `Date.now()`, right, so we've initialized that, let's move on.\\n\\n<br />\\n\\nThen we're running `console.log` and calling our `flatUnique` function, after that we\\njust need to apply simple math, let's add another code line and cover that:\\n\\n```js:8\\nconst flatUnique = data => [...new Set([].concat(...data))];\\n\\nconst arr = [\\\"ReactJS\\\", [\\\"NextJS\\\", \\\"ReactJS\\\"], [\\\"JavaScript\\\", \\\"ReactJS\\\"], \\\"JavaScript\\\"];\\nconst start = performance.now();\\n\\nconsole.log(flatUnique(arr)); // [\\\"ReactJS\\\", \\\"NextJS\\\", \\\"JavaScript\\\"]\\n\\nconst duration = performance.now() - start;\\n```\\n\\nWe are, once again, using `performance` to initialize `.now()`, but this time we'll\\nsubtract `start`, our initial `performance.now()`, this will return the time it took\\nsince the first `performance.now()` until the second one.\\n\\n<br />\\n\\nNow we just need to output the `duration` value in some way:\\n\\n```js:10\\nconst flatUnique = data => [...new Set([].concat(...data))];\\n\\nconst arr = [\\\"ReactJS\\\", [\\\"NextJS\\\", \\\"ReactJS\\\"], [\\\"JavaScript\\\", \\\"ReactJS\\\"], \\\"JavaScript\\\"];\\nconst start = performance.now();\\n\\nconsole.log(flatUnique(arr)); // [\\\"ReactJS\\\", \\\"NextJS\\\", \\\"JavaScript\\\"]\\n\\nconst duration = performance.now() - start;\\n\\nconsole.log(duration);\\n```\\n\\nI've just ran this test and returned `0.39499999955296516`, it'll differ every\\ntime you run this, but you can have a general idea on how long it'll take to run\\n`flatUnique`.\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cml0aW5ncy9qYXZhc2NyaXB0LXBlcmZvcm1hbmNlLm1kPzg1NGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSwraEJBQWdlLHdHQUF3RyxpQ0FBaUMseWdCQUF5Z0Isd0dBQXdHLGtDQUFrQyxpQ0FBaUMseWNBQXljLHdHQUF3RyxrQ0FBa0MsaUNBQWlDLDRGQUE0RixpWUFBaVksd0dBQXdHLGtDQUFrQyxpQ0FBaUMsNEZBQTRGLDBCQUEwQiwyTEFBMkwiLCJmaWxlIjoiLi93cml0aW5ncy9qYXZhc2NyaXB0LXBlcmZvcm1hbmNlLm1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCItLS1cXG50aXRsZTogXFxcIlBlcmZvcm1hbmNlIE1hdHRlcnNcXFwiXFxuZGF0ZTogXFxcIjIwMjAtMDEtMTBcXFwiXFxuYXV0aG9yOlxcbiAgdHdpdHRlcjogXFxcInRlbG1vXFxcIlxcbiAgbmFtZTogXFxcIlRlbG1vIEdvbmNhbHZlc1xcXCJcXG4tLS1cXG5cXG5BIGZldyBwZW9wbGUgYXNrZWQgbWUgaG93IEkndmUgYmVlbiB0ZXN0aW5nIEphdmFTY3JpcHQgcGVyZm9ybWFuY2UgdGltaW5ncy4gSVxcbnVzZSBhIHJlYWxseSBzaW1wbGUgdGVjaG5pcXVlLiBBbHRob3VnaCB0aGlzIGlzIGEgc2hvcnQgcG9zdCBpdCBtaWdodCBoZWxwIHNvbWVvbmUuXFxuTGV0J3MgZ28hXFxuXFxuLS0tXFxuXFxuV2UnbGwgYmUgdXNpbmcgdGhlIGV4YW1wbGUgb2Ygb25lIG9mIG15IGxhdGVzdCBUd2VldHMgd2hlcmUgSSd2ZSB1c2VkIHRoZSBmb2xsb3dpbmdcXG5jb2RlIGV4YW1wbGU6XFxuXFxuYGBganNcXG5jb25zdCBmbGF0VW5pcXVlID0gZGF0YSA9PiBbLi4ubmV3IFNldChbXS5jb25jYXQoLi4uZGF0YSkpXTtcXG5cXG5jb25zdCBhcnIgPSBbXFxcIlJlYWN0SlNcXFwiLCBbXFxcIk5leHRKU1xcXCIsIFxcXCJSZWFjdEpTXFxcIl0sIFtcXFwiSmF2YVNjcmlwdFxcXCIsIFxcXCJSZWFjdEpTXFxcIl0sIFxcXCJKYXZhU2NyaXB0XFxcIl07XFxuXFxuY29uc29sZS5sb2coZmxhdFVuaXF1ZShhcnIpKTsgLy8gW1xcXCJSZWFjdEpTXFxcIiwgXFxcIk5leHRKU1xcXCIsIFxcXCJKYXZhU2NyaXB0XFxcIl1cXG5gYGBcXG5cXG48YnIgLz5cXG5cXG5BbHJpZ2h0LCBsZXQncyBzdGFydCBieSB1c2luZyBwZXJmb3JtYW5jZSwgYHBlcmZvcm1hbmNlYCBjb21lcyB3aXRoIEphdmFTY3JpcHQgYW5kXFxuaGFzIGEgbG90IG9mIHByb3RvIHByb3BlcnRpZXMsIGlmIHlvdSBvcGVuIHlvdXIgZGV2ZWxvcGVyIHRvb2xzIGNvbnNvbGUgYW5kIHR5cGUgYHBlcmZvcm1hbmNlYFxcbnlvdSBjYW4gc2VlIHdoYXQgSSdtIHRhbGtpbmcgYWJvdXQuIElmIHlvdSdyZSB0b28gbGF6eSB0byBkbyB0aGF0IGNoZWNrIHRoaXNcXG5baW1hZ2VdKGh0dHBzOi8vaW1nLm9ubC9oVTRyZEUpLlxcblxcbjxiciAvPlxcblxcbkZvciB0aGlzIHNjZW5hcmlvIHdlJ2xsIGJlIHVzaW5nIHRoZSBgLm5vdygpYCBmdW5jdGlvbiwgbGV0J3MgdGFrZSBjYXJlIG9mIHRoYXQ6XFxuXFxuYGBganM6NFxcbmNvbnN0IGZsYXRVbmlxdWUgPSBkYXRhID0+IFsuLi5uZXcgU2V0KFtdLmNvbmNhdCguLi5kYXRhKSldO1xcblxcbmNvbnN0IGFyciA9IFtcXFwiUmVhY3RKU1xcXCIsIFtcXFwiTmV4dEpTXFxcIiwgXFxcIlJlYWN0SlNcXFwiXSwgW1xcXCJKYXZhU2NyaXB0XFxcIiwgXFxcIlJlYWN0SlNcXFwiXSwgXFxcIkphdmFTY3JpcHRcXFwiXTtcXG5jb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xcblxcbmNvbnNvbGUubG9nKGZsYXRVbmlxdWUoYXJyKSk7IC8vIFtcXFwiUmVhY3RKU1xcXCIsIFxcXCJOZXh0SlNcXFwiLCBcXFwiSmF2YVNjcmlwdFxcXCJdXFxuYGBgXFxuXFxuV2hhdCB3ZSdyZSBkb2luZyBoZXJlIGlzIHNldHRpbmcgdGhlIF9jdXJyZW50IHRpbWVfLCB0aGlzIGlzIHByZXR0eSBtdWNoXFxudGhlIHNhbWUgdGhpbmcgYXMgYERhdGUubm93KClgLCByaWdodCwgc28gd2UndmUgaW5pdGlhbGl6ZWQgdGhhdCwgbGV0J3MgbW92ZSBvbi5cXG5cXG48YnIgLz5cXG5cXG5UaGVuIHdlJ3JlIHJ1bm5pbmcgYGNvbnNvbGUubG9nYCBhbmQgY2FsbGluZyBvdXIgYGZsYXRVbmlxdWVgIGZ1bmN0aW9uLCBhZnRlciB0aGF0IHdlXFxuanVzdCBuZWVkIHRvIGFwcGx5IHNpbXBsZSBtYXRoLCBsZXQncyBhZGQgYW5vdGhlciBjb2RlIGxpbmUgYW5kIGNvdmVyIHRoYXQ6XFxuXFxuYGBganM6OFxcbmNvbnN0IGZsYXRVbmlxdWUgPSBkYXRhID0+IFsuLi5uZXcgU2V0KFtdLmNvbmNhdCguLi5kYXRhKSldO1xcblxcbmNvbnN0IGFyciA9IFtcXFwiUmVhY3RKU1xcXCIsIFtcXFwiTmV4dEpTXFxcIiwgXFxcIlJlYWN0SlNcXFwiXSwgW1xcXCJKYXZhU2NyaXB0XFxcIiwgXFxcIlJlYWN0SlNcXFwiXSwgXFxcIkphdmFTY3JpcHRcXFwiXTtcXG5jb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xcblxcbmNvbnNvbGUubG9nKGZsYXRVbmlxdWUoYXJyKSk7IC8vIFtcXFwiUmVhY3RKU1xcXCIsIFxcXCJOZXh0SlNcXFwiLCBcXFwiSmF2YVNjcmlwdFxcXCJdXFxuXFxuY29uc3QgZHVyYXRpb24gPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0O1xcbmBgYFxcblxcbldlIGFyZSwgb25jZSBhZ2FpbiwgdXNpbmcgYHBlcmZvcm1hbmNlYCB0byBpbml0aWFsaXplIGAubm93KClgLCBidXQgdGhpcyB0aW1lIHdlJ2xsXFxuc3VidHJhY3QgYHN0YXJ0YCwgb3VyIGluaXRpYWwgYHBlcmZvcm1hbmNlLm5vdygpYCwgdGhpcyB3aWxsIHJldHVybiB0aGUgdGltZSBpdCB0b29rXFxuc2luY2UgdGhlIGZpcnN0IGBwZXJmb3JtYW5jZS5ub3coKWAgdW50aWwgdGhlIHNlY29uZCBvbmUuXFxuXFxuPGJyIC8+XFxuXFxuTm93IHdlIGp1c3QgbmVlZCB0byBvdXRwdXQgdGhlIGBkdXJhdGlvbmAgdmFsdWUgaW4gc29tZSB3YXk6XFxuXFxuYGBganM6MTBcXG5jb25zdCBmbGF0VW5pcXVlID0gZGF0YSA9PiBbLi4ubmV3IFNldChbXS5jb25jYXQoLi4uZGF0YSkpXTtcXG5cXG5jb25zdCBhcnIgPSBbXFxcIlJlYWN0SlNcXFwiLCBbXFxcIk5leHRKU1xcXCIsIFxcXCJSZWFjdEpTXFxcIl0sIFtcXFwiSmF2YVNjcmlwdFxcXCIsIFxcXCJSZWFjdEpTXFxcIl0sIFxcXCJKYXZhU2NyaXB0XFxcIl07XFxuY29uc3Qgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcXG5cXG5jb25zb2xlLmxvZyhmbGF0VW5pcXVlKGFycikpOyAvLyBbXFxcIlJlYWN0SlNcXFwiLCBcXFwiTmV4dEpTXFxcIiwgXFxcIkphdmFTY3JpcHRcXFwiXVxcblxcbmNvbnN0IGR1cmF0aW9uID0gcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydDtcXG5cXG5jb25zb2xlLmxvZyhkdXJhdGlvbik7XFxuYGBgXFxuXFxuSSd2ZSBqdXN0IHJhbiB0aGlzIHRlc3QgYW5kIHJldHVybmVkIGAwLjM5NDk5OTk5OTU1Mjk2NTE2YCwgaXQnbGwgZGlmZmVyIGV2ZXJ5XFxudGltZSB5b3UgcnVuIHRoaXMsIGJ1dCB5b3UgY2FuIGhhdmUgYSBnZW5lcmFsIGlkZWEgb24gaG93IGxvbmcgaXQnbGwgdGFrZSB0byBydW5cXG5gZmxhdFVuaXF1ZWAuXFxuXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./writings/javascript-performance.md\n");

/***/ })

};;