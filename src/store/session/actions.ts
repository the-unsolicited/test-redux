import { SessionActions, FETCH_SESSION, RECEIVE_SESSION, Session, FAILURE_SESSION, SELECT_SESSION } from "./types";

export function fetchSession(): SessionActions {
  return {
    type: FETCH_SESSION,
  };
}

export function receiveSession(sessions: Session[]): SessionActions {
  return {
    type: RECEIVE_SESSION,
    payload: sessions,
  };
}

export function failureSession(error: Error): SessionActions {
  return {
    type: FAILURE_SESSION,
    meta: {
      error,
    },
  };
}

export function selectSession(currentSession: string): SessionActions {
  return {
    type: SELECT_SESSION,
    meta: {
      currentSession,
    },
  };
}
