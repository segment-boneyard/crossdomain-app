# crossdomain-app

  A simple `crossdomain.xml` subapp for express.

## Installation

    $ npm install crossdomain-app

## Example

```js
var express = require('express');
var Crossdomain = require('crossdomain-app');

var subapp = new Crossdomain({ domain: '*.segment.io' });

express()
  .use('/', subapp.app())
  .listen(8000);
```

## API

### Crossdomain(options)
  
  Generate an express subapp that serves `/crossdomain.xml`. `options.domain`, and the `options` line up with the [crossdomain options](https://github.com/segmentio/crossdomain#api).

## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```