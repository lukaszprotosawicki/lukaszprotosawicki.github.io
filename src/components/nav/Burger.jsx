import React,{useState} from 'react'

const Burger = () => {

    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className="button" open={open} onClick={() => setOpen(!open)}>
              <div className="button-nav"></div>
              <div className="button-nav"></div>
              <div className="button-nav"></div>
          </div>
        </div>
            )
}

export default Burger