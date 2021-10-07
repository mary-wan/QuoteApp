import { Pipe} from '@angular/core';
import { TimeAgoPipe } from 'time-ago-pipe';

@Pipe({
  name: 'dateCount',
  pure: false
})
export class DateCountPipe extends TimeAgoPipe {

  transform(value: any): string {
    return super.transform(value);
  }
}