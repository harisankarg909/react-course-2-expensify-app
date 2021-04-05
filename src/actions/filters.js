

//Set text filter
export const setTextFilter = (text='') =>{
    return {
        type: 'TEXT_FILTER',
        text
    }
}
//sort by date
export const sortByDate = () =>{
    return {
        type: 'SORT_BY_DATE',

    }
}
//sort by amount
export const sortByAmount = () =>{
    return {
        type: 'SORT_BY_AMOUNT',

    }
}
//set start date
export const setStartDate = (date = undefined) =>{
    return {
        type: 'SET_START_DATE',
        date
    }
}
//set end date
export const setEndDate = (date = undefined) =>{
    return {
        type: 'SET_END_DATE',
        date
    }
}