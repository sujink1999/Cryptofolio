export function numberWithCommas(x) {
    const arr = x.toString().split('.')
    let s = arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (arr.length === 2) {
        s+='.'+arr[1]
    }
    return s
}

export const getImage = (id) => `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`