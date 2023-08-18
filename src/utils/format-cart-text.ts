export const formatCartText = (num: number) => {
    if (num === 0) {
        return 'астероидов'
    } else if (num === 1) {
        return 'астероид'
    } else if (num >= 2 && num <= 4) {
        return 'астероида'
    } else if (num >= 5 && num <= 20) {
        return 'астероидов'
    } else {
        const lastDigit = num % 10
        if (lastDigit === 1) {
            return 'астероид'
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            return 'астероида'
        } else {
            return 'астероидов'
        }
    }
}
