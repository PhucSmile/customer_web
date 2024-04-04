export type APIResponseType<T> = {
  id?: string;
  data?: T;
  message?: string;
  paging?: {
    page_index?: number;
    page_size?: number;
    total_item_count?: number;
    total_page_count?: number;
  };
  load_more?: {
    skip?: number;
    take?: number;
  };
  status?: number | string | undefined;
};
