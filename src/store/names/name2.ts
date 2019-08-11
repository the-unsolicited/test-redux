export interface Job {
  id: string;
  name: string;
  alertText: string;
  terminalText: string;
  spec: {
    id: string;
    display: string;
    lines: Array<{
      id: string;
      display: string;
      values: Array<{
        term: string;
        form: string;
      }>
    }>
  }
}

const myJob: Job = {
  id: "Charity",
  name: "Stan Lee",
  alertText: "000 CHARITY DONATION",
  terminalText: "000 CHARITY DONATION\nStan Lee\nCALL: 1-800-900\n",
  spec: {
    id: "charity",
    display: "CHARITY DONATION",
    lines: [
      // {
      //   id: "name",
      //   value: {
      //     term: "Stan Lee",
      //     form: "Lee family",
      //   },
      // },
      // {
      //   id: "reward",
      //   display: "",
      //   value: {
      //     term: "$10",
      //     form: "$10",
      //   },
      // }
    ]
  }
};

interface IJob {
  id: string;
  display: string;
}

class UnsolicitedJob implements IJob {
  id: string;
  display: string;

  constructor({ id, display }: IJob) {
    this.id = id;
    this.display = display;
  }

  alertText(): string {
    return `${this.id} ${this.display}`;
  }

}

function makeJob() {
  const myUnsolicitedJob = new UnsolicitedJob({
    id: "001",
    display: "CHARITY DONATION",
  });
  
  console.log(myUnsolicitedJob.alertText());
}
