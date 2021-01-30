import request from '../request/index';

export enum EndPoints {
  search = `/locations/search`,
  photos = `/properties/get-hotel-photos`,
  details = `/properties/get-details`,
  metaData = `/get-meta-data`,
  list = `/properties/list`,
}

export const searchPoints = (query: string) => request(EndPoints.search, query);
export const getPointPhoto = (query: string) => request(EndPoints.photos, query);
export const getDetails = (query: string) => request(EndPoints.details, query);
export const getMetaData = (query: string) => request(EndPoints.metaData, query);
export const getList = (query: string) => request(EndPoints.list, query);
