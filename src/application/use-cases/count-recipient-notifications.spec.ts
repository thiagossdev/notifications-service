import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'recipient-id-1',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'recipient-id-1',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'recipient-id-2',
      }),
    );

    const recipientCount1 = await countRecipientNotification.execute({
      recipientId: 'recipient-id-1',
    });
    const recipientCount2 = await countRecipientNotification.execute({
      recipientId: 'recipient-id-2',
    });

    expect(recipientCount1.count).toEqual(2);
    expect(recipientCount2.count).toEqual(1);
  });
});
