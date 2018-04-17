export const START = 'test/START'
export const END = 'test/END'

const initialState = {
  action: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        action: 'START CLICKED'
      }

    case END:
      return {
        ...state,
        action: 'END CLICKED'
      }

    default:
      return state
  }
}

export const clickStart = () => {
  return dispatch => {
    dispatch({
      type: START
    })
  }
}

export const clickEnd = () => {
  return dispatch => {
    dispatch({
      type: END
    })
  }
}
