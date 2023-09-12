export interface PostCardObj {
  userId: number;
  id: number;
  body: string;
  title: string;
}

export interface PostProps {
  title: string;
  id: number;
  body: string;
}

export interface UserType {
  name: string;
  sessionId: number;
}
