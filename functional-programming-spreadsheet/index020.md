---
id: 5d7925323be8848dbc58a07a
title: Step 2
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
Now define an empty function <code>add</code> using the <code>function</code> keyword.
It should accept two parameters, <code>x</code> and <code>y</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Create a function, <code>add</code>, with parameters <code>x</code> and <code>y</code>.
    testString: assert(/function\s+add\s*\(\s*x\s*,\s*y\s*\)\s*\{\s*\}/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>

const infixToFunction = {};


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