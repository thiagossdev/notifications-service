import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationBodyCreate } from '../dtos/notification-body-create';
import { SendNotification } from 'src/application/use-cases/send-notification';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Get()
  list() {
    return [];
  }

  @Post()
  async create(@Body() body: NotificationBodyCreate) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification };
  }
}