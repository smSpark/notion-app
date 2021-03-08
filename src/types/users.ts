export interface UserApiResponse {
    results: IUserInfo[];
    info: ApiResponseInfo;
  }
  
  export interface ApiResponseInfo {
    seed: string;
    results: number;
    page: number;
    version: string;
  }
  
  export interface IUserInfo {
    gender: UserGenderType | string;
    name: UserName;
    location: UserLoc;
    email: string;
    login: UserLoginData;
    dob: UserBirthday;
    registered: UserRegDate;
    phone: string;
    national: string;
    cell: string;
    id: UserID;
    picture: UserPicture;
    nat: string;
  }
  
  export type UserGenderType = "male" | "female";
  
  export interface UserName {
    title: string;
    first: string;
    last: string;
  }
  
  export interface UserLoc {
    street: UserLocStreet;
    city: string;
    state: string;
    country: string;
    postcode: number | string;
    coordinates: UserLocCoord;
    timezone: UserLocTimezone;
  }
  
  export interface UserLocStreet {
    number: number;
    name: string;
  }
  
  export interface UserLocCoord {
    latitude: string;
    longitude: string;
  }
  
  export interface UserLocTimezone {
    offset: string;
    description: string;
  }
  
  export interface UserLoginData {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  }
  
  export interface UserBirthday {
    date: string;
    age: number;
  }
  
  export interface UserRegDate {
    date: string;
    age: number;
  }
  
  export interface UserID {
    name: string;
    value: string | null;
  }
  
  export interface UserPicture {
    large: string;
    medium: string;
    thumbnail: string;
  }
  