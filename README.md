# react-contexting

[![Build Status](https://travis-ci.org/nicolas-van/react-contexting.svg?branch=develop)](https://travis-ci.org/nicolas-van/react-contexting) [![npm version](https://img.shields.io/npm/v/react-contexting.svg)](https://www.npmjs.com/package/react-contexting)

Some utilities to work with React 16.3 contexts


## Documentation

### `connectContexts(component, propNamesToContexts)`

A High Order Component to redirect contexts to properties.

Example:

```javascript
import React from 'react';
import {connectContexts} from 'react-contexting';
import {context1, context2} from './context';

function MyComponent({context1, context2}) {
  return (
    <div>
      <p>context1 value: {context1}</p>
      <p>context2 value: {context2}</p>
    </div>
  );
}

export default connectContexts(MyComponent, {
  context1: context1,
  context2: context2,
});
```

### `ContextsProvider`

A component to provide values for multiple contexts at the same time.

Example:

```javascript
import React from 'react';
import {ContextsProvider} from 'react-contexting';
import {context1, context2} from './context';
import MyComponent from './MyComponent';

export default function WrapperComponent() {
  return (
    <ContextsProvider mapping={[
      [context1, 'value for context1'],
      [context2, 'value for context2'],
    ]}>
      <MyComponent/>
    </ContextsProvider>
  );
}
```
