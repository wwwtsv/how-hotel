import { Query } from '@domain/fetch';
import request from '../request/index';

export enum EndPoints {
  search = `/locations/search`,
  photos = `/properties/get-hotel-photos`,
  details = `/properties/get-details`,
  metaData = `/get-meta-data`,
  list = `/properties/list`,
}

export const searchPoints = (query: Query) => request(EndPoints.search, query);
export const getPointPhoto = (query: Query) => request(EndPoints.photos, query);
export const getDetails = (query: Query) => request(EndPoints.details, query);
export const getMetaData = (query: Query) => request(EndPoints.metaData, query);
export const getList = (query: Query) => request(EndPoints.list, query);
