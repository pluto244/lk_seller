// Тип объявления
export type Advertisment = {
    /* Уникальный идентификатор. */
    id: string;
    /* Название. */
    name: string;
    /* Описание. */
    description?: string;
    /* Цена. */
    price: number;
    /* Дата и время создания. */
    createdAt: string;
    /* Количество просмотров. */
    views: number;
    /* Количество лайков. */
    likes: number;
    /* Ссылка на изображение. */
    imageUrl?: string;
  };
  
  // Константы статусов заказа
  export const OrderStatus = {
    Created: 0,
    Paid: 1,
    Transport: 2,
    DeliveredToThePoint: 3,
    Received: 4,
    Archived: 5,
    Refund: 6,
  } as const;
  
  // Тип элемента заказа (товара)
  export type OrderItem = Advertisment & { count: number };
  
  // Тип заказа
  export type Order = {
    /* Уникальный идентификатор. */
    id: string;
    /* Статус. */
    status: typeof OrderStatus[keyof typeof OrderStatus];
    /* Дата и время создания. */
    createdAt: string;
    /* Дата и время завершения. */
    finishedAt?: string;
    /* Товары в заказе. */
    items: Array<OrderItem>;
    /* Способ доставки (Почта, СДЭК...) */
    deliveryWay: string;
    /* Сумма заказа */
    total: number;
  };
  
  // Тип изображения
  export type Image = {
    /* Уникальный идентификатор. */
    id: number;
    /* Ссылка. */
    url: string;
    /* Название. */
    name: string;
  };
  