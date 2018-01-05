import uuid from 'uuid/v4';

// {title:"foo"}
export const cardCreate = (card) => {

    card.id = uuid();
    card.createDate = new Date();

    return {
        type:"CARD_ADD",
        payload: card
    };

};

export const cardDelete = (card) => {
    return {
        type:"CARD_DELETE",
        payload: card
    }
};

export const cardUpdate = (card) => {
    return {
        type:"CARD_UPDATE",
        payload: card
    }
};

export const cardInsert = (card) => {
    return {
        type: "CARD_INSERT",
        payload: card
    }
};