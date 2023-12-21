export interface Answer {
  id: string;
  content: string;
  createdAt: Date;
  user: { name: string };
}
