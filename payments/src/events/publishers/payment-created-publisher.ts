import { Subjects, Publisher, PaymentCreatedEvent } from '@dsttickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
