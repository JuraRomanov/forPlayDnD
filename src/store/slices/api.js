import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const dndAPI = createApi( { 
    reducerPath : 'dndAPI' , 
    baseQuery : fetchBaseQuery({baseUrl : 'https://www.dnd5eapi.co/'}) , 
        endpoints : (builder) => ({ 
            getAllUrl : builder.query({
                query : () => 'api',
            }),
            getDataForURL: builder.query ( { 
                query : (url = "api") => `${url}` , 
            })
        })
})



export const {useGetAllUrlQuery, useGetDataForURLQuery} = dndAPI ; 