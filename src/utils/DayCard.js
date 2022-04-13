export const displayTemp = (num) => {
    return (Math.round(num) > 0) ? `+${Math.round(num)}º` : `${Math.round(num)}º`;
}

export const displayDate = (num) => {
    const date = new Date(num * 1000)
    return `${date.getDate()} ${getNameMonth(date.getMonth())}`

    function getNameMonth(num) {
        if (num === 0) { return 'января' }
        else if (num === 1) { return 'февраля' }
        else if (num === 2) { return 'марта' }
        else if (num === 3) { return 'апреля' }
        else if (num === 4) { return 'мая' }
        else if (num === 5) { return 'июня' }
        else if (num === 6) { return 'июля' }
        else if (num === 7) { return 'августа' }
        else if (num === 8) { return 'сентября' }
        else if (num === 9) { return 'октября' }
        else if (num === 10) { return 'ноября' }
        else if (num === 11) { return 'декабря' }
    }
}

export const displayDay = (num, index) => {
    const date = new Date(num * 1000)
    const day = date.getDay()

    return (index < 2) ? getNameDay(index) : getNameWeekDay(day);

    function getNameWeekDay(day) {
        if (day === 0) { return 'Вс' }
        else if (day === 1) { return 'Пн' }
        else if (day === 2) { return 'Вт' }
        else if (day === 3) { return 'Ср' }
        else if (day === 4) { return 'Чт' }
        else if (day === 5) { return 'Пт' }
        else if (day === 6) { return 'Сб' }
    }

    function getNameDay(index) {
        return (index === 0) ? 'Сегодня' : 'Завтра';
    }
}
