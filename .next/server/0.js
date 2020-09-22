exports.ids = [0];
exports.modules = {

/***/ "./writings/how-to-deploy-react-webapp.md":
/*!************************************************!*\
  !*** ./writings/how-to-deploy-react-webapp.md ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"---\\ntitle: \\\"Deploy Web App to Vercel.\\\"\\ndate: \\\"2020-09-22\\\"\\nog:\\n  description: \\\"How to deploy a react project to vercel\\\"\\nauthor:\\n  twitter: \\\"jonahgeek\\\"\\n  name: \\\"Jonathan Mwebaze\\\"\\n---\\n\\nOkay, so I'll assume you've already finished working on your react project, and now totally ready for deploying.\\n\\nThere are several services online to use for deploying, but in this case we are gonna use **Vercel**.\\n\\n---\\n\\nI'm not gonna give specific reasons why I choose to use vercel, but I just find it quite convenient, so here we go:\\n\\nConsidering you've finished developing your site, you'll need to push your code base to github, or bitbucket. Personally I prefer github.\\n\\n\\nWe all know how to push code, right?\\n\\nStart off with `git add .` which adds changes in the working directory to the staging area. Then do `git commit -m \\\"Deploying to vercel\\\"`,  which adds a short commit message. Finally, `git push origin master`. \\n\\n---\\n\\nVercel assumes that you are working on the master branch so it's kind of a big deal to always use master as the main branch. \\n\\n---\\n\\nOkay so go to https://vercel.com/login and Continue with github <em><small>(recommended)</small></em>. You should be redirected to Vercel `Overview`. \\n\\nClick on `Import Project`, then `Continue`, paste your git repository URL, continue and if everything went accordingly, the rest of the steps are pretty obvious. \");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cml0aW5ncy9ob3ctdG8tZGVwbG95LXJlYWN0LXdlYmFwcC5tZD8xMzgyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWUsZzhDQUFpNEMiLCJmaWxlIjoiLi93cml0aW5ncy9ob3ctdG8tZGVwbG95LXJlYWN0LXdlYmFwcC5tZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiLS0tXFxudGl0bGU6IFxcXCJEZXBsb3kgV2ViIEFwcCB0byBWZXJjZWwuXFxcIlxcbmRhdGU6IFxcXCIyMDIwLTA5LTIyXFxcIlxcbm9nOlxcbiAgZGVzY3JpcHRpb246IFxcXCJIb3cgdG8gZGVwbG95IGEgcmVhY3QgcHJvamVjdCB0byB2ZXJjZWxcXFwiXFxuYXV0aG9yOlxcbiAgdHdpdHRlcjogXFxcImpvbmFoZ2Vla1xcXCJcXG4gIG5hbWU6IFxcXCJKb25hdGhhbiBNd2ViYXplXFxcIlxcbi0tLVxcblxcbk9rYXksIHNvIEknbGwgYXNzdW1lIHlvdSd2ZSBhbHJlYWR5IGZpbmlzaGVkIHdvcmtpbmcgb24geW91ciByZWFjdCBwcm9qZWN0LCBhbmQgbm93IHRvdGFsbHkgcmVhZHkgZm9yIGRlcGxveWluZy5cXG5cXG5UaGVyZSBhcmUgc2V2ZXJhbCBzZXJ2aWNlcyBvbmxpbmUgdG8gdXNlIGZvciBkZXBsb3lpbmcsIGJ1dCBpbiB0aGlzIGNhc2Ugd2UgYXJlIGdvbm5hIHVzZSAqKlZlcmNlbCoqLlxcblxcbi0tLVxcblxcbkknbSBub3QgZ29ubmEgZ2l2ZSBzcGVjaWZpYyByZWFzb25zIHdoeSBJIGNob29zZSB0byB1c2UgdmVyY2VsLCBidXQgSSBqdXN0IGZpbmQgaXQgcXVpdGUgY29udmVuaWVudCwgc28gaGVyZSB3ZSBnbzpcXG5cXG5Db25zaWRlcmluZyB5b3UndmUgZmluaXNoZWQgZGV2ZWxvcGluZyB5b3VyIHNpdGUsIHlvdSdsbCBuZWVkIHRvIHB1c2ggeW91ciBjb2RlIGJhc2UgdG8gZ2l0aHViLCBvciBiaXRidWNrZXQuIFBlcnNvbmFsbHkgSSBwcmVmZXIgZ2l0aHViLlxcblxcblxcbldlIGFsbCBrbm93IGhvdyB0byBwdXNoIGNvZGUsIHJpZ2h0P1xcblxcblN0YXJ0IG9mZiB3aXRoIGBnaXQgYWRkIC5gIHdoaWNoIGFkZHMgY2hhbmdlcyBpbiB0aGUgd29ya2luZyBkaXJlY3RvcnkgdG8gdGhlIHN0YWdpbmcgYXJlYS4gVGhlbiBkbyBgZ2l0IGNvbW1pdCAtbSBcXFwiRGVwbG95aW5nIHRvIHZlcmNlbFxcXCJgLCAgd2hpY2ggYWRkcyBhIHNob3J0IGNvbW1pdCBtZXNzYWdlLiBGaW5hbGx5LCBgZ2l0IHB1c2ggb3JpZ2luIG1hc3RlcmAuIFxcblxcbi0tLVxcblxcblZlcmNlbCBhc3N1bWVzIHRoYXQgeW91IGFyZSB3b3JraW5nIG9uIHRoZSBtYXN0ZXIgYnJhbmNoIHNvIGl0J3Mga2luZCBvZiBhIGJpZyBkZWFsIHRvIGFsd2F5cyB1c2UgbWFzdGVyIGFzIHRoZSBtYWluIGJyYW5jaC4gXFxuXFxuLS0tXFxuXFxuT2theSBzbyBnbyB0byBodHRwczovL3ZlcmNlbC5jb20vbG9naW4gYW5kIENvbnRpbnVlIHdpdGggZ2l0aHViIDxlbT48c21hbGw+KHJlY29tbWVuZGVkKTwvc21hbGw+PC9lbT4uIFlvdSBzaG91bGQgYmUgcmVkaXJlY3RlZCB0byBWZXJjZWwgYE92ZXJ2aWV3YC4gXFxuXFxuQ2xpY2sgb24gYEltcG9ydCBQcm9qZWN0YCwgdGhlbiBgQ29udGludWVgLCBwYXN0ZSB5b3VyIGdpdCByZXBvc2l0b3J5IFVSTCwgY29udGludWUgYW5kIGlmIGV2ZXJ5dGhpbmcgd2VudCBhY2NvcmRpbmdseSwgdGhlIHJlc3Qgb2YgdGhlIHN0ZXBzIGFyZSBwcmV0dHkgb2J2aW91cy4gXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./writings/how-to-deploy-react-webapp.md\n");

/***/ })

};;