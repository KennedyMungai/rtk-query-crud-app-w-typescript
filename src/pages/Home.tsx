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
        <div style={{ marginTop: '100px' }}>
            <Link to='/addContact'>
                <button className="btn btn-add">
                    Add Contact
                </button>
            </Link>
            <br />
            <br />
            <table className="styled-table">

            </table>
        </div>
    )
}

export default Home