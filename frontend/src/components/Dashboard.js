// frontend/src/components/Dashboard.js

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

const useStyles = makeStyles({
    container: {
        maxWidth: 800,
        margin: '0 auto',
        padding: 20,
    },
    heading: {
        color: '#333',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    listItem: {
        marginBottom: 10,
        padding: 8,
        border: '1px solid #ddd',
        borderRadius: 4,
        backgroundColor: '#f9f9f9',
    },
});

const Dashboard = () => {
    const classes = useStyles();
    const [contributions, setContributions] = useState([]);

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const response = await axios.get('/api/contributions/username');
                setContributions(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchContributions();
    }, []);

    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>Contributions Dashboard</h1>
            <ul className={classes.list}>
                {contributions.map((contribution, index) => (
                    <li key={index} className={classes.listItem}>
                        {contribution}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
