import { ImageSlider } from 'src/app/share/components/image-slider/image-slider.component';
import { Product } from 'src/app/share/domain';

export interface ProductVariant {
  id: number;
  name: string;
  product: Product;
  price: number;
  listPrice: number;
  productVariantImages: ImageSlider[];
}

export interface GroupOrder {
  id: number;
  productId: number;
  startBy: string;
  avatar: string;
  startAt: Date;
  remainingNumber: number;
}
