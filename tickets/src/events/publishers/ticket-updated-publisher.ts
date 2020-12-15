import { Publisher, Subjects, TicketUpdatedEvent } from '@dsttickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
