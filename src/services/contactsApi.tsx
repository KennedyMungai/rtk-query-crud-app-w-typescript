import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Contact } from '../model/contact.model'


export const contactsApi = createApi({
    reducerPath: "contactsApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ["Contact"],
    endpoints: (builder) => ({
        contacts: builder.query<Contact[], void>({
            query: () => "/contacts",
        }),
        addContacts: builder.mutation<{}, Contact>({
            query: (contact) => ({
                url: '/contacts',
                method: 'POST',
                body: contact
            })
        }),
        deleteContact: builder.mutation<void, string>({
            query: (id) => (
                {
                    url: `/contacts/${id}`,
                    method: 'DELETE'
                })
        })
    })
})


export const {
    useContactsQuery,
    useAddContactsMutation,
    useDeleteContactMutation
} = contactsApi