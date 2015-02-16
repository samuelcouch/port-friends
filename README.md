# PORT-FRIENDS
Module to spice up your development experience. You never know who's going to pop up on your ports!

[![NPM](https://nodei.co/npm/port-friends.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/port-friends/)

**friends(*options*)**

options
- myport (optional): port number
- mode (optional): current environment

### Example Usage
```js
var friend = require('port-friends');

var app = express();

app.set('port', 1337);
app.listen(app.get('port'), friend(
	{
		myport: app.get('port'), 
		mode: app.get('env')
	}));
```

### Adding Friends
Want to add friends for everyone to enjoy? Open an issue in this repository, or submit a pull request!

License
-------
```
The MIT License (MIT)

Copyright (c) 2015 Sam Couch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
