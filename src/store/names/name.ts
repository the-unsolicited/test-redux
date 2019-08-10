export interface Value {
  term: string;
  form: string;
}

export interface Line {
  id: string;
  display: string;
  values: Value[];
}

export interface Spec {
  id: string;
  display: string;
  lines: Line[];
}

export interface Job {
  id: string;
  name: string;
  alertText: string;
  terminalText: string;
  spec: Spec;
}

const specs = new Map<string, Spec>();
specs.set("charity", {
  id: "charity",
  display: "CHARITY DONATION",
  lines: [
    {
      id: "name",
      display: "",
      values: [],
    },
    {
      id: "reward",
      display: "Request: ",
      values: [
        { term: "$10", form: "$10" },
        { term: "$20", form: "$20" },
        { term: "$50", form: "$50" },
        { term: "$75", form: "$75" },
        { term: "$100", form: "$100" },
        { term: "$150", form: "$150" },
        { term: "$200", form: "$200" },
        { term: "$300", form: "$300" },
      ],
    },
  ],
});

const ie = <Spec>specs.get("charity");
ie.lines[0].values[0].form
