import React, { useState } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import styled from 'styled-components';
import '@brainhubeu/react-carousel/lib/style.css';

export default function CustomCarousel({ images = [] }) {
    const [value, setValue] = useState(0);

    if (images?.length === 0)
        images = [
            { id: 1, url: '/slogan.jpg' },
            { id: 2, url: '/slogan.jpg' },
        ];

    const imageList = images?.map((image) => <ImageItem key={image?.id} image={image} />);

    return (
        <CarouselView>
            <Carousel value={value} onChange={setValue}>
                {imageList}
            </Carousel>
        </CarouselView>
    );
}

function ImageItem({ image }) {
    return <ImageItemView src={image?.url} />;
}

const CarouselView = styled.div`
    width: 100%;
    overflow: hidden;
`;

const ImageItemView = styled.img`
    width: 100%;
    height: 96px;

    object-fit: contain;

    border: 1px solid ${(props) => props.theme.infoColor};
    border-radius: 10px;
`;
