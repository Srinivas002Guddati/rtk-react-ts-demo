import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com"}),
    endpoints: (builder) => ({
        getProfile: builder.query<any, number>({
            query: (id) => `/users/${id}`
        })
    })
});

export const { useGetProfileQuery } = profileApi;