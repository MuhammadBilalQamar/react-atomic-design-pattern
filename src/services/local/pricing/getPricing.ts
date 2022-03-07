import axios from '../api';

// endpoint
import { getPricingEp } from '../endpoints';

const getPricing = async (page?: any, limit?: any) =>
  await axios.get(getPricingEp(page, limit));

export default getPricing;
