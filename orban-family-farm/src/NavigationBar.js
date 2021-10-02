import React from 'react';
import { Tab, Tabs } from '@mui/material';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <div>
            <Tabs sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#8998AB' }}>
                <Link to="/home">
                    <Tab label="Home" />
                </Link>
                <Link to="/farm-history">
                    <Tab label="Farm History" />
                </Link>
                <Link to="/family-members">
                    <Tab label="Family Members" />
                </Link>
                <Link to="/contact-info">
                    <Tab label="Contact Info" />
                </Link>
                <Link to="/blog">
                    <Tab label="Blog" />
                </Link>
            </Tabs>
        </div>
    );
}

export default NavigationBar;