import { Job, CREATE_JOB, DELETE_JOB, JobActionTypes } from './types'

export function createJob(newJob: Job): JobActionTypes {
  return {
    type: CREATE_JOB,
    payload: newJob,
  };
}

export function randomJob(): JobActionTypes {
  const newJob: Job = {
    name: 'hi',
    reward: 'dhidf',
    phone: '1-29090=-2033',
  };
  return {
    type: CREATE_JOB,
    payload: newJob,
  };
}

export function deleteJob(jobId: number): JobActionTypes {
  return {
    type: DELETE_JOB,
    meta: {
      jobId,
    },
  };
}
