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

You can add syntax highlighting by specifying code's language from the list below after triple ```. NextBook uses [PrismJS](https://github.com/PrismJS) for themes and language definitions as it is the most complete currently.

~~~
```jsx
import React, { useState } from 'react'

function Square(props) {
  const [value, setValue] = useState(null);

  return (
    <button className="square" onClick={() => alert('click')}>
      {props.value}
    </button>
  );
}
```
~~~
results in:

```jsx
import React, { useState } from 'react'

function Square(props) {
  const [value, setValue] = useState(null);

  return (
    <button className="square" onClick={() => alert('click')}>
      {props.value}
    </button>
  );
}
```

## Forcing Dark Syntax Highlighting

You can force dark syntax highlighting even on light theme. Provide `dark` parameter to do that. Swith to light mode to see code block below still using dark theme.

~~~
```jsx dark
import React, { useState } from 'react'

function Square(props) {
  const [value, setValue] = useState(null);

  return (
    <button className="square" onClick={() => alert('click')}>
      {props.value}
    </button>
  );
}
```
~~~
results in:

```jsx dark
import React, { useState } from 'react'

function Square(props) {
  const [value, setValue] = useState(null);

  return (
    <button className="square" onClick={() => alert('click')}>
      {props.value}
    </button>
  );
}
```

## Code Title

Often you need to tell which file you are talking about. You can specify this by adding `title` info:

~~~
```jsx title=app.jsx
import React, { useState } from 'react'

function Square(props) {
  const [value, setValue] = useState(null);

  return (
    <button className="square" onClick={() => alert('click')}>
      {props.value}
    </button>
  );
}
```
~~~
results in:

```jsx title=app.jsx
import React, { useState } from 'react'

function Square(props) {
  const [value, setValue] = useState(null);

  return (
    <button className="square" onClick={() => alert('click')}>
      {props.value}
    </button>
  );
}
```

## Linked Code Title

In case you need to link to original source you can pass `link` metadata. Now, title will be a link to the specified URL.

~~~
```python title=inspect.py link=https://github.com/geekcomputers/Python/blob/master/Colors/primary_colors.py
def diff(a, b):
    """
    TODO: fix this function!!
    """
    return a - b
```
~~~
results in:

```python title=inspect.py link=https://github.com/geekcomputers/Python/blob/master/Colors/primary_colors.py
def diff(a, b):
    """
    TODO: fix this function!!
    """
    return a - b
```

## Copying To Clipboard

A classic nowadays, any code block can have automatic `Copy` icon. Just provide `clipboard` metadata:

~~~
```python title=inspect.py clipboard
from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    url(r'^api/', include('conduit.apps.articles.urls', namespace='articles')),
    url(r'^api/', include('conduit.apps.authentication.urls', namespace='authentication')),
    url(r'^api/', include('conduit.apps.profiles.urls', namespace='profiles')),
]
```
~~~
results in:

```python title=inspect.py clipboard
from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    url(r'^api/', include('conduit.apps.articles.urls', namespace='articles')),
    url(r'^api/', include('conduit.apps.authentication.urls', namespace='authentication')),
    url(r'^api/', include('conduit.apps.profiles.urls', namespace='profiles')),
]
```

## Line Numbering

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

## Manual Numbering

Code can start from any provided number. Use `numbered` together with `startline` metadata to achive that. Default startline if not provided is `1`.

~~~
```html numbered startline=3
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Document</title>
</head>
...

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
...

```

## Line Marking

In some cases there's a need to highlight/mark some lines and then describe each line seperately. Any number of lines can be marked by providing `marked` metadata together with `numbered` like so:

~~~
```html numbered marked=2,5,6,10
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
...

```
~~~
results in:

```html numbered marked=2,5,6,10
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
...

```
