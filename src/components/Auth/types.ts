type AuthInputValues = {
  name: string;
  email: string;
  password: string;
}

export type RegisterInputValues = AuthInputValues;

export type LoginInputValues = Omit<RegisterInputValues, "name">; 

export type ModalForm = {
  onClose: () => void;
}