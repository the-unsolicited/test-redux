export interface IJob {
  id: string;
}

export class Job implements IJob {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

interface IDesk {
  jobs: Job[];
}

export class Desk implements IDesk {
  public jobs = new Array<Job>();

  constructor() {
    this.addJob();
  }

  addJob(): void {
    const job = new Job();
    this.jobs.push(job);
  }
}
