// pricing Slice
import pricingSlice from './pricing/pricingSlice';

interface sliceT {
  pricing: any;
}

const rootSlice: sliceT = {
  pricing: pricingSlice
};

export default rootSlice;
