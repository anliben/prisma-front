import DomainInterface from "./domain.interface";

export default interface UserInterface {
  id: number;
  name: string;
  phone: string;
  email: string;
  dominios: Array<DomainInterface>
}
