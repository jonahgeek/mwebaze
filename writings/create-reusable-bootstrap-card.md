---
title: "Reusable Component in React"
date: "2020-09-23"
og:
  description: "How to create a reusable card component in react"
author:
  twitter: "jonahgeek"
  name: "Jonathan Mwebaze"
---

You've probably thought about making reusable components mainly because;

<ul>
<li>You hate rewriting code blocks</li>
<li>You want to work faster</li>
</ul>

Making a reusable component is pretty simple actually. Assuming you already have a react project created, go ahead and create your `Card.js` preferrably in your <u>components</u> directory.

```js
import React from "react";

const CardComponent = ({ header, body, footer }) => {
  return (
    <>
      <div className="card">
        <div className="card-header">{header}</div>
        <div className="card-body">{body}</div>
        <div className="card-footer">{footer}</div>
      </div>
    </>
  );
};

export default CardComponent;
```

You must have noticed I'm using bootstrap classes, yeah I am. You can install bootstrap as well `npm i --save bootstrap`, then don't forget to add `import "bootstrap/dist/css/bootstrap.min.css";` to the very first component, prefferably <u><strong>index.js</strong></u>

So what we did is, we added a few props <u>header, body, footer</u> which are going to be passed down to the next component.

If I go to the <u>App.js</u> component or any other component, I'll be able to reuse the <strong>Card.js</strong> by just;

```js
import React from "react";
import "./App.css";
import CardComponent from "./components/CardComponent";

function App() {
  return (
    <>
      <Card
        header="Card heading"
        body="Card description"
        footer="Footer information"
      />
    </>
  );
}

export default App;
```

That's pretty much it.
