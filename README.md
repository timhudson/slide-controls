# slide-controls

Add arrow-key listeners for controlling slide-state

## Example

``` js
var slideState = require('slide-state')
var slideControls = require('slide-controls')

var state = slideState()
slideControls(state)

state(function(changes) {
  console.log(changes)
})

// Use ← → to control page navigation
// and ↑ ↓ to control sub page navigation
```

## License

MIT
