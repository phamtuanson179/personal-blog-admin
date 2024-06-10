export interface BaseResponse<T> {
  statusCode: number;
  data: T;
  pageIndex?: number;
  pageSize?: number;
  timestamp: number;
}
