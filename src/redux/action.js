export const setProgramsList = programs => ({
    type: 'SET_PROGRAM_LIST',
    payload: programs
})

export const updateProgramsList = programs => ({
    type: 'UPDATE_PROGRAM_LIST',
    payload: programs
})

export const setLoader = value => ({
    type: 'SET_LOADER',
    payload: value
})