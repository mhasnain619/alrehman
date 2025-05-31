import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './slider.css';
import img1 from '../../assets/arangkel.jpg'
import img2 from '../../assets/download.jpg'
import img3 from '../../assets/Kel-Neelum-Valley-1.jpg'
import img4 from '../../assets/Kel-Neelum-Valley-4.webp'

const slides = [
    {
        img: img1,
        title: 'Your Journey Begins Here',
        subtitle: 'All Kashmir Tours Are Available',
    },
    {
        img: img2,
        title: 'Explore Hidden Paradises',
        subtitle: 'Nature, Peace & Adventure Await',
    },
    {
        img: img3,
        title: 'Explore Hidden Paradises',
        subtitle: 'Nature, Peace & Adventure Await',
    },
    {
        img: img4,
        title: 'Kashmir Travel And Tour Agency In Pakistan',
        subtitle: 'Nature, Peace & Adventure Await',
    },
];

const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.7,
            ease: 'easeOut',
        },
    }),
};

export default function HeroSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            autoplay={{ delay: 3000 }}
            loop
            className="mySwiper"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="slide"
                        style={{
                            backgroundImage: `url(${slide.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100vh',
                            position: 'relative',
                        }}
                    >
                        <div className="overlay" />
                        {activeIndex === index && (
                            <motion.div
                                className="content"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                key={index}
                            >
                                <motion.h2 custom={0} variants={textVariant}>
                                    {slide.title}
                                </motion.h2>
                                <motion.p custom={1} variants={textVariant}>
                                    {slide.subtitle}
                                </motion.p>
                                <motion.button
                                    custom={2}
                                    variants={textVariant}
                                    className="hero-btn"
                                >
                                    Let’s Get Started
                                </motion.button>
                            </motion.div>
                        )}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
