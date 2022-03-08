import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const product = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://front-test-api.herokuapp.com/api/',
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `product`,
    }),
    getById: builder.query({
      query: (id) => `product/${id}`,
    }),
    updateCartApi: builder.mutation({
      query: (body) => ({
        url: 'cart',
        method: 'POST',
        body,
      }),
    }),
  }),
  refetchOnMountOrArgChange: 3600, // refresh data every 1 hour
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllProductsQuery,
  useGetByIdQuery,
  useUpdateCartApiMutation,
} = product;
