import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent{}
// export class HomeComponent implements OnInit {
//   // Define the cards array
//   cards: any[] = [
//     { id: 1, class: 'purple-card1' },
//     { id: 2, class: 'purple-card2' },
//     { id: 3, class: 'purple-card3' },
//     { id: 4, class: 'purple-card4' },
//   ];

//   constructor(private el: ElementRef) {}

//   ngOnInit(): void {
//     // Any initialization if necessary
//   }

//   @HostListener('window:wheel', ['$event'])
// onWheelScroll(event: WheelEvent) {
//   // Get the cards and section
//   const cards = this.el.nativeElement.querySelectorAll('.info-card');
  
//   // Explicitly cast cards to an array of HTMLElement
//   const cardArray = Array.from(cards) as HTMLElement[];

//   let scrollDirection = event.deltaY > 0 ? 'down' : 'up';

//   // Find the current visible card
//   const visibleIndex = cardArray.findIndex((card: HTMLElement) => {
//     return card.style.transform === 'translateY(0%)';
//   });

//   if (scrollDirection === 'down' && visibleIndex < cardArray.length - 1) {
//     // Move the next card up over the current card
//     const nextCard = cardArray[visibleIndex + 1];
//     nextCard.style.transform = 'translateY(0%)'; // Show the next card
//     const currentCard = cardArray[visibleIndex];
//     currentCard.style.transform = 'translateY(-100%)'; // Move the current card up
//   }

//   if (scrollDirection === 'up' && visibleIndex > 0) {
//     // Move the previous card back into view
//     const prevCard = cardArray[visibleIndex - 1];
//     prevCard.style.transform = 'translateY(0%)'; // Show the previous card
//     const currentCard = cardArray[visibleIndex];
//     currentCard.style.transform = 'translateY(100%)'; // Move the current card down
//   }

//   // Prevent default scroll behavior
//   event.preventDefault();
// }
// }
