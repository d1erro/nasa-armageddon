export const formatFullDate = (inputDate: string): string => {
    const months: { [key: string]: string } = {
        Jan: 'янв',
        Feb: 'фев',
        Mar: 'мар',
        Apr: 'апр',
        May: 'май',
        Jun: 'июн',
        Jul: 'июл',
        Aug: 'авг',
        Sep: 'сен',
        Oct: 'окт',
        Nov: 'ноя',
        Dec: 'дек',
    }

    const [datePart, timePart] = inputDate.split(' ')
    const [year, month, day] = datePart.split('-')
    const formattedDate = `${parseInt(day)} ${months[month]} ${parseInt(
        year,
    )} года в ${timePart}`

    return formattedDate
}
