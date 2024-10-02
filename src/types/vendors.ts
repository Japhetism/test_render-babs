export type VendorLocation = { longitude?: number; latitude?: number };

export type Vendor = {
  _id: string;
  name: string;
  description: string;
  address: string;
  noOfStaff: string;
  email: string;
  geolocation: VendorLocation;
  logo: string;
};
