import { numberWithCommas } from "../../utils/functions";

export default function ReturnsText({ value, includeSign = false, percent=false, inr=false, fontSize, fontWeight, addCommas = false, decimalPlaces=4}) {
    const getValue = (value) => {
        let text;
        let valueString = Number(value.toFixed(decimalPlaces))
        if (addCommas && value > 0) {
            valueString = numberWithCommas(Number(value).toFixed(decimalPlaces))
        }
        if (includeSign) {
            if (value > 0) {
                text =  `+ ${valueString}`
            } else {
                text = `${valueString}`
            }
        } else {
           if (value > 0) {
                text =  `${valueString}`
            } else {
                text = `${ -1 * valueString}`
            }
        }

        if (percent) {
            text += '%'
        }
        if (inr) {
            text='₹ '+text
        }
        console.log(value, text, includeSign, percent, inr, addCommas)
        return text
    }
    return <p style={{
        color: value >= 0 ? '#15DD65' : '#E44242',
        fontSize,
        fontWeight
    }}>{getValue(value)}</p>
}