import React from 'react'
import { Link } from 'react-router-dom'
import classes from './PageNotFound.module.css'
const PageNotFound = () => {
  return (
    <div className={classes.mainbox}>
    <div className={classes.err}>4</div> 
    <div className={classes.err1}>0</div>   
    <div className={classes.err2}>4</div>
    <div className={classes.msg}>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <a href="#">home</a> and try from there.</p></div>
    <Link to='/'>
        <button>
            HOME
        </button>
    </Link>
      </div>
  )
}

export default PageNotFound
