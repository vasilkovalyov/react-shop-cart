export const existInArrayById = (array, id) => {
    return array.filter(item => item.id === id)
}

export function setValuePropsByIdAndGetData(array, props, id, value) {
    array.forEach(item => {
        if(item.id === id) {
            item[props] = value;
        }
    });

    return array;
}

export function calcTotalPriceCart(arrayProducts, count, price) {
    return arrayProducts.reduce((accumulator, targetProduct) => {
        return accumulator += (parseInt(targetProduct[count]) * parseFloat(targetProduct[price]));
    }, 0)
}
