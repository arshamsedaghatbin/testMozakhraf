import { ILocation } from 'app/entities/location/location.model';
import { IRegion } from 'app/entities/region/region.model';

export interface ICountry {
  id?: number;
  countryName?: string | null;
  countries?: ILocation[] | null;
  region?: IRegion | null;
}

export class Country implements ICountry {
  constructor(
    public id?: number,
    public countryName?: string | null,
    public countries?: ILocation[] | null,
    public region?: IRegion | null
  ) {}
}

export function getCountryIdentifier(country: ICountry): number | undefined {
  return country.id;
}
