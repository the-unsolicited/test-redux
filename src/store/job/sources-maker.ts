import sourcesData from "./sources";
import { Job } from "./types";

interface JobSource {
  id: string;
  display: string;
  lines: Array<{
    id: string;
    display: string;
    hour?: boolean;
    future?: boolean;
    values?: Array<{
      form?: string;
      term?: string;
      both?: string;
    }>;
  }>;
}

export class JobFactory {
  static sources = new Map<string, JobSource>();
  static makeJobSources(): void {
    sourcesData.forEach(source => {
      JobFactory.sources.set(source.id, source);
    });
  }
  static makeJob(keys: string[]): Job {
    if (JobFactory.sources.size === 0) {
      JobFactory.makeJobSources();
    }

    const index = Math.floor(Math.random() * keys.length);
    const key = keys[index];
    const source = JobFactory.sources.get(key);

    const id = "000";
    const name = "Stan Lee";
    const alertText = `${id} ${(source as JobSource).display}`;
    let terminalText = `${alertText}\n${name}`;
    

    const job: Job = {
      id,
      name,
      alertText,
      terminalText,
    };

    return job;
  }
}
