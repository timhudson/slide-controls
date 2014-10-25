var slideState = require('slide-state')
var slideControls = require('./')

var state = slideState()
slideControls(state)

state(function(changes) {
  console.log(changes)
})

// Use ← → to control page navigation
// and ↑ ↓ to control sub page navigation
