// получает текущее время
export const getTime = () => {
    const time = new Date();
    const hours = time.getHours();
    const min = time.getMinutes();

    const addBeforeNull = (num) => {
        return (num < 10) ? '0' + num : num;
    }
    return `${addBeforeNull(hours)}:${addBeforeNull(min)}`;
}


// выбирате иконку погоды по id из массива погоды
export const displayIconWeather = (id) => {
    if (id > 300 && id < 400) { return 'small-rain' }
    else if (id === 500 || id === 501) { return 'small-rain-sun' }
    else if (id > 501 && id < 700) { return 'rain' }
    else if (id === 800) { return 'sun' }
    else if (id > 800) { return 'mainly-cloudy' }
}
