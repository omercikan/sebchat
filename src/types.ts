export interface Chat {
  chatId: string;
  userOne: User;
  userTwo: User;
  userOneId: string;
  userTwoId: string | undefined;
  participants: Participant[];
  messages: Message[];
  createdAt: string;
}

export interface User {
  displayName: string | null;
  metadata: UserMetadata;
  userId: string | undefined;
}

export interface UserMetadata {
  createdAt?: string;
  creationTime?: string;
  lastLoginAt?: string;
  lastSignInTime?: string;
  serverTime?: string;
  timeInformation?: string;
  userEmailVerified?: boolean;
}

export interface Participant {
  userOne?: UserDetails;
  userTwo?: UserDetails;
}

export interface UserDetails {
  displayName: string;
  metadata: UserMetadata;
  userId: string;
}

export interface Message {
  sender: UserDetails;
  message: string;
  timeStamp: string;
}

export interface UserContactList {
  id: string;
  admin: boolean;
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

export interface ChatListInterface {
  chatId: string;
  id: string;
  messages: MessageInterface[];
  otherUser: {
    admin: boolean;
    userName: string;
    userSurname: string;
    displayName: string;
    metadata: {
      createdAt: string;
      creationTime: string;
      lastLoginAt: string;
      lastSignInTime: string;
    };
    userId: string;
  };
  serverTime: string;
  timeInformation: string;
  userOneDisplayName: string;
  userOne: UserContactList;
  userTwo: {
    admin: boolean;
    displayName: string;
    metadata: {
      createdAt: string;
      creationTime: string;
      lastLoginAt: string;
      lastSignInTime: string;
    };
    userId: string;
  };
}

export interface MessageInterface {
  currentTime: string;
  message: string;
  sender: {
    displayName: string;
    userId: string;
  };
  timestamp: number;
}

export type UserUploadPhotoProps = {
  userPhoto: string;
  setUserPhoto: React.Dispatch<React.SetStateAction<string>>;
};
