---
id: 5d792532b07918c3a5904913
title: Step 5
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
Anonymous functions are functions without names - they are used only once and then forgotten.
The syntax is the same as for normal functions but without the name:

```js
function(x) {
  return x
}
```

Make the function <code>add</code> anonymous and remove the <code>addVar</code> definition (as <code>add</code> isn't defined anymore).
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Replace <code>add</code> with an equivalent anonymous function.
    testString: assert(/function\s*\(\s*x\s*,\s*y\s*\)\s*\{\s*return\s+x\s*\+\s*y/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>

const infixToFunction = {};

function add(x, y) {
  return x + y;
}

const addVar = add;


</script>
```

</div>


### Before Test
<div id='html-setup'>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Spreadsheet</title>
  <style>
    #container {
      display: grid;
      grid-template-columns: 50px repeat(10, 200px);
      grid-template-rows: repeat(11, 30px);
    }
    .label {
      background-color: lightgray;
      text-align: center;
      vertical-align: middle;
      line-height: 30px;
    }
  </style>
</head>
<body>
<div id="container">
  <div></div>
</div>
```

</div>


### After Test
<div id='html-teardown'>

```html
</body>
</html>
```

</div>


</section>