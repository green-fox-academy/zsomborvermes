interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

export class Reservation implements Reservationy {
  private static UsedReservationCodes: string[] = [];

  private dow: string;
  private code: string;
  private random: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
  private daysOfWeek: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  constructor() {
    this.dow = this.daysOfWeek[Math.floor(Math.random() * this.daysOfWeek.length)];
    this.code = this.getRandomCode();
    Reservation.UsedReservationCodes.push(this.code);
  }

  private getRandomCode(): string {
    let randomCode: string = '';
    for (let i = 0; i < 8; i++) {
      randomCode += this.random[Math.floor(Math.random() * this.random.length)];
    }
    if (Reservation.UsedReservationCodes.indexOf(randomCode) === -1) {
      return randomCode;
    }

    return this.getRandomCode();
  }

  getDowBooking(): string {
    return this.dow;
  }

  getCodeBooking(): string {
    return this.code;
  }

  print(): void {
    console.log(`Booking# ${this.code} for ${this.dow}`);
  }
}
