import m0 from './images/m0.png'
import m1 from './images/m1.png'
import m2 from './images/m2.png'
import m3 from './images/m3.png'
import m4 from './images/m4.png'
import m5 from './images/m5.png'
import m6 from './images/m6.png'
import m7 from './images/m7.png'
import m8 from './images/m8.png'
import m9 from './images/m9.png'
import m10 from './images/m10.png'
import m11 from './images/m11.png'
import m12 from './images/m12.png'
import m13 from './images/m13.png'
import m14 from './images/m14.png'
import m15 from './images/m15.png'
const arrayOfImages = [m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15]

export default function moonLink(num){
    const selection = Math.round(num*100/6.66)
    return arrayOfImages[selection]
}

export function moonLabeling(num){
    console.log(num)
    switch (true) {
        case num < 0.0675:
            return "New Moon"
        case num < 0.1925:
            return "Waxing Crescent Moon"
        case num < 0.3175:
            return "First Quarter Moon"
        case num < 0.4425:
            return "Waxing Gibbous Moon"
        case num < 0.5675:
            return "Full Moon Moon"
        case num < 0.6925:
            return "Waning Gibbous Moon"
        case num < 0.8175:
            return "Third Quarter Moon"
        case num < 0.9425:
            return "Waning Crescent Moon"
        default:
            return "New Moon"
    }
}