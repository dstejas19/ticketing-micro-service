import { Publisher, Subjects, TicketCreatedEvent } from '@dsttickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
