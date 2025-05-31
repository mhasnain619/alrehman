import React from 'react';
import {
    Box, Grid, MenuItem, Select, FormControl,
    Button, Typography,
    TextField,
    Paper,
    Stack
} from '@mui/material';
import {
    Explore as ExploreIcon,
    CardTravel as CardTravelIcon,
    AttachMoney as AttachMoneyIcon,
    Warning as WarningIcon
} from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import worldImage from '../../assets/worldMap.jpg'
import waterfallImage from '../../assets/waterfall.jpg'
import whyChose from '../../assets/neum.jpg'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const activities = [
    {
        title: 'Enjoy The Waterfalls',
        emoji: '🌊',
        description: 'Experience breathtaking waterfalls in Neelum Valley Azad Kashmir',
        image: waterfallImage
    },
    {
        title: 'Wildlife',
        emoji: '🦌',
        description: 'Discover diverse wildlife in the lush forests of Kashmir',
        image: waterfallImage
    },
    {
        title: 'Hiking',
        emoji: '🥾',
        description: 'Trek through scenic mountain trails with expert guides',
        image: waterfallImage
    },
    {
        title: 'Chair Lift Rides',
        emoji: '🚡',
        description: 'Soar above stunning landscapes on our safe chair lifts',
        image: waterfallImage
    },
    {
        title: 'Lake Views',
        emoji: '🏞️',
        description: 'Marvel at crystal-clear alpine lakes and their reflections',
        image: waterfallImage
    }
];
export default function ResponsiveBookingFilter() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 8000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <>
            <Box
                sx={{
                    backgroundColor: 'white',
                    borderRadius: 2,
                    boxShadow: 3,
                    p: 2,
                    mx: 'auto',
                    maxWidth: '1000px',
                    marginTop: '20px',
                    display: 'flex',
                    gap: '10px',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row'
                    },
                }}
            >
                <Box sx={{ width: { xs: '100%', md: '250px' } }}>
                    <Typography variant="caption" color="textSecondary">
                        Location
                    </Typography>
                    <FormControl fullWidth size="small" variant="outlined">
                        <Select
                            defaultValue=""
                            displayEmpty
                            sx={{ backgroundColor: 'white' }}
                        >
                            <MenuItem value="">Locations</MenuItem>
                            <MenuItem value="location1">Location 1</MenuItem>
                            <MenuItem value="location2">Location 2</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ width: { xs: '100%', md: '250px' } }}>
                    <Typography variant="caption" color="textSecondary">
                        Booking Type
                    </Typography>
                    <FormControl fullWidth size="small" variant="outlined">
                        <Select
                            defaultValue=""
                            displayEmpty
                            sx={{ backgroundColor: 'white' }}
                        >
                            <MenuItem value="">Locations</MenuItem>
                            <MenuItem value="location1">Adventure</MenuItem>
                            <MenuItem value="location2">Beach</MenuItem>
                            <MenuItem value="location2">Discovery</MenuItem>
                            <MenuItem value="location2">Mountain Biking</MenuItem>
                            <MenuItem value="location2">Tent Camping</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ width: { xs: '100%', md: '250px' } }}>
                    <Typography variant="caption" color="textSecondary">
                        Date From
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            defaultValue={dayjs()}
                            slotProps={{ textField: { size: 'small', fullWidth: true } }}
                        />
                    </LocalizationProvider>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: '5px', justifyContent: "center", width: { xs: '100%', md: '250px' } }}>
                    <Typography variant="caption" color="textSecondary">
                        Guests
                    </Typography>
                    <TextField placeholder='How many guests you are ..?' type='number' size='small' />
                </Box>
                <Box sx={{ width: { xs: '100%', md: '250px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button
                        variant="contained"
                        size="medium"
                        fullWidth
                        startIcon={<Search />}
                        sx={{
                            mt: {
                                md: 3,
                                sx: 2
                            },
                            backgroundColor: '#4CAF50',
                            '&:hover': { backgroundColor: '#388E3C' },
                        }}
                    >
                        Search
                    </Button>
                </Box>
            </Box>

            {/* zad Kashmir Travel & Tour Agency in Pakistan */}

            <Box
                sx={{
                    height: {
                        md: '70vh',
                        xs: 'auto'
                    },
                    backgroundImage: `url(${worldImage})`, // Replace with your image path or URL
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex', justifyContent: 'center',
                    mt: 3
                }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: { md: '20px', xs: '10px' }, alignItems: 'center' }}>
                    <Button sx={{ backgroundColor: '#E5EEE4', color: '#388E3C', fontWeight: 'bold', padding: '10px 20px' }}>Award Winning</Button>
                    <Typography sx={{
                        fontSize: {
                            md: '30px',
                            xs: '20px'
                        }
                    }} color='#388E3C' fontWeight='900' textAlign='center'>
                        Azad Kashmir Travel & Tour Agency in Pakistan
                    </Typography>
                    <Typography sx={{
                        padding: {
                            md: '10px 200px',
                            xs: '10px'
                        }
                    }} color='#898080' textAlign='center' >
                        Planning a trip to Azad Kashmir can be daunting, especially when searching for trustworthy travel services, budget-friendly packages, and easy transportation. Many travelers face challenges with unreliable tour agencies, unpredictable weather, and inadequate guidance, making it tough to appreciate the region’s stunning landscapes, from Neelum Valley to Ratti Gali Lake. At Al Rehman Tour, we specialize in offering customized, affordable, and expertly guided tours to ensure a smooth travel experience with safe transportation, high-rated accommodations, and personalized itineraries. Whether you're a honeymooner, a family traveler, or an adventure seeker, we provide the best Azad Kashmir tour services in Pakistan, making your journey enjoyable, memorable, and hassle-free.
                    </Typography>
                </Box>
            </Box>

            {/* Craousels */}

            <Box sx={{
                backgroundColor: '#f5f5f5',
                py: 6,
                px: 2,
                overflow: 'hidden'
            }}>
                <Slider {...settings}>
                    {[...activities, ...activities].map((item, index) => (
                        <Box key={index}>
                            <Box sx={{
                                backgroundColor: 'white',
                                borderRadius: 4,
                                overflow: 'hidden',
                                boxShadow: 3,
                                height: '300px',
                                position: 'relative',
                                margin: '10px',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: 6,
                                    '& .content-overlay': {
                                        opacity: 1,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
                                    },
                                    '& .activity-emoji': {
                                        transform: 'translateY(-20px)'
                                    }
                                }
                            }}>
                                {/* Background Image */}
                                <Box sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    zIndex: 1
                                }} />

                                {/* Content Overlay */}
                                <Box className="content-overlay" sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    p: 2,
                                    color: 'white',
                                    zIndex: 2,
                                    opacity: 0.7,
                                    transition: 'all 0.3s ease'
                                }}>
                                    <Typography variant="h5" sx={{
                                        fontWeight: 'bold',
                                        mb: 1,
                                        textTransform: 'uppercase',
                                        lineHeight: 1.2
                                    }}>
                                        {item.title.split(' ').map((word, i) => (
                                            <Box key={i} component="span" display="block">{word}</Box>
                                        ))}
                                    </Typography>

                                    <Typography variant="body1" sx={{
                                        fontSize: '1.1rem',
                                        lineHeight: 1.4
                                    }}>
                                        {item.description}
                                    </Typography>
                                </Box>

                                {/* Emoji Badge */}
                                <Box className="activity-emoji" sx={{
                                    position: 'absolute',
                                    top: 20,
                                    right: 20,
                                    backgroundColor: 'rgba(255,255,255,0.9)',
                                    width: 60,
                                    height: 60,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 3,
                                    transition: 'all 0.3s ease',
                                    boxShadow: 2
                                }}>
                                    <Typography variant="h4" sx={{ lineHeight: 1 }}>
                                        {item.emoji}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </Box>

            {/* why choose us */}

            <Button sx={{ backgroundColor: '#E5EEE4', color: '#388E3C', fontWeight: 'bold', padding: '10px 20px' }}>Why Choose</Button>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid display='flex' justifyContent='center' size={{ md: 6, xs: 12 }}>
                        <Box sx={{
                            height: {
                                md: '80vh',
                                xs: 'auto'
                            },
                            width: {
                                md: '80%',
                                xs: '100%'
                            },
                            backgroundImage: `url(${whyChose})`, // Replace with your image path or URL
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            display: 'flex', justifyContent: 'center',
                            borderRadius: '10px',
                            alignItems: 'end',
                            mt: 3
                        }}>

                        </Box>
                    </Grid>
                    <Grid size={{ md: 6, xs: 12 }}>
                        <Typography color='#2B7522' fontSize='30px' fontWeight='900'>
                            Al-Rehman Tours for Your Kashmir Adventure?
                        </Typography>
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', width: '100px', backgroundColor: '#e5eee4', borderRadius: '50px' }}>
                                <VerifiedUserIcon sx={{ fontSize: '60px', color: '#2b7522' }} />
                            </Box>
                            <Box>
                                <Typography variant='h6' color='#2b7522' fontWeight='bold'>Expertise and Local Knowledge</Typography>
                                <Typography color='gray' width='550px'>Our team of experienced guides and Kashmir locals ensures you explore hidden gems and authentic experiences that other tourists miss.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}