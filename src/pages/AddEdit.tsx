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

        </div>
    )
}

export default AddEdit