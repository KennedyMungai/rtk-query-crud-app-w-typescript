import React, { useEffect, useState } from 'react'
import './Info.css'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


const Info = () =>
{
    const { id } = useParams()

    return (
        <div>Info</div>
    )
}

export default Info