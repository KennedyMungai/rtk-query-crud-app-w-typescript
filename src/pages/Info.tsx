import React, { useEffect, useState } from 'react'
import './Info.css'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useContactQuery } from '../services/contactsApi'


const Info = () =>
{
    const { id } = useParams()
    const { data, error } = useContactQuery(id!)

    useEffect(() =>
    {
        if (error)
        {
            toast.error("Something went wrong")
        }
    }, [error])


    return (
        <div
            style={{ marginTop: '150px' }}
        >
            <div className="card">
                <div className="card-header">
                    <p>User Contact Details</p>
                </div>
            </div>
        </div>
    )
}

export default Info