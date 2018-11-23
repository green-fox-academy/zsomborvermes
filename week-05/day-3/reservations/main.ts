import { Reservation } from "./Reservation";

function initReservations(num: number): Reservation[] {
  let reservations: Reservation[] = [];
  for (let i = 0; i < num; i++) {
    reservations.push(new Reservation());
  }
  return reservations;
}

console.time('initReservations: first element');
initReservations(1);
console.timeEnd('initReservations: first element');

console.time('initReservations(100000)');
let reservations: Reservation[] = initReservations(100000);
console.timeEnd('initReservations(100000)');


console.time('initReservations: 100002. element');
initReservations(1);
console.timeEnd('initReservations: 100002. element');

/* for (let reservation of reservations) {
  reservation.print();
} */