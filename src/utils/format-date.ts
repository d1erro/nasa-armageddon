export const formatDate = (date: string) => {
    const months = [
        'янв',
        'фев',
        'мар',
        'апр',
        'май',
        'июн',
        'июл',
        'авг',
        'сен',
        'окт',
        'ноя',
        'дек',
    ]
    const [year, month, day] = date.split('-')
    const formattedDate = `${parseInt(day, 10)} ${
        months[parseInt(month, 10) - 1]
    } ${year}`

    return formattedDate
}
