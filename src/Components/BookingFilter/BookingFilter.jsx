import React, { useState } from 'react';
import {
    Box, Grid, MenuItem, Select, FormControl,
    Button, Typography, IconButton, Popover
} from '@mui/material';
import { LocationOn, Event, Person, Search, Add, Remove } from '@mui/icons-material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function BookingFilter() {
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState(new Date());
    const [guests, setGuests] = useState({ adult: 0, youth: 0, children: 0 });
    const [totalGuests, setTotalGuests] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleGuestsClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleGuestsClose = () => {
        setAnchorEl(null);
        setTotalGuests(guests.adult + guests.youth + guests.children);
    };

    const open = Boolean(anchorEl);

    const updateGuests = (type, increment) => {
        setGuests((prev) => {
            const newValue = increment ? prev[type] + 1 : Math.max(0, prev[type] - 1);
            return { ...prev, [type]: newValue };
        });
    };

    return (
        <Box
            sx={{
                backgroundColor: 'white',
                borderRadius: 2,
                boxShadow: 3,
                p: 2,
                mx: 'auto',
                maxWidth: '90%',
                display: 'flex',
                alignItems: 'center',
                marginTop: '20px'
            }}
        >
            <Grid container spacing={2} alignItems="center">
                {/* Location */}
                <Grid item xs={12} sm={6} md={2.4}>
                    <Box display="flex" alignItems="center">
                        <LocationOn sx={{ color: 'green', mr: 1 }} />
                        <Box>
                            <Typography variant="caption" color="textSecondary">
                                Location
                            </Typography>
                            <FormControl fullWidth size="small">
                                <Select
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    displayEmpty
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    <MenuItem value="">Locations</MenuItem>
                                    <MenuItem value="kashmir">Kashmir</MenuItem>
                                    <MenuItem value="swat">Swat</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </Grid>

                {/* Type */}
                <Grid item xs={12} sm={6} md={2.4}>
                    <Box display="flex" alignItems="center">
                        <img src="/icons/booking-type.svg" alt="Type" width={24} style={{ marginRight: 8 }} />
                        <Box>
                            <Typography variant="caption" color="textSecondary">
                                Type
                            </Typography>
                            <FormControl fullWidth size="small">
                                <Select
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    displayEmpty
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    <MenuItem value="">Booking Type</MenuItem>
                                    <MenuItem value="tour">Tour</MenuItem>
                                    <MenuItem value="hotel">Hotel</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </Grid>

                {/* Date */}
                <Grid item xs={12} sm={6} md={2.4}>
                    <Box display="flex" alignItems="center">
                        <Event sx={{ color: 'green', mr: 1 }} />
                        <Box>
                            <Typography variant="caption" color="textSecondary">
                                Date From
                            </Typography>
                            <DatePicker
                                selected={date}
                                onChange={(date) => setDate(date)}
                                dateFormat="dd/MM/yyyy"
                                className="date-picker"
                            />
                        </Box>
                    </Box>
                </Grid>

                {/* Guests */}
                <Grid item xs={12} sm={6} md={2.4}>
                    <Box display="flex" alignItems="center" onClick={handleGuestsClick} sx={{ cursor: 'pointer' }}>
                        <Person sx={{ color: 'green', mr: 1 }} />
                        <Box>
                            <Typography variant="caption" color="textSecondary">
                                Guests
                            </Typography>
                            <Typography fontWeight="bold">{totalGuests}</Typography>
                        </Box>
                    </Box>
                    <Popover
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleGuestsClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {/* Adult */}
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Typography>Adult</Typography>
                                <Box display="flex" alignItems="center">
                                    <IconButton onClick={() => updateGuests('adult', false)}>
                                        <Remove />
                                    </IconButton>
                                    <Typography sx={{ mx: 1 }}>{guests.adult}</Typography>
                                    <IconButton onClick={() => updateGuests('adult', true)}>
                                        <Add />
                                    </IconButton>
                                </Box>
                            </Box>

                            {/* Youth */}
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Typography>Youth</Typography>
                                <Box display="flex" alignItems="center">
                                    <IconButton onClick={() => updateGuests('youth', false)}>
                                        <Remove />
                                    </IconButton>
                                    <Typography sx={{ mx: 1 }}>{guests.youth}</Typography>
                                    <IconButton onClick={() => updateGuests('youth', true)}>
                                        <Add />
                                    </IconButton>
                                </Box>
                            </Box>

                            {/* Children */}
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Typography>Children</Typography>
                                <Box display="flex" alignItems="center">
                                    <IconButton onClick={() => updateGuests('children', false)}>
                                        <Add />
                                    </IconButton>
                                    <Typography sx={{ mx: 1 }}>{guests.children}</Typography>
                                    <IconButton onClick={() => updateGuests('children', true)}>
                                        <Add />
                                    </IconButton>
                                </Box>
                            </Box>

                            {/* Apply Button */}
                            <Button
                                variant="contained"
                                onClick={handleGuestsClose}
                                sx={{
                                    backgroundColor: 'green',
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                    '&:hover': { backgroundColor: 'darkgreen' },
                                }}
                            >
                                Apply
                            </Button>
                        </Box>
                    </Popover>
                </Grid>

                {/* Search */}
                <Grid item xs={12} sm={6} md={2.4}>
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: 'green',
                            height: '100%',
                            borderRadius: 2,
                            fontWeight: 'bold',
                            textTransform: 'none',
                            '&:hover': { backgroundColor: 'darkgreen' },
                        }}
                        startIcon={<Search />}
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}