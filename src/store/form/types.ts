enum FieldTypes {
  FAMILY,
  NAME,
  DATE,
  PLACE,
  PERCENT,
  PERCENT2,
  CASHBACK,
  PHONE,
  REWARD,
  REWARD2,
  GIFT,
}

export interface Form {
  id: string;
  fieldColor: string;
  textColor: string;
  fields: string[];
}

export interface FormState {
  forms: Form[];
}
