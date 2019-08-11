import { JobState, JobActions, CREATE_JOB, DELETE_JOB } from "./types";

const initialState: JobState = {
  jobs: new Array(11),
};

export function jobReducer(
  state = initialState,
  action: JobActions,
): JobState {
  switch (action.type) {
    case CREATE_JOB: {
      return {
        ...state,
        jobs: [
          ...state.jobs.slice(0, action.meta.indexJob),
          { ...action.payload },
          ...state.jobs.slice(action.meta.indexJob + 1),
        ],
      };
    }
    case DELETE_JOB: {
      return {
        ...state,
        jobs: [
          ...state.jobs.slice(0, action.meta.indexJob),
          undefined,
          ...state.jobs.slice(action.meta.indexJob + 1),
        ],
      };
    }
    default: {
      return state;
    }
  }
}
