export interface Breeds {
  [key: string]: string[];
}

export interface BreedsResponse {
  status: string;
  message: Breeds[];
}
