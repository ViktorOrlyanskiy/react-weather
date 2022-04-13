// получает геолокацию пользователя
export const getGeolocation = async () => {

    const getPromise = async () => {
        const promise = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
        return promise;
    }

    const position = await getPromise();
    return position;
}

// ищет название города по координатам
export const searchCity = ({ lat, lon, listCities }) => {

    let tempCities = [];

    // первичный поиск ближайших городов
    const tempSearch = (lat, lon) => {
        let tempCities = [];
        let tempLat = Math.trunc(lat);
        let tempLon = Math.trunc(lon);

        for (let city of listCities) {
            if (tempLat === Math.trunc(city.coords.lat) && tempLon === Math.trunc(city.coords.lon)) {
                tempCities.push(city)
            }
        }
        return tempCities;
    }

    // финальный поиск ближайшего города
    const finalSearch = (lat, lon) => {

        let resultCity = '';
        let extCounter = 0;

        let firstFractionLat = lat.replace(/..\./g, '');
        let firstFractionLon = lon.replace(/..\./g, '');

        // сравнивает дробные части
        const comparesFraction = (first, last) => {
            let counter = 0;

            for (let i = 0; i < 4; i++) {
                if (first[i] === last[i]) {
                    counter++;

                    if (i === 1) {
                        counter += 0.5;
                    }
                    if (i > 1) {
                        counter += 0.2;
                    }
                }
            }
            return counter;
        }

        // перебирает временный массив городов и сравнивает координаты
        for (let city of tempCities) {
            let intCounter = 0;
            let lastFractionLat = city.coords.lat.replace(/..\./g, '');
            let lastFractionLon = city.coords.lon.replace(/..\./g, '');

            intCounter += comparesFraction(firstFractionLat, lastFractionLat);
            intCounter += comparesFraction(firstFractionLon, lastFractionLon);

            if (intCounter > extCounter) {
                extCounter = intCounter;
                resultCity = city.name;
            }
        }

        return resultCity;
    }

    tempCities = tempSearch(lat, lon);
    return finalSearch(lat, lon);
}


// ищет координаты по названию города
export const searchCoords = (city, listCities) => {
    city = city.replace(/[a-zA-Z]/g, '')
    if (city !== '') {
        for (let item of listCities) {
            if (item.name.toLowerCase() === city.toLowerCase()) {
                return [item.name, item.coords]
            }
        }
    }
    return ['', '']
}