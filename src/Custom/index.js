export const existInArrayById = (array, id) => {
    return array.filter(item => item.id == id)
}

export function setValuePropsByIdAndGetData(array, props, id, value) {
    array.forEach(item => {
        if(item.id === id) {
            item[props] = value;
        }
    });

    return array;
}