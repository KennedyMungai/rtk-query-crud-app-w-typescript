import { useEffect } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useContactsQuery } from '../services/contactsApi'


const Home = () =>
{
    const {
        data,
        isLoading,
        error
    } = useContactsQuery()

    return (
        <div>Home</div>
    )
}

export default Home