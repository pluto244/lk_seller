import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Advertisment, Order } from '@/06_shared/types';

// Создаем API с помощью RTK Query
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: ['Advertisement', 'Order'],
  endpoints: (builder) => ({
    getAdvertisements: builder.query<Advertisment[], { start?: number; limit?: number }>({
      query: ({ start = 0, limit = 10 }) => `/advertisements?_start=${start}&_limit=${limit}`,
      providesTags: ['Advertisement'],
    }),
    getAdvertisementById: builder.query<Advertisment, string>({
      query: (id) => `/advertisements/${id}`,
      providesTags: (result, error, id) => [{ type: 'Advertisement', id }],
    }),
    createAdvertisement: builder.mutation<Advertisment, Partial<Advertisment>>({
      query: (newAd) => ({
        url: '/advertisements',
        method: 'POST',
        body: newAd,
      }),
      invalidatesTags: ['Advertisement'],
    }),
    updateAdvertisement: builder.mutation<Advertisment, { id: string; changes: Partial<Advertisment> }>({
      query: ({ id, changes }) => ({
        url: `/advertisements/${id}`,
        method: 'PATCH',
        body: changes,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Advertisement', id }],
    }),
    deleteAdvertisement: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: `/advertisements/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Advertisement', id }],
    }),

    getOrders: builder.query<Order[], { start?: number; limit?: number }>({
      query: ({ start = 0, limit = 10 }) => `/orders?_start=${start}&_limit=${limit}`,
      providesTags: ['Order'],
    }),
    getOrderById: builder.query<Order, string>({
      query: (id) => `/orders/${id}`,
      providesTags: (result, error, id) => [{ type: 'Order', id }],
    }),
    updateOrder: builder.mutation<Order, { id: string; changes: Partial<Order> }>({
      query: ({ id, changes }) => ({
        url: `/orders/${id}`,
        method: 'PATCH',
        body: changes,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Order', id }],
    }),
    deleteOrder: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: `/orders/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Order', id }],
    }),
  }),
});

export const {
  useGetAdvertisementsQuery,
  useGetAdvertisementByIdQuery,
  useCreateAdvertisementMutation,
  useUpdateAdvertisementMutation,
  useDeleteAdvertisementMutation,
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = api;
