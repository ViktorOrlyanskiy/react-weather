export const displayDate = (num) => {
    const date = new Date()
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