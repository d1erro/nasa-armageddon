export const formatAsteroidName = (name: string) => {
    const regex = /\((.*?)\)/
    const match = name.match(regex)

    if (match && match[1]) {
        return match[1]
    } else {
        return ''
    }
}
