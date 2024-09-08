import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => (
    <Typography
        variant="h6"
        noWrap
        component={Link}
        to="/"
        sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 600,
            color: 'inherit',
            textDecoration: 'none',
        }}
    >
        Лк Продавца
    </Typography>
);

export default Logo;
