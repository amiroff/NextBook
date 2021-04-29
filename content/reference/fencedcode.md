---
part: Documentation
title: Fenced Code Block Usage
---

Oftentimes, you need to display a code example on the page. This example could be as simple as a one-liner or as complex as a diff view. Below are the ways you can use fenced code blocks with NextBook.

## Simple Fenced Block

Wrap your code using triple \``` characters for the simplest code formatting.

~~~
```
Everything within fenced code will
be displayed in monospace font.
```
~~~

results in:

```
Everything within fenced code will
be displayed in monospace font.
```

## Syntax Highlighting

### Theme-Aware Highlighting

You can add syntax highlighting by specifying code's [language](https://prismjs.com/index.html#supported-languages) after triple ```. NextBook uses [PrismJS](https://github.com/PrismJS) for themes and language definitions as it is currently the most complete one. 

When application's theme changes, so does the fenced code theme. Try it now by pressing <kbd>T</kbd>.

~~~
```jsx
import React, { useState } from 'react'

function Square(props) {
  const [value, setValue] = useState(null)

  return (
    <button className="square" onClick={() => alert('click')}>
      {props.value}
    </button>
  )
}
```
~~~

results in:

```jsx
import React, { useState } from 'react'

function Square(props) {
  const [value, setValue] = useState(null)

  return (
    <button className="square" onClick={() => alert('click')}>
      {props.value}
    </button>
  )
}
```

### Forced Dark Theme

You can force dark syntax highlighting even on light theme. Provide `dark` parameter to do that. Swith to light theme by pressing <kbd>T</kbd>. to see code block below still using dark theme.

~~~
```jsx dark
import React, { useState } from 'react'

function Square(props) {
  const [value, setValue] = useState(null)

  return (
    <button className="square" onClick={() => alert('click')}>
      {props.value}
    </button>
  )
}
```
~~~

results in:

```jsx dark
import React, { useState } from 'react'

function Square(props) {
  const [value, setValue] = useState(null)

  return (
    <button className="square" onClick={() => alert('click')}>
      {props.value}
    </button>
  )
}
```

## Clipboard Button

Any code block will have automatic `Copy` icon clicking which copies contents of code block to clipboard.

## Code Header Information

You can display various information like title and link to source in code header. 

### Code Title

Often you need to tell which file you are talking about. You can specify this by adding `title` info:

~~~
```jsx title=app.jsx
import React, { useState } from 'react'

function Square(props) {
  const [value, setValue] = useState(null)

  return (
    <button className="square" onClick={() => alert('click')}>
      {props.value}
    </button>
  )
}
```
~~~

results in:

```jsx title=app.jsx
import React, { useState } from 'react'

function Square(props) {
  const [value, setValue] = useState(null)

  return (
    <button className="square" onClick={() => alert('click')}>
      {props.value}
    </button>
  )
}
```

### Linked Code Title

In case you need to link to original source you can pass `link` metadata. Now, title will be a link to the specified URL.

~~~
```python title=Colors/primary_colors.py link=https://github.com/geekcomputers/Python/blob/master/Colors/primary_colors.py
def diff(a, b):
    """
    TODO: fix this function!!
    """
    return a - b
```
~~~

results in:

```python title=Colors/primary_colors.py link=https://github.com/geekcomputers/Python/blob/master/Colors/primary_colors.py
def diff(a, b):
    """
    TODO: fix this function!!
    """
    return a - b
```

## Line Numbering

### Automatic Numbering

Lines of code can have automatic numbering. Provide `numbered` metadata to achive that:

~~~
```html numbered
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Document</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>
```
~~~

results in:

```html numbered
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Document</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>
```

### Numbering With Manual Offset

Code can start from any provided number. Use `numbered` together with `startline` metadata to achive that. Default startline is `1` unless provided.

~~~
```html numbered startline=3
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Document</title>
</head>
```
~~~

results in:

```html numbered startline=3
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Document</title>
</head>
```

## Line Marking

In some cases there's a need to highlight/mark some lines and then describe each line seperately. Any number of lines can be marked by providing `marked` parameter:

~~~
```html marked=2,5,6,10
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Document</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>
```
~~~

results in:

```html marked=2,5,6,10
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Document</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>
```

## Line Diffing

Sometimes you want to show which lines were added or removed from code. This can be achieved by passing related line numbers as `added` and `removed` parameters. Added lines will be highlighted with light green, removed lines with light red color. Note that displaying numbers, although works, in this case would cause a confusion as line numbers do not repeat.

~~~
```html removed=2,8 added=3,9,10
<!DOCTYPE html>
<html lang='en'>
<html lang='ja'>
<head>
...
</head>
<body>
    <h1>Hello World!</h1>
    <h1>こんにちは世界!</h1>
    <p>今日は天気がいいですね。</p>
</body>
</html>
```
~~~

results in:

```html removed=2,8 added=3,9,10
<!DOCTYPE html>
<html lang='en'>
<html lang='ja'>
<head>
...
</head>
<body>
    <h1>Hello World!</h1>
    <h1>こんにちは世界!</h1>
    <p>今日は天気がいいですね。</p>
</body>
</html>
```

You can also pass every other parameter mentioned above together. Here we are adding some of them:

~~~
```html numbered marked=2,5,6,10 title=public/index.html link=https://gist.github.com/amiroff/04d57ef025845b191d9cd30c7ca13f20 
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Document</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>
```
~~~
results in 

```html numbered marked=2,5,6,10 title=public/index.html link=https://gist.github.com/amiroff/04d57ef025845b191d9cd30c7ca13f20 
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Document</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>
```

## Escaping Code Blocks

To escape (prevent from displaying as highlighted code) block and simply display how fenced code is being used in source, wrap it with `~~~`:

````
~~~
```html
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
~~~
````
will result in:

~~~
```html
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
~~~
