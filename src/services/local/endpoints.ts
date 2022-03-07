// users
export const getPricingEp = (page?: any, limit?: any) =>
  `/getpricing?page=${1}&limit=${page * limit}`;
