import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@dsttickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
