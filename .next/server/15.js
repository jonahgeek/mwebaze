exports.ids = [15];
exports.modules = {

/***/ "./writings/random-colour-with-javaScript.md":
/*!***************************************************!*\
  !*** ./writings/random-colour-with-javaScript.md ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"---\\ntitle: \\\"Random colour with JavaScript\\\"\\ndate: \\\"2020-03-15\\\"\\nog:\\n  description: \\\"Create a random colour using only JavaScript\\\"\\n  image: \\\"https://telmo.im/og/random-colour.png\\\"\\nauthor:\\n  twitter: \\\"telmo\\\"\\n  name: \\\"Telmo Goncalves\\\"\\n---\\n\\nThe main reason for writing this post is to explain why to use `16777215`, looks kind of a random number and can be a little misleading.\\n\\n---\\n\\n## Why 16777215?\\nIf you're familiar with `RGB` (Red, Green, Blue), you know it's represented by a number from `0` to `255`, an example of a colour using RGB would look like:\\n\\n```css\\n/* Same as #ffffff */\\ncolor: rgb(255, 255, 255);\\n```\\n\\nNow, if we do `256 * 256 * 256` we end up with `16,777,216`, now why do we remove 1 from this value?\\n\\nWe want to convert into a hexadecimal format and `16777216` converts to `1000000`, while `16777215` converts to `ffffff`.\\n\\nI did a little research but mainly this came from here, thanks Jacob:\\n\\n<blockquote class=\\\"twitter-tweet\\\"><p lang=\\\"en\\\" dir=\\\"ltr\\\">Red, green, and Blue are each represented by a number from 0 to 255<br><br>256 * 256 * 256 = 16777216</p>&mdash; Jacob Paris 🇨🇦 (@jacobmparis) <a href=\\\"https://twitter.com/jacobmparis/status/1239022844136341504?ref_src=twsrc%5Etfw\\\">March 15, 2020</a></blockquote>\\n\\n---\\n\\nThere are other explanations, based directly on the hexadecimal code, but I felt this one made more sense and it was simpler.\\n\\n---\\n\\nHappy to discuss this further and give me a shout if you think something's not right. I'm always open to learning something new. Connect on [Twitter](https://twitter.com/telmo) if you want to discuss.\\n\\nHope this makes sense to you 🔥\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cml0aW5ncy9yYW5kb20tY29sb3VyLXdpdGgtamF2YVNjcmlwdC5tZD8yMjczIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWUsZ3NCQUFpb0Isc2VBQXNlLDRoQkFBNGhCIiwiZmlsZSI6Ii4vd3JpdGluZ3MvcmFuZG9tLWNvbG91ci13aXRoLWphdmFTY3JpcHQubWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIi0tLVxcbnRpdGxlOiBcXFwiUmFuZG9tIGNvbG91ciB3aXRoIEphdmFTY3JpcHRcXFwiXFxuZGF0ZTogXFxcIjIwMjAtMDMtMTVcXFwiXFxub2c6XFxuICBkZXNjcmlwdGlvbjogXFxcIkNyZWF0ZSBhIHJhbmRvbSBjb2xvdXIgdXNpbmcgb25seSBKYXZhU2NyaXB0XFxcIlxcbiAgaW1hZ2U6IFxcXCJodHRwczovL3RlbG1vLmltL29nL3JhbmRvbS1jb2xvdXIucG5nXFxcIlxcbmF1dGhvcjpcXG4gIHR3aXR0ZXI6IFxcXCJ0ZWxtb1xcXCJcXG4gIG5hbWU6IFxcXCJUZWxtbyBHb25jYWx2ZXNcXFwiXFxuLS0tXFxuXFxuVGhlIG1haW4gcmVhc29uIGZvciB3cml0aW5nIHRoaXMgcG9zdCBpcyB0byBleHBsYWluIHdoeSB0byB1c2UgYDE2Nzc3MjE1YCwgbG9va3Mga2luZCBvZiBhIHJhbmRvbSBudW1iZXIgYW5kIGNhbiBiZSBhIGxpdHRsZSBtaXNsZWFkaW5nLlxcblxcbi0tLVxcblxcbiMjIFdoeSAxNjc3NzIxNT9cXG5JZiB5b3UncmUgZmFtaWxpYXIgd2l0aCBgUkdCYCAoUmVkLCBHcmVlbiwgQmx1ZSksIHlvdSBrbm93IGl0J3MgcmVwcmVzZW50ZWQgYnkgYSBudW1iZXIgZnJvbSBgMGAgdG8gYDI1NWAsIGFuIGV4YW1wbGUgb2YgYSBjb2xvdXIgdXNpbmcgUkdCIHdvdWxkIGxvb2sgbGlrZTpcXG5cXG5gYGBjc3NcXG4vKiBTYW1lIGFzICNmZmZmZmYgKi9cXG5jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbmBgYFxcblxcbk5vdywgaWYgd2UgZG8gYDI1NiAqIDI1NiAqIDI1NmAgd2UgZW5kIHVwIHdpdGggYDE2LDc3NywyMTZgLCBub3cgd2h5IGRvIHdlIHJlbW92ZSAxIGZyb20gdGhpcyB2YWx1ZT9cXG5cXG5XZSB3YW50IHRvIGNvbnZlcnQgaW50byBhIGhleGFkZWNpbWFsIGZvcm1hdCBhbmQgYDE2Nzc3MjE2YCBjb252ZXJ0cyB0byBgMTAwMDAwMGAsIHdoaWxlIGAxNjc3NzIxNWAgY29udmVydHMgdG8gYGZmZmZmZmAuXFxuXFxuSSBkaWQgYSBsaXR0bGUgcmVzZWFyY2ggYnV0IG1haW5seSB0aGlzIGNhbWUgZnJvbSBoZXJlLCB0aGFua3MgSmFjb2I6XFxuXFxuPGJsb2NrcXVvdGUgY2xhc3M9XFxcInR3aXR0ZXItdHdlZXRcXFwiPjxwIGxhbmc9XFxcImVuXFxcIiBkaXI9XFxcImx0clxcXCI+UmVkLCBncmVlbiwgYW5kIEJsdWUgYXJlIGVhY2ggcmVwcmVzZW50ZWQgYnkgYSBudW1iZXIgZnJvbSAwIHRvIDI1NTxicj48YnI+MjU2ICogMjU2ICogMjU2ID0gMTY3NzcyMTY8L3A+Jm1kYXNoOyBKYWNvYiBQYXJpcyDwn4eo8J+HpiAoQGphY29ibXBhcmlzKSA8YSBocmVmPVxcXCJodHRwczovL3R3aXR0ZXIuY29tL2phY29ibXBhcmlzL3N0YXR1cy8xMjM5MDIyODQ0MTM2MzQxNTA0P3JlZl9zcmM9dHdzcmMlNUV0ZndcXFwiPk1hcmNoIDE1LCAyMDIwPC9hPjwvYmxvY2txdW90ZT5cXG5cXG4tLS1cXG5cXG5UaGVyZSBhcmUgb3RoZXIgZXhwbGFuYXRpb25zLCBiYXNlZCBkaXJlY3RseSBvbiB0aGUgaGV4YWRlY2ltYWwgY29kZSwgYnV0IEkgZmVsdCB0aGlzIG9uZSBtYWRlIG1vcmUgc2Vuc2UgYW5kIGl0IHdhcyBzaW1wbGVyLlxcblxcbi0tLVxcblxcbkhhcHB5IHRvIGRpc2N1c3MgdGhpcyBmdXJ0aGVyIGFuZCBnaXZlIG1lIGEgc2hvdXQgaWYgeW91IHRoaW5rIHNvbWV0aGluZydzIG5vdCByaWdodC4gSSdtIGFsd2F5cyBvcGVuIHRvIGxlYXJuaW5nIHNvbWV0aGluZyBuZXcuIENvbm5lY3Qgb24gW1R3aXR0ZXJdKGh0dHBzOi8vdHdpdHRlci5jb20vdGVsbW8pIGlmIHlvdSB3YW50IHRvIGRpc2N1c3MuXFxuXFxuSG9wZSB0aGlzIG1ha2VzIHNlbnNlIHRvIHlvdSDwn5SlXFxuXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./writings/random-colour-with-javaScript.md\n");

/***/ })

};;