export interface Answer {
  id: string;
  content: string;
  createdAt: Date;
  user: {
    id: string;
    name: string | null;
  };
}
