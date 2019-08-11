export interface Job {
  id: string;
  name: string;
  alertText: string;
  terminalText: string;
}

export interface JobState {
  jobs: (Job | undefined)[];
}

export const CREATE_JOB = "CREATE_JOB";
export const DELETE_JOB = "DELETE_JOB";

interface CreateJobAction {
  type: typeof CREATE_JOB;
  payload: Job;
  meta: {
    indexJob: number;
  };
}

interface DeleteJobAction {
  type: typeof DELETE_JOB;
  meta: {
    indexJob: number;
  };
}

export type JobActions = CreateJobAction | DeleteJobAction;
