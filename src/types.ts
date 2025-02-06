export interface Chat {
  id: string;
  message: string;
  clientTime: string;
  ServerTime: string;
  userId: string;
  timeInformation: string;
}

export interface UserContactList {
  id: string;
  registeredTime: string;
  serverTime: string;
  timeInformation: string;
  userId: string;
  userName: string;
  userSurname: string;
  userProfilPhoto: string;
}

export interface ChatItemProps {
  user: Chat;
}
