/* eslint-disable @typescript-eslint/no-explicit-any */
export interface RootState {
    // other properties
    api: {
      models: {
        layoutRoutes: any; // Replace 'any' with the actual type if known
        products: any; // Replace 'any' with the actual type if known
        brands: any; // Replace 'any' with the actual type if known
        categories: any; // Replace 'any' with the actual type if known
      };
      status: {
        layoutRoutes: {
          loading?: boolean;
          success?: boolean;
        };
      };
    };
  }
  