# React Rounder

![npm version](https://badge.fury.io/js/react-rounder.svg)
![license](https://img.shields.io/npm/l/react-rounder.svg)
![downloads](https://img.shields.io/npm/dt/react-rounder.svg)


> A collection of rounding components based on styled-components



## Demo

[Preview](https://furkanmavili.github.io/react-rounder/)

## Installation

With npm:

```bash
npm install --save react-rounder
```

With Yarn:

```bash
yarn add react-rounder
```


## Usage

Each loader has their own default properties. You can overwrite the defaults by passing props into the loaders.



### Basic Example

```js

import { Jelly } from "react-rounder/Jelly";

function App() {
 
  return (
    <Jelly size={40} color="orange" />
  );
}

export default App;
```

### Show/Hide Example

```js

import React, { useState } from "react";
import { Jelly } from "react-rounder/Jelly";

function App() {
  const [showRounder, setShowRounder] = useState(true);

  return (
    <>
      <button onClick={() => setShowRounder(prev => !prev)}>
        Toggle Rounder!
      </button>

      <Jelly size={40} color="orange" show={showRounder} />
    </>
  );
}

export default App;
```


## Props

Default props for all rounders:

```js
show: true; // boolean
color: "#818CF8"; // any css color value
size: 48; // px 
```


##  Contributing

-   Pull requests are always welcome
-   For bugs or new rounder requests please create an issue 

## License

MIT
