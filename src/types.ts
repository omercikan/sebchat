export interface Chat {
  id: string;
  message: string;
  clientTime: string;
  ServerTime: string;
  userId: string;
  timeInformation: string;
}

export interface ChatItemProps {
  user: Chat;
};