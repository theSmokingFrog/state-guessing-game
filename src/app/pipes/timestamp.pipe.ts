import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

  private static toFormatedString(source: number): string {
    return Math.floor(source % 60).toFixed().padStart(2, '0');
  }

  transform(timeValueInSeconds: number, ...args: any[]): string {
    if (timeValueInSeconds) {
      const minutes = timeValueInSeconds / 60;
      const hours = minutes / 60;
      return `${TimestampPipe.toFormatedString(hours)} : ${TimestampPipe.toFormatedString(minutes)} : ${TimestampPipe.toFormatedString(timeValueInSeconds)}`;
    } else {
      return '-- : -- : --';
    }
  }
}
