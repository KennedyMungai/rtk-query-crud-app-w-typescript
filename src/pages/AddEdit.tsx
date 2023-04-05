import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import './AddEdit.css'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import
{
    useAddContactsMutation,
    useContactQuery,
    useUpdateContactMutation
} from '../services/contactsApi'


const initialState = {
    name: "",
    email: "",
    contact: ""
}

const AddEdit = () =>
{
    const [formValue, setFormValue] = useState(initialState)
    const [editMode, setEditMode] = useState(false)

    const { name, email, contact } = formValue

    const { id } = useParams()

    const [addContact] = useAddContactsMutation()
    const [updateContact] = useUpdateContactMutation()
    const { data, error } = useContactQuery(id!)

    const navigate = useNavigate()

    useEffect(() =>
    {
        if (error && id)
        {
            toast.error("Something went wrong")
        }
    }, [error])


    useEffect(() =>
    {
        if (id)
        {
            setEditMode(true)

            if (data)
            {
                setFormValue({ ...data })
            }
            else
            {
                setEditMode(false)
                setFormValue({ ...initialState })
            }
        }
    }, [id, data])


    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    {
        let { name, value } = e.target
        setFormValue({ ...formValue, [name]: value })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault()

        if (!name && !email && !contact)
        {
            toast.error("Please provide a value into each input field")
        }
        else
        {
            if (!editMode)
            {
                await addContact(formValue)
                navigate('/')
                toast.success("Contact Added Successfully")
            }
            else
            {
                await updateContact(formValue)
                setEditMode(false)
                navigate('/')
                toast.success("Contact Updated Successfully")
            }
        }
    }

    return (
        <div style={{ marginTop: '100px' }}>
            <form
                style={{
                    margin: 'auto',
                    padding: '15px',
                    maxWidth: '400px',
                    alignContent: 'center'
                }}
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id='name'
                    name='name'
                    placeholder='Enter Name....'
                    value={name}
                    onChange={handleInputChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id='email'
                    name='email'
                    placeholder='Enter Email....'
                    value={email}
                    onChange={handleInputChange}
                />
                <label htmlFor="contact">Contact</label>
                <input
                    type="number"
                    id='contact'
                    name='contact'
                    placeholder='Enter Contact....'
                    value={contact}
                    onChange={handleInputChange}
                />
                <input
                    type="submit"
                    value={editMode ? "Update" : "Add"}
                />
            </form>
        </div>
    )
}

export default AddEdit