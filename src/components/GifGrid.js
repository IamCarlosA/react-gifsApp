import React from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem'
import { useFecthGifs } from '../hooks/useFecthGifs'


export const GifGrid = ({ category }) => {

    
    const {data, loading} = useFecthGifs(category);

    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn" >{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">

                {

                    data.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))

                }

            </div>
        </>

    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}