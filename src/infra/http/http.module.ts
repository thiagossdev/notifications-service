import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { ReadNotification } from '@application/use-cases/read-notification';
import { CancelNotification } from '@application/use-cases/cancel-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    GetRecipientNotifications,
    CountRecipientNotifications,
  ],
})
export class HttpModule {}
