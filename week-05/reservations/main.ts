import { Reservation } from "./Reservation";

function initializeReservations(num: number): Reservation[] {
  let reservations: Reservation[] = [];
  for (let i = 0; i < num; i++) {
    reservations.push(new Reservation);
  }
  return reservations;
}

let reservations: Reservation[] = initializeReservations(100);

for(let reservation of reservations){
  reservation.print();
}