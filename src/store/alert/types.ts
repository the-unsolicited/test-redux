interface Alert {
  family: string;
  name: string;
  reward?: string;
  reward2?: string;
  phone?: string;
  date?: string;
  percent?: string;
  percent2?: string;
  cashback?: string;
  gift?: string;
  place?: string;
}

export interface AlertState {
  alerts: Alert[];
}

const myAlert: AlertState = {
  alerts: [
    {
      family: "Lee family",
      name: "Stan Lee",
      reward: "$40",
      phone: "1-9800-909",
    },
    {
      family: "John family",
      name: "Keep John",
      reward: "$1200",
      date: "04/07/1925",
      phone: "1-9900-434",
    },
  ]
};

const alert = myAlert.alerts[1];
