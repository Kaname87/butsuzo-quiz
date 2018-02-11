// This state will be saved under `quiz`.
// since this reducer is combined like this
//   const rootReducer = combineReducers({
//     quiz: quizReducer,
//   })
const initialState = {
  isStarted: false,
  isFinished: false,
}

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_QUIZ':
      return {
        ...state.quiz,
        isStarted: true,
      };
    case 'QUIT_QUIZ':
      return {
        ...state.quiz,
        isStarted: false,
        isFinished: false,
      };
    default:
      return state;
  }
}
export default quizReducer;
