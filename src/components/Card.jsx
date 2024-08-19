import React from 'react'

const Card = props => {

    const { item } = props
    return (
        <div className='card col-sm-3' >
            <img className='card-img-top' src={item?.image} />
            <div className='card-body' >
                <h5 > {item?.title} </h5>
                <p> {item?.description} </p>
                <a className='btn btn-primary' href={'https://fakestoreapi.com/products/' + item?.id} >Ver</a>
            </div>
        </div>
    )
}

export default Card