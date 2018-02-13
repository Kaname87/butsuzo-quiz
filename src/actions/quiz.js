export const startQuiz = () => (
  {
    type: 'START_QUIZ',
  }
);

export const quitQuiz = () => (
  {
    type: 'QUIT_QUIZ',
  }
);

export const clickShowReview = () => (
  {
    type: 'SHOW_REVIEW',
  }
);

export const selectAnswer = id => (
  {
    type: 'SELECT_ANSWER',
    id,
  }
);

export const nextQuestion = () => (
  {
    type: 'NEXT_QUESTION',
  }
);
