import { Component, input, output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent implements OnInit {
  // Ата-анасынан келетін тауар дерегі (Signal)
  product = input.required<Product>();
  isLiked = false;
  totalSum = 0;
  // Өшіру туралы белгіні жоғары жіберу (Output)
  remove = output<number>();

  // Басты суретті сақтайтын айнымалы
  currentImage: string = '';

  ngOnInit() {
    this.currentImage = this.product().image;
  }

  // Галереядан суретті басқанда басты суретті ауыстыру
  changeImage(img: string) {
    this.currentImage = img;
  }

  like() {
    if (this.isLiked){
      this.product().likes++;
      this.isLiked = false;
    }else{
      this.product().likes--;
      this.isLiked = true;
    }

  }

  delete() {
    if (confirm('Бұл тауарды тізімнен алып тастауға сенімдісіз бе?')) {
      this.remove.emit(this.product().id);
    }
  }

}
