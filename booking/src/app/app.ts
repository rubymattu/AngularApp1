import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingList } from './bookingList';
import { BookingItem } from './bookingItem';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  protected title = 'booking';

  private list = new BookingList("Raveena", [
    new BookingItem("Rattlesnake Point Conservation Area", "9:00 am - 12:00 noon", true),
    new BookingItem("Rattlesnake Point Conservation Area", "12:00 pm - 3:00 pm"),
    new BookingItem("Rattlesnake Point Conservation Area", "3:00 pm - 6:00 pm"),

    new BookingItem("Glen Haffy Conservation Area", "9:00 am - 12:00 noon"),
    new BookingItem("Glen Haffy Conservation Area", "12:00 pm - 3:00 pm", true),
    new BookingItem("Glen Haffy Conservation Area", "3:00 pm - 6:00 pm"),

    new BookingItem("Heart Lake Conservation Area", "9:00 am - 12:00 noon"),
    new BookingItem("Heart Lake Conservation Area", "12:00 pm - 3:00 pm"),
    new BookingItem("Heart Lake Conservation Area", "3:00 pm - 6:00 pm", true),

    new BookingItem("Mountsberg Conservation Area", "9:00 am - 12:00 noon"),
    new BookingItem("Mountsberg Conservation Area", "12:00 pm - 3:00 pm"),
    new BookingItem("Mountsberg Conservation Area", "3:00 pm - 6:00 pm")
  ]);

  get username(): string {
    return this.list.user;
  }

  get bookings(): readonly BookingItem[] {
    return this.list.bookings;
  }

  get itemCount(): number {
    return this.bookings.filter(item => !item.booked).length;
  }
}

