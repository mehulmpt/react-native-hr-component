# React Native Hr Component

Use this component if you want to add and customize text between a line in your component, something like this:

------------------- Your Text Goes Here -------------------

## Installation
NPM
```
npm i react-native-hr-component -S
```

Yarn
```
yarn add react-native-hr-component
```

## Usage
```
import Hr from "react-native-hr-component";

<Hr lineColor="#eee" width={1} text="Dummy Text" textStyles={customStylesHere} />
```

Your Text Styles will be applied to the "Dummy Text" you passed in.
```
customStylesHere: {
    fontWeight: "bold",
    color: "orange"
}
```


## Properties

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| color | black | color | Color for the border on both sides |
| thickness | 1 | number | Thickness of the hr bar |
| text | 1 | number or string | Text between the hr bars |
| textStyles | {} | object | Stylesheet object applied on the text supplied |
| hrStyles | {} | object | Stylesheet object applied on the main hr view |
| textPadding | 3 | number | Distance between text and hr bars |
| fontSize | Default App value | number | Font size of text |
| hrPadding | 0 | number | Distance between hr bars and edge of parent component |

**Note:** Setting through textStyles will overwrite the default CSS behavior provided by textPadding, fontSize, etc.

## Contributing

PRs are welcome.