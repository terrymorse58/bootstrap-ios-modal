# bootstrap-ios-modal

A Bootstrap modal styled to look like an iOS modal
---
## Usage
```html
<html>
<head>
  <link rel="stylesheet"
   href="https://cdn.jsdelivr.net/gh/terrymorse58/bootstrap-ios-modal@latest/iosmodal.css">
</head>
<body>
  <script
    src="https://cdn.jsdelivr.net/gh/terrymorse58/bootstrap-ios-modal@latest/iosmodal.js">
  </script>
</body>
</html>
```
## Example
```js
const bodyContent = "This is displayed in modal body";
const buttons = [
    {
        class: "btn btn-lg btn-outline-primary",
        innerHTML: "Left",
        onclick: () => alert('you clicked left button')
    }, {
        class: "btn btn-lg btn-outline-secondary",
        innerHTML: "Right",
        onclick: () => alert('you clicked right button')
    }
];
iOSModal.show(bodyContent, buttons);
```
