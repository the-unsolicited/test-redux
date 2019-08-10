// interface Job {
//   name: string;
//   date?: Date;
//   phone?: string;
//   reward?: string;
//   reward2?: string;
// }

interface JobDefault {
  name: string;
}

interface JobKia extends JobDefault {
  rank: string;
  place: string;
  date: Date;
  cause: string;
}

interface JobCredit extends JobDefault {
  percent: string;
  percent2: string;
  cashback: string;
  phone: string;
}

interface JobSweeps extends JobDefault {
  reward: string;
  phone: string;
  date: Date;
}

interface JobAuto extends JobDefault {
  reward: string;
  phone: string;
  date: Date;
  gift: string;
  reward2: string;
}

interface JobCharity extends JobDefault {
  reward: string;
  phone: string;
}

interface JobResort extends JobDefault {
  reward: string;
  date: Date;
  phone: string;
}

interface JobScrews extends JobDefault {
  reward: string;
  date: Date;
  reward2: string;
}

export type Job = JobKia | JobCredit | JobSweeps | JobAuto | JobCharity | JobResort | JobScrews;

export interface JobState {
  jobs: Job[];
}

export const CREATE_JOB = 'CREATE_JOB';
export const DELETE_JOB = 'DELETE_JOB';

interface CreateJobAction {
  type: typeof CREATE_JOB;
  payload: Job;
}

interface DeleteJobAction {
  type: typeof DELETE_JOB;
  meta: {
    jobId: number;
  };
}

export type JobActionTypes = CreateJobAction | DeleteJobAction;
