# veris-styleguide

> Veris React UI components for web is created using create-react-library, for more details visit https://github.com/transitive-bullshit/create-react-library. For documentation of styleguide we are using react-styleguidist so for more details on how to document the components follow this link https://react-styleguidist.js.org/.

## Setup

-Clone this repo and then run the following commands in the cloned directory for setting up the local package:
```bash
npm i
npm run build
npm link
```
- To setup react-styleguidist (Package used for documenting components). Make sure you are in styleguidist directory.
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

## Publish Styleguide
Run the following command in styleguidist folder
```bash
npm run build
```
If any error arises try using sudo. If error still persists delete the docs folder and try again. Build will be available in docs folder at root level. Commit everything to master branch and push the changes, changes will automatically get reflected. 

If changes are not reflected then open the index.html file in docs folder make some minor change in it like adding a whitespace and save the file. Try again it should work.


