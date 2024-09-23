import React from 'react'

const Header = () => {
  return (
    <div className='headerSeaction'>
        <div className='left'>
            <div className="title">
                <h2> Shopping Mall</h2> 
            </div> 
        </div>
        <div className='center'>
            <ul>
                <li>Women</li>
                <li>Men</li>
                <li>childeren</li>
                <li>Beauty</li>
            </ul> 
        </div>
        <div className="search">
            <input type='text' placeholder='search...'/>
        </div>
        <div className='right'>
            <div className="signin">
                signin / signup
            </div>
        </div>
    </div>
  )
}

export default Header
