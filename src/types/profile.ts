export type UserLocation = {
  longitude: number;
  latitude: number;
  _id: string;
};

export type AdminProfile = {
  profileUrl: string;
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
  address: string;
  postCode: string;
  state: string;
  country: string;
  geolocation: UserLocation;
};
