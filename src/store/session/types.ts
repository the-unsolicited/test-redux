enum FormTypes {
  CHARITY,
  RESORT,
  CREDIT,
  SWEEPS,
  SCREWS,
  AUTO,
}

export interface Session {
  screen: string;
  duration: number;
  forms: string[];
  count: number;
  wait?: boolean;
}

export interface SesstionState {
  sessions: Session[];
}

export const FETCH_SESSION = 'FETCH_SESSION';
export const RECEIVE_SESSION = 'RECEIVE_SESSION';
export const FAILURE_SESSION = 'FAILURE_SESSION';

export const SELECT_SESSION = 'SELECT_SESSION';
export const FINISH_SESSION = 'FINISH_SESSION';
