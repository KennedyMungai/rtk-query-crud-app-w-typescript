import React, { useEffect, useState } from 'react'
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

    return (
        <div style={{ marginTop: '100px' }}>
            <form
                style={{
                    margin: 'auto',
                    padding: '15px',
                    maxWidth: '400px',
                    alignContent: 'center'
                }}
            >
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id='name'
                    name='name'
                    placeholder='Enter Name....'
                />
            </form>
        </div>
    )
}

export default AddEdit