export const formatDistanceText = (count: number) => {
    if (count === 0) {
        return 'лунных орбит';
    } else if (count === 1) {
        return 'лунная орбита';
    } else if (count >= 2 && count <= 4) {
        return 'лунные орбиты';
    } else if (count >= 5 && count <= 20) {
        return 'лунных орбит';
    } else {
        const lastDigit = count % 10;
        if (lastDigit === 1) {
            return 'лунная орбита';
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            return 'лунные орбиты';
        } else {
            return 'лунных орбит';
        }
    }
}