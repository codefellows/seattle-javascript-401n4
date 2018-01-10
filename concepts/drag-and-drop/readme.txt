__.js -- activeKeys method (filter Object.keys)

CardList Component -- Wrapped up in a DropZone, with an "onComplete" that will:
    Inspect the dataTransferItem
    Delete from the old category
    Add to the new one

Card Component -- Wrapped up in a Draggable Component
    Send dataTransferItem as the card

Reducer/Action:  CARD_INSERT (add the card to a cat just like add does)

Draggable:
    Wraps up this.props.children
    DragStart and DragEnd: Toggle the "dragging" state of the children
    Sets the class of "draggable" always true and "dragging" based on the state
    Sets the dataTransferItem as text/json and the card

DropZone
    Wraps up the cardList stuff
    Responds to the events: dragOver, dragEnter, dragLeav, drop
    Always set class to "deck"
    Sometimes set to "drop-ready" based on the state
    On drop - grag the dataTransferItem (the card object) and pass along to this.props.handleleComplete