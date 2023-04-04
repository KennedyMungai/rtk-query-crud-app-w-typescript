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
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>ID</th>
                        <th style={{ textAlign: 'center' }}>Name</th>
                        <th style={{ textAlign: 'center' }}>Email</th>
                        <th style={{ textAlign: 'center' }}>Contact</th>
                        <th style={{ textAlign: 'center' }}>Action</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Home