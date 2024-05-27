import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  public formatDate(dateString: string | Date): string {
    if (!dateString) return '';

    let date: Date = new Date(dateString);
    
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed
    const year = date.getFullYear();

    const dayString = day < 10 ? `0${day}` : day.toString();
    const monthString = month < 10 ? `0${month}` : month.toString();

    return `${dayString}/${monthString}/${year}`;
  }
}
