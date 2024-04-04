export type QueryPagePropsType = {
  paging: {
    page_size: number;
    page_index: number;
  };
  load_more: {
    skip: number;
    take: number;
  };
};
