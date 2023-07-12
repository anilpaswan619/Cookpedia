import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent {

  private scrollToTopBtn: HTMLElement | null = null;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.scrollToTopBtn = this.elementRef.nativeElement.querySelector('#scrollToTopBtn');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScrollTopVisibility();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  checkScrollTopVisibility() {
    if (this.scrollToTopBtn) {
      this.scrollToTopBtn.style.display = window.scrollY < 20 ? 'block' : 'none';
    }
  }
}
