---
title: "Deploy Web App to Vercel."
date: "2020-09-22"
og:
  description: "How to deploy a react project to vercel"
author:
  twitter: "jonahgeek"
  name: "Jonathan Mwebaze"
---

Okay, so I'll assume you've already finished working on your react project, and now totally ready for deploying.

There are several services online to use for deploying, but in this case we are gonna use **Vercel**.

---

I'm not gonna give specific reasons why I choose to use vercel, but I just find it quite convenient, so here we go:

Considering you've finished developing your site, you'll need to push your code base to github, or bitbucket. Personally I prefer github.


We all know how to push code, right?

Start off with `git add .` which adds changes in the working directory to the staging area. Then do `git commit -m "Deploying to vercel"`,  which adds a short commit message. Finally, `git push origin master`. 

---

Vercel assumes that you are working on the master branch so it's kind of a big deal to always use master as the main branch. 

---

Okay so go to https://vercel.com/login and Continue with github <em><small>(recommended)</small></em>. You should be redirected to Vercel `Overview`. 

Click on `Import Project`, then `Continue`, paste your git repository URL, continue and if everything went accordingly, the rest of the steps are pretty obvious. 