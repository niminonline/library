export interface Book {
  _id: string;
  name: string;
  description: string;
  publishDate: Date;
  price: number;
}
export interface APIResponse {
  status: string;
  message: string;
}

export interface BookListResponse {
  status: string;
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
  data: Book[];
}
