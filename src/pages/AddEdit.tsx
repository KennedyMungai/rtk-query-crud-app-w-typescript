import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import './AddEdit.css'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


const initialState = {
    name: "",
    email: "",
    contact: ""
}

const AddEdit = () =>
{
    const [formValue, setFormValue] = useState(initialState)
    const { name, email, contact } = formValue

    const navigate = useNavigate()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    {
        let { name, value } = e.target
        setFormValue({ ...formValue, [name]: value })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault()
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
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default AddEdit