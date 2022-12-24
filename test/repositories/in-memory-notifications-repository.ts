import { Notification } from 'src/application/entities/notification';
import { NotificationsRepository } from '../../src/application/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async list(): Promise<Notification[]> {
    return this.notifications;
  }

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
