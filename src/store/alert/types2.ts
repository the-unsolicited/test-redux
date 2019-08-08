interface Alert {
  family: string;
  name: string;
}

export interface CharityAlert extends Alert {
  reward: string;
  phone: string;
}

export interface ResortAlert extends Alert {
  reward: string;
  date: string;
  phone: string;
}

export interface CreditAlert extends Alert {
  percent: string;
  percent2: string;
  cashback: string;
  phone: string;
}

export interface SweepsAlert extends Alert {
  reward: string;
  phone: string;
  date: string;
}

export interface ScrewsAlert extends Alert {
  reward: string;
  reward2: string;
  date: string;
}

export interface AutoAlert extends Alert {
  reward: string;
  reward2: string;
  date: string;
  gift: string;
  phone: string;
}

export interface KiaAlert extends Alert {
  date: string;
  place: string;
}

export type AlertTypes = CharityAlert | ResortAlert;

export interface AlertState {
  alerts: AlertTypes[];
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

const alert: Alert = <Alert>myAlert.alerts[1];
console.log(alert.family);
