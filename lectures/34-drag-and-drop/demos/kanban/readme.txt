Option 1

    Add droppable=true to the card
    Add ondragstart handler to the card

    Add ondrop handler to the deck
    Add ondragover handler to the deck


Option 2 (wrapper)

    Action and Reducer -- INSERT

    When we drag
        - Identify the card (object)
        - dataTransfer.setData

    When we drop
        card = dataTransfer.getData()
        - Delete the card from its category
        - Change it's category
        - Insert the card into the new category

    <Draggable>
        ...card
    </Draggable>

    <DropZone>
        ...deck
    </DropZone>

