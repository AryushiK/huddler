import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-invest',
  standalone: true,
  templateUrl: './invest.component.html',
  styleUrl: './invest.component.css'
})
export class InvestComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
  
      // Delay to ensure layout is done
      setTimeout(() => {
        const container = document.querySelector('.scroll-wrapper');
        const section = document.querySelector('.scroll-section');
  
        if (container && section) {
          const scrollLength = container.scrollWidth - window.innerWidth;
  
          gsap.to(container, {
            x: () => `-${scrollLength}px`,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: () => `+=${scrollLength}`,
              scrub: true,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true, // 💡 ensures dynamic refresh

            }
          });
  
          ScrollTrigger.refresh(); // force recalculation
        }
      }, 100); // small delay (can try 0, 100, 300 if needed)
    }
  }
}