import { Component, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { isPlatformBrowser } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  constructor(private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {  //  Run this only in browser
      gsap.registerPlugin(ScrollTrigger);

      const videoCardSelectors = ['.purple-card1', '.purple-card2', '.purple-card3', '.purple-card4'];

    videoCardSelectors.forEach((selector) => {
      const card = this.el.nativeElement.querySelector(selector) as HTMLElement;
      const video = card?.querySelector('video') as HTMLVideoElement;

      if (video) {
        video.playbackRate = 0.5;
        video.pause(); // Ensure all videos start paused

        ScrollTrigger.create({
          trigger: card,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            video.currentTime = 0;
            video.play();
          },
          onLeave: () => {
            video.pause();
          },
          onEnterBack: () => {
            video.currentTime = 0;
            video.play();
          },
          onLeaveBack: () => {
            video.pause();
          },
        });
      }
    });

    const cards = gsap.utils.toArray<HTMLElement>(
      this.el.nativeElement.querySelectorAll('.info-card')
    );

  //   const dummy = this.el.nativeElement.querySelector('.scroll-trigger-dummy');
  // if (dummy) {
  //   cards.push(dummy);
  // }

    cards.forEach((card, index) => {
      if (index === 0) return;

      const prevCard = cards[index - 1];

      ScrollTrigger.create({
        trigger: card,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: () => {
          gsap.to(prevCard, {
            scale: 0.85,
            duration: 0.4,
            ease: 'power2.out',
          });
        },
        onLeaveBack: () => {
          gsap.to(prevCard, {
            scale: 1,
            duration: 0.4,
            ease: 'power2.out',
          });
        },
      });
      if (index === cards.length - 1) {
        ScrollTrigger.create({
          trigger: card,
          start: 'top 50%', // Trigger when the card's top reaches the center
           // Trigger when it goes out of view
          onEnter: () => {
            gsap.to(card, {
              scale: 0.85,
              duration: 0.4,
              ease: 'power2.out',
              // delay: 1,
              
            });
          },
          onLeaveBack: () => {
            gsap.to(card, {
              scale: 1,
              duration: 0.4,
              ease: 'power2.out',
            });
          },
        });
      }

    });
  }
  }
}

// import {
//   Component,
//   ElementRef,
//   AfterViewInit,
//   Inject,
//   PLATFORM_ID,
// } from '@angular/core';
// import { CommonModule, isPlatformBrowser } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';

// gsap.registerPlugin(ScrollTrigger);

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css'],
// })
// export class HomeComponent implements AfterViewInit {
//   constructor(
//     private el: ElementRef,
//     @Inject(PLATFORM_ID) private platformId: Object
//   ) {}

//   ngAfterViewInit(): void {
//     if (!isPlatformBrowser(this.platformId)) return;

//     const selectors = ['.purple-card1', '.purple-card2', '.purple-card3', '.purple-card4'];
//     const videoElements: HTMLVideoElement[] = [];

//     // Collect video elements and pause them initially
//     selectors.forEach((selector) => {
//       const card = this.el.nativeElement.querySelector(selector) as HTMLElement;
//       const video = card?.querySelector('video') as HTMLVideoElement;

//       if (video) {
//         video.pause();
//         video.preload = 'metadata';
//         video.playbackRate = 0.75;
//         videoElements.push(video);
//       }
//     });

//     // Wait for all videos to load before initializing ScrollTriggers
//     Promise.all(
//       videoElements.map(
//         (v) =>
//           new Promise((resolve) => {
//             v.onloadeddata = () => resolve(true);
//           })
//       )
//     ).then(() => {
//       this.initScrollAnimations(videoElements);
//     });
//   }

//   private initScrollAnimations(videoElements: HTMLVideoElement[]) {
//     // Video play/pause scroll triggers
//     videoElements.forEach((video) => {
//       const card = video.closest('.purple-card1, .purple-card2, .purple-card3, .purple-card4') as HTMLElement;

//       ScrollTrigger.create({
//         trigger: card,
//         start: 'top 80%',
//         end: 'bottom 20%',
//         onEnter: () => video.play(),
//         onLeave: () => video.pause(),
//         onEnterBack: () => video.play(),
//         onLeaveBack: () => video.pause(),
//       });
//     });

//     // Info card scaling animations
//     const cards = gsap.utils.toArray<HTMLElement>(
//       this.el.nativeElement.querySelectorAll('.info-card')
//     );

//     cards.forEach((card, index) => {
//       if (index === 0) return;
//       const prevCard = cards[index - 1];

//       ScrollTrigger.create({
//         trigger: card,
//         start: 'top bottom',
//         end: 'bottom top',
//         onEnter: () => {
//           gsap.to(prevCard, {
//             scale: 0.85,
//             duration: 0.4,
//             ease: 'power2.out',
//           });
//         },
//         onLeaveBack: () => {
//           gsap.to(prevCard, {
//             scale: 1,
//             duration: 0.4,
//             ease: 'power2.out',
//           });
//         },
//       });

//       if (index === cards.length - 1) {
//         ScrollTrigger.create({
//           trigger: card,
//           start: 'top 50%',
//           onEnter: () => {
//             gsap.to(card, {
//               scale: 0.85,
//               duration: 0.4,
//               ease: 'power2.out',
//             });
//           },
//           onLeaveBack: () => {
//             gsap.to(card, {
//               scale: 1,
//               duration: 0.4,
//               ease: 'power2.out',
//             });
//           },
//         });
//       }
//     });
//   }
// }
