import data from '../../data.json';

// This state will be saved under `quiz`.
// since this reducer is combined like this
//   const rootReducer = combineReducers({
//     quiz: quizReducer,
//   })
const initialState = {
  isStarted: false,
  isFinished: false,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'START_QUIZ':
    const initialQuizSet = getNewQuizSet(0);
    return {
      ...state,
      isStarted: true,

      currentQuestionNumber: 1,
      lastQuestionNumber: 3,

      showResult: false,
      isCorrect: false,
      showReview: false,

      // TODO: quizset should be fetched via api
      // and can be another state
      name: initialQuizSet.name,
      place: initialQuizSet.place,
      answer: initialQuizSet.answer,
      answerOptions: initialQuizSet.answerOptions,
    };

  case 'QUIT_QUIZ':
    return {
      ...state,
      isStarted: false,
      isFinished: false,
    };

  case 'SHOW_REVIEW':
    return {
      ...state,
      showReview: true,
    };

  case 'SELECT_ANSWER':
    return {
      ...state,
      isCorrect: state.answer === action.id,
      showResult: true,
      isFinished: state.currentQuestionNumber === state.lastQuestionNumber,
    };

  case 'NEXT_QUESTION':
    const nextQuizSet = getNewQuizSet(state.currentQuestionNumber);
    return {
      ...state,
      currentQuestionNumber: state.currentQuestionNumber + 1,
      isCorrect: false,
      showResult: false,
      name: nextQuizSet.name,
      place: nextQuizSet.place,
      answer: nextQuizSet.answer,
      answerOptions: nextQuizSet.answerOptions,
    };

  default:
    return state;
  }
};

const getNewQuizSet = (idx) => (
  data.quizSet[idx] || data.quizSet[0]
);

export default quizReducer;
