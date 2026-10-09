export interface QuoteItem {
  id: number;

  productType:
    | 'Frame'
    | 'Lens'
    | 'ContactLens'
    | 'Accessory';

  description: string;

  quantity: number;

  unitPrice: number;

  totalPrice: number;
}