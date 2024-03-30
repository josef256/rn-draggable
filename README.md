# rn-draggable

a react native wrapper to drag any component

<img src="https://github.com/josef256/rn-draggable/assets/15874482/bb1f4042-1d32-4cc3-bc61-521af6cd5f30" width="300" height="500"/>

## Installation

```sh
npm install rn-draggable
```

## Usage

```jsx
import { Draggable } from 'rn-draggable';

// ...

<Draggable>
<YourCompomemt />
</Draggable>
```
## props
Draggable accept the following props <br /> 
-<strong>onGrant</Strong>: Function (fired when the draggable component is initiated)  <br /> 
-<strong>onMove</Strong>: Function  (fired when the draggable component is being dragged) <br /> 
-<strong>onRelease</Strong>: Function (fired when the draggable component is released).  <br /> 

## Example
```jsx
const myFunction=()=>{...}
<Draggable onGrant={myFunction}>
{/*...*/}
</Draggable>
```
## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
