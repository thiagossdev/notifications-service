import { IsNotEmpty } from 'class-validator';

export class NotificationBodyCreate {
  @IsNotEmpty()
  recipientId: string;

  content: string;

  category: string;
}
