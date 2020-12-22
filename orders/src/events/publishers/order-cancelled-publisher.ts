import { Publisher, OrderCancelledEvent, Subjects } from '@dsttickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
