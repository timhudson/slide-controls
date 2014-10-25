var on = require('dom-event')
var document = require('global/document')

module.exports = function(state) {
  if (!state) throw new Error('instance of slide-state must be provided')

  on(document, 'keydown', handleKeyPress)

  function handleKeyPress(e) {
    if (e.keyCode === 39) state.next()
    if (e.keyCode === 37) state.prev()
    if (e.keyCode === 40) state.nextSub()
    if (e.keyCode === 38) state.prevSub()
  }
}
