# veris-styleguide

> Veris React UI components for web

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
-styleguide.svg)](https://www.npmjs.com/package/veris-styleguide) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Setup

-Clone this repo and then run the following commands in the cloned directory for setting up the local package:
```bash
npm i
npm run build
npm link
```
- To setup react-styleguidist. Make sure you are in styleguidist directory.
package:
```bash
cd /styleguidist 
npm i
npm run start //To run the server
npm run build //To build the styleguide. Output is available in docs directory at root level.
```

## Usage

Run the following command in the project where you wish to use the local package.
```bash
npm link veris-styleguide
```

Then you can import the components like any normal npm package:

```jsx
import React, { Component } from 'react'

import {Input, Label ...} from 'veris-styleguide'
import 'veris-styleguide/dist/index.css' //For veris theme

class Example extends Component {
  render() {
    return <Input/>
  }
}
```

## License

MIT © [veris-sandeep](https://github.com/veris-sandeep)
