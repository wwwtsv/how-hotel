import { OverviewTypes, PlaceDetailsStatus, PlaceFeature, PlaceLocation } from '@domain/places';

export interface OverviewSection {
  title: string;
  type: OverviewTypes;
  content: Array<PlaceFeature>;
  contentType: 'LIST';
}

export interface PlaceDetailsMeta {
  hotelId: string;
  destinationId: string;
  pointOfSaleId: string;
  currencyCode: string;
  occupancyKey: string;
  hotelLocation: PlaceLocation;
}

export interface PlaceDetails {
  pdpHeader: PlaceDetailsMeta;
  overview: Array<OverviewSection>;
  hotelWelcomeRewards: {
    applies: true;
    info: string;
  };
  propertyDescription: {};
  guestReviews: {};
  atAGlance: {};
  amenities: {};
  smallPrint: {};
  roomsAndRates: {};
  specialFeatures: {};
  miscellaneous: {};
  pageInfo: {};
  trustYouReviewsCredit: {};
  hotelBadge: {};
}
export interface PlaceDetailsInfo {
  status: PlaceDetailsStatus;
  data: {
    body: PlaceDetails;
  };
}
