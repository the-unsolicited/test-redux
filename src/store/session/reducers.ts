import { SesstionState, SessionActions, FETCH_SESSION, RECEIVE_SESSION, FAILURE_SESSION, SELECT_SESSION } from "./types";

const initialState: SesstionState = {
  isLoading: false,
  errorMessage: "",
  sessions: [],
  currentSession: "",
};

export function sessionReducer(
  state = initialState,
  action: SessionActions,
): SesstionState {
  switch (action.type) {
    case FETCH_SESSION: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case RECEIVE_SESSION: {
      return {
        ...state,
        sessions: action.payload,
      };
    }
    case FAILURE_SESSION: {
      return {
        ...state,
        errorMessage: action.meta.error.message,
      };
    }
    case SELECT_SESSION: {
      return {
        ...state,
        currentSession: action.meta.currentSession,
      };
    }
    default: {
      return state;
    }
  }
}
