export type RegisterInputValues = {
  name: string;
  email: string;
  password: string;
};

export type LoginInputValues = Pick<RegisterInputValues, "password" | "email">; 

export type ModalForm = {
  onClose: () => void;
}