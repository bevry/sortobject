# Sort Object

[![Build Status](https://secure.travis-ci.org/bevry/sortobject.png?branch=master)](http://travis-ci.org/bevry/sortobject)
[![NPM version](https://badge.fury.io/js/sortobject.png)](https://npmjs.org/package/sortobject)
[![Flattr this project](https://raw.github.com/balupton/flattr-buttons/master/badge-89x18.gif)](http://flattr.com/thing/344188/balupton-on-Flattr)

Returns a copy of an object, sorted deeply by its keys, without mangling any arrays inside of it



## Install

### Backend

1. [Install Node.js](http://bevry.me/node/install)
2. `npm install --save sortobject`

### Frontend

1. [See Browserify](http://browserify.org/)



## Usage

``` javascript
var sortObject = require('sortobject');
var fixture = {
    "c": true,
    "a": true,
    "b": null,
    "d": [
        {
            "c": true,
            "a": true,
            "b": null
        },
        {
            "c": true,
            "a": true,
            "b": null,
            "d": [
                {
                    "c": true,
                    "a": true,
                    "b": null
                }
            ]
        }
    ]
};
var actual = sortObject(fixture);
console.log(JSON.stringify(actual,null,4));  /* {
    "a": true,
    "b": null,
    "c": true,
    "d": [
        {
            "a": true,
            "b": null,
            "c": true
        },
        {
            "a": true,
            "b": null,
            "c": true,
            "d": [
                {
                    "a": true,
                    "b": null,
                    "c": true
                }
            ]
        }
    ]
} */
```



## History
You can discover the history inside the [History.md](https://github.com/bevry/sortobject/blob/master/History.md#files) file



## Backers
Check out the [Backers.md](https://github.com/bevry/sortobject/blob/master/Backers.md#files) file to discover all the amazing people who financially supported the development of this project.



## License
Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT License](http://creativecommons.org/licenses/MIT/)
<br/>Copyright © 2013+ [Bevry Pty Ltd](http://bevry.me)
