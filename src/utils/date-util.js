export const getTodayDate = () => {
    return new Date()
}

export const getFormattedDate = (date) => {
    const [year, month, day] = [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
    ]
    return `${month}-${day}-${year}`
}

export const getDateBefore = (days) => {
    const dateBefore = getTodayDate()
    dateBefore.setDate(dateBefore.getDate() - days)
    return getFormattedDate(dateBefore)
}
