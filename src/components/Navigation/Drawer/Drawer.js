import React from 'react'
import classes from '../Drawer/Drawer.module.css'

const links = [
    1, 2 ,3 
]

class Drawer extends React.Component {

    renderLinks = () =>{
        return links.map((link, index)=>{
            return (
                <li key={index}>
                    Link {link}
                </li>
            )
        })
    }
    render(){
        return(
            <nav className={classes.Drawer}>
                <ul>
                    <li>
                        {
                            this.renderLinks()
                        }
                    </li>
                </ul>
            </nav>
        )
    }
}




export default Drawer