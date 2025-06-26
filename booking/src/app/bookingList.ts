import { BookingItem } from "./bookingItem";

export class BookingList {
  constructor(
    public user: string,
    private bookingItems: BookingItem[] = []
  ) {
    // no statements required
  }

  get bookings(): readonly BookingItem[] {
    return this.bookingItems;
  }
}
