'use strict';

this.something = 'outside the object';

let obj = {
  something: 'another thing',
  nonArrow: function() {
    console.log('from inside non arrow: ' + this.something);
  },
  arrow: () => {
    console.log('inside arrow: ' + this.something)
  },
  that: this
};

obj.nonArrow();
obj.arrow();
let bindCtx = obj.nonArrow.bind({something: 'bind context'});
bindCtx();

console.log(obj.that);
