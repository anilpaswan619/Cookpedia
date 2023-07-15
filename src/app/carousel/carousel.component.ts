import { Component, ViewChild, ElementRef } from '@angular/core';
import * as bootstrap from 'bootstrap';






@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent {

  @ViewChild('carousel') carousel!: ElementRef;

  

  carouselItems = [
    {
      
      label: '01/03',
      description: 'Some representative placeholder content for the first slide.',
      cards: [
        {imgProfile:'/assets/images/profile6.jpg', title: 'Fresh Crunchy Veggy With Toast', description: 'Mellissa Bay', 
        lastUpdated: `I tried this Recipe, and It’s the Only Side Dish I Want to Have for. We've enjoyed
         a few healthy breakfast while visiting
          . We enjoyed it a lot and everyone loves it so much!` , imageSrc: '/assets/images/comm-img1.jpg' },
        {imgProfile:'/assets/images/profile3.jpg', title: 'Fried Rice With Boiled Eggs', description: 'Anne Smith',
         lastUpdated: `This easy recipes is for eggs, rice and, my personal
         favorite, the breakfast filled with black beans and herbs
          and spices  very quick and easy way to make it at home. `,
          imageSrc: '/assets/images/comm-img2.jpg' }
      ]
    },
    {
    
      label: '02/03',
      description: 'Some representative placeholder content for the second slide.',
      cards: [
        {imgProfile:'/assets/images/profile2.jpg', title: 'Tomato Curry Pasta With Curd', description: 'Lee Nees',
         lastUpdated: `Curry and pasta are a smashing combination, and it's a mix that should definitely be more in my opinion.
          This is a vegan curry pasta recipe, but you can easily customize it and add.`,
          imageSrc: '/assets/images/comm-img3.jpg' },
        {imgProfile:'/assets/images/profile4.jpg', title: 'Green Soup With Momos', description: 'Nimisha Joe', 
        lastUpdated: `Steamed momos are meat filled dumplings from the east. You can fill them with any of your choice. These are usually served with fiery tomato.`,
         imageSrc: '/assets/images/comm-img4.jpg'}
      ]
    },
    {
     
      label: '03/03',
      description: 'Some representative placeholder content for the third slide.',
      cards: [
        {imgProfile:'/assets/images/profile1.jpg', title: 'Red Carrot Veggy Patty', description: 'Yoshika Henn', 
        lastUpdated: `This recipe is nice and thick, firms up similarly to how an egg cooks, and it's almost impossible for anything to fall apart when using it.
         It does need to be blended with water first.`,
         imageSrc: '/assets/images/comm-img5.jpg' },
        {imgProfile:'/assets/images/profile5.jpg', title: 'Pancake With Mint Leaves', description: 'Lee Jo', 
        lastUpdated: `This recipe includes dough or batter for cookies, cakes,  tortillas, pizza,
         biscuits, pancakes, or crafts made with raw flour, such as homemade play dough or holiday ornaments.`,
         imageSrc: '/assets/images/comm-img6.jpg' }
      ]
    }
   
  ];
  

  indicators = Array(this.carouselItems.length).fill(0);

  constructor() {}

  ngAfterViewInit() {
    if (this.carousel && this.carousel.nativeElement) {
      this.carousel.nativeElement.addEventListener('slide.bs.carousel', (event: any) => {
        // Disable auto sliding when user interacts with the carousel
        this.carousel.nativeElement.carousel('pause');
      });
    }
  }
  

  nextSlide() {
    if (this.carousel && this.carousel.nativeElement) {
      const carouselInstance = new bootstrap.Carousel(this.carousel.nativeElement);
      carouselInstance.next();
    }
  }
  
  prevSlide() {
    if (this.carousel && this.carousel.nativeElement) {
      const carouselInstance = new bootstrap.Carousel(this.carousel.nativeElement);
      carouselInstance.prev();
    }
  }
  
  

}
