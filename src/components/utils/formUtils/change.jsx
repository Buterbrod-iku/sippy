export const onChangeDefault = (event, array, setFunc, id) => {
    const newArray = array.map(item => {
        // Создаем копию объекта, чтобы не мутировать исходный массив
        if (item.id === id) {
            return {
                ...item,
                [event.target.name]: event.target.value
            };
        }
        return item;
    });

    // Обновляем состояние с новым массивом
    setFunc(newArray);
};


export const onChangeLogin = (event, object, setFunc) => {
    let newArray = object

    newArray[event.target.name] = event.target.value

    setFunc(newArray)
}

export const onChangeSearch = (event, object, setFunc) => {
    let newArray = object;

    newArray[event.target.name] = event.target.value;

    setFunc(newArray);
};


export function integerFormatter(value, prevValue) {
    if (!value) return value;

    if (['.', ','].includes(value[0])) {
        return prevValue;
    }

    const newValue = value.replace(/[^\d,.]/g, '');

    // Проверка на попытку ввода второй точки или запятой
    let pointsCounter = 0;
    for (let i = 0; i < newValue.length; i++) {
        if (['.', ','].includes(newValue[i])) {
            pointsCounter++;
        }
    }
    if (pointsCounter > 1) return prevValue;

    return newValue;
}