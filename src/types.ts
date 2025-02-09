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
  userEmailVerified: boolean;
}

export interface ChatItemProps {
  user: Chat;
}

export interface chatListInterface {
  chatId: string;
  messages: [];
  serverTime: string;
  timeInformation: string;
  userOne: UserContactList;
  userTwo: {
    displayName: string;
    metadata: [
      {
        createdAt: string;
        creationTime: string;
        lastLoginAt: string;
        lastSignInTime: string;
      }
    ];
    userId: string;
  };
}
