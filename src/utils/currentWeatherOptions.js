// преобразует скорость ветра из числа в текстовое описание
export const changeOutSpeedWind = (num) => {
    if (num <= 5) {
        return 'слабый ветер'
    }
    else if (num > 5 && num <= 10) {
        return 'умеренный ветер'
    }
    else if (num > 10 && num <= 18) {
        return 'сильный ветер'
    }
    else if (num > 18 && num <= 30) {
        return 'штормовой ветер'
    }
    else if (num > 30) {
        return 'ураганный ветер'
    }
}

// преобразует направление ветра из градусов в текстовое описание
export const changeOutDirectionWind = (num) => {
    if (num > 315 && num <= 22.5) {
        return 'северный'
    }
    else if (num > 22.5 && num <= 67.5) {
        return 'северо-восточный'
    }
    else if (num > 67.5 && num <= 112.5) {
        return 'восточный'
    }
    else if (num > 112.5 && num <= 157.5) {
        return 'юго-восточный'
    }
    else if (num > 157.5 && num <= 202.5) {
        return 'южный'
    }
    else if (num > 202.5 && num <= 247.5) {
        return 'юго-западный'
    }
    else if (num > 247.5 && num <= 292.5) {
        return 'западный'
    }
    else if (num > 292.5 && num <= 337.5) {
        return 'северо-западный'
    }
}