// enum FormTypes {
//   CHARITY,
//   RESORT,
//   CREDIT,
//   SWEEPS,
//   SCREWS,
//   AUTO,
// }

export interface Session {
  screen: string;
  duration: number;
  forms: string[];
  count: number;
  wait?: boolean;
}

export interface SesstionState {
  isLoading: boolean;
  errorMessage: string;
  sessions: Session[];
  currentSession: string;
}

export const FETCH_SESSION = "FETCH_SESSION";
export const RECEIVE_SESSION = "RECEIVE_SESSION";
export const FAILURE_SESSION = "FAILURE_SESSION";
export const SELECT_SESSION = "SELECT_SESSION";

interface FetchSessionAction {
  type: typeof FETCH_SESSION;
}

interface ReceiveSessionAction {
  type: typeof RECEIVE_SESSION;
  payload: Session[];
}

interface FailureSessionAction {
  type: typeof FAILURE_SESSION;
  meta: {
    error: Error;
  };
}

interface SelectSessionAction {
  type: typeof SELECT_SESSION;
  meta: {
    currentSession: string;
  };
}

export type SessionActions = FetchSessionAction | ReceiveSessionAction | FailureSessionAction | SelectSessionAction;
