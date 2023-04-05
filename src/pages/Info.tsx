import React, { useEffect, useState } from 'react'
import './Info.css'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useContactQuery } from '../services/contactsApi'


const Info = () =>
{
    const { id } = useParams()
    const { data, error } = useContactQuery(id!)

    return (
        <div>Info</div>
    )
}

export default Info