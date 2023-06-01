# EDITOR JS notes

- Config Parts
  - holder : id of element that should contain the editor
  - tools: available tool list (plugins) => later added as type field to saved data
  - Callbacks
    - onReady
    - isReady(promise)
    - onChange
  - defaultBlock
  - Autofocus
  - Placeholder
  - logLevel
  - internationalization
  - readOnly
  - inlineToolbar
  - block tunes

```js
const editor = new EditorJS({
  /**
   * Id of Element that should contain the Editor
   */
  holder: "editorjs",

  /**
   * Available Tools list.
   * Pass Tool's class or Settings object for each Tool you want to use
   */
  tools: {
    header: {
      class: Header,
      inlineToolbar: ["link"],
    },
    list: {
      class: List,
      inlineToolbar: true,
    },
  },
});
```

###Available tools options
`class` Tool class

`config` Tool specific configuration passed to Tool constructor

`inlineToolbar` controls which Inline Tool should be available in your Block Tool. Accepts boolean value or array of Inline Tools names

`shortcut` shortcut for Tool. You can read more about the format here

`toolbox` option to rewrite Tool`s internal toolbox icon and title. The format is the same as here
