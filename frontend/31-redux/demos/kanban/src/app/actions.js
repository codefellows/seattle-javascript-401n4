import uuid from 'uuid/v4';


// {title:"foo"}
export const categoryCreate = (category) => {

    category.id = uuid();
    category.createDate = new Date();

    return {
        type:"CATEGORY_ADD",
        payload: category
    };

};

export const categoryUpdate = (category) => {
    return {
        type: "CATEGORY_UPDATE",
        payload: category
    }
}