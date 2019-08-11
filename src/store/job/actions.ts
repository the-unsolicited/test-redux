import { Job, CREATE_JOB, DELETE_JOB, JobActions } from './types'

export function createJob(job: Job, indexJob: number): JobActions {
  return {
    type: CREATE_JOB,
    payload: job,
    meta: {
      indexJob,
    },
  };
}

export function deleteJob(indexJob: number): JobActions {
  return {
    type: DELETE_JOB,
    meta: {
      indexJob,
    },
  };
}
