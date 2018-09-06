
//Set Text Filter

export const setTextFilter = (text = '') => ({
    type: 'SET TEXT FILTER',
    text
});

//Sort By amount
export const sortByAmount = () => ({
    type: 'SORT BY AMOUNT',
});


//Sort by date

export const sortByDate = () => ({
    type: 'SORT BY DATE',
});

//Set Start Date
export const setStartDate = (startDate) => ({
    type: 'SET START DATE',
    startDate
});

//Set End Date
export const setEndDate = (endDate) => ({
    type: 'SET END DATE',
    endDate
});
