import React, { FormEventHandler, useEffect, useState } from 'react'
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

    const handleInputChange = () =>
    {

    }

    const handleSubmit = () =>
    {

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
            </form>
        </div>
    )
}

export default AddEdit