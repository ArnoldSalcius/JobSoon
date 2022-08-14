import { format } from 'date-fns'

export const formatDate = (date) => {
    return format(date, 'E, LLLL d, y');
}

export const formatDatePicker = (date) => {
    return format(date, 'yyyy-MM-dd')
}

export const formatDateTxt = (date) => {
    const newDate = date.split('-');
    return `${newDate[1]}/${newDate[2]}/${newDate[0]}`
}