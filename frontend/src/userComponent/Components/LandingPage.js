import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../Slice2"
import UserNavbar from "./UserNavbar"
import { useNavigate } from "react-router-dom"
import './LandingPage.css'
const LandingPage=()=>{
    const dispatch=useDispatch()
    const {products}=useSelector((state)=>state.info2.data)
    const [flag,setFlag]=useState(false)
    const [itemid,setItemid]=useState(-1)
    const [active,setActive]=useState(false)
    const [selected,setSelected]=useState("All Categories")
    const [search,setSearch]=useState('')
    const [searched,setSearched]=useState(false)
    const [searchList,setSearchList]=useState([])
    const [categorisedProducts,setCategorisedProducts]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        dispatch(getProducts())
    },[])
    useEffect(()=>{
        setCategorisedProducts(products.filter((item)=>item.category===selected))
        if(searchList.length!==0) setSearchList(searchList.filter((item)=>products.includes(item)))
    },[products])
    const handleChoose=()=>{
        setActive(!active)
    }
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
    const handleSearch=(e)=>{
        e.preventDefault()
        if(!search) return alert("Empty field!")
        else {
            const arr=selected === 'All Categories' ? products.filter((item)=>item.title===search) : categorisedProducts.filter((item)=>item.title===search)
            if(arr) setSearchList(arr)
            setSearched(true)
            setSearch('')
        }
    }
    const handleKey=(e)=>{
        if(e.key==='Enter') {
            e.preventDefault()
            if(!search) return alert("Empty field!")
            else {
                setSearched(true)
                const arr=selected === 'All Categories' ? products.filter((item)=>item.title===search) : categorisedProducts.filter((item)=>item.title===search)
                if(arr) setSearchList(arr)
                setSearch('')
            }
        }
    }
    const handleItem=(e)=>{
        setSearched(false)
        setSelected(e.target.textContent)
        if(e.target.textContent!=='All Categories') setCategorisedProducts(products.filter((item)=>item.category===e.target.textContent))
        else setCategorisedProducts([])
        setActive(!active)
    }
    return(
        <div style={{overflowX: 'hidden'}}>
            <UserNavbar></UserNavbar>
            <div style={{marginTop: '200px',marginLeft: '3px'}}>
            <h8 style={{marginLeft: '58px',marginTop: '-25px',position: 'absolute'}}>Category <i className="fa-solid fa-angles-right"></i></h8>
                <div style={{marginTop: '60px',marginBottom: '60px',top: '133px'}}>
                    <div className="dropdown4">
                        <div className="dropdown4-btn" onClick={handleChoose}>{selected} <span className="fas fa-caret-down"></span></div>
                        {active&&(
                            <div className="dropdown4-content">
                                <div onClick={(e)=>handleItem(e)} className="dropdown4-item">
                                    Office
                                </div>
                                <div onClick={(e)=>handleItem(e)} className="dropdown4-item">
                                    Bed Room
                                </div>
                                <div onClick={(e)=>handleItem(e)} className="dropdown4-item">
                                    Living Room
                                </div>
                                <div onClick={(e)=>handleItem(e)} className="dropdown4-item">
                                    Dining
                                </div>
                                <div onClick={(e)=>handleItem(e)} className="dropdown4-item">
                                    Kids
                                </div>
                                <div onClick={(e)=>handleItem(e)} className="dropdown4-item">
                                    All Categories
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="search4" style={{marginLeft: '330px',width: '500px',position: 'absolute',marginTop: '-45px'}}>
                        <i className="fa fa-search"></i>
                        <input type="text" className="form-control" placeholder={`Search for ${selected}...`} onChange={(e)=>handleChange(e)} value={search} onKeyDown={(e)=>handleKey(e)}/>
                        <button className="btn" onClick={(e)=>handleSearch(e)}>Search</button>
                    </div>
                </div>
                <h5 style={{marginLeft: '1100px',color: 'grey',marginTop: '-35px',position: 'absolute'}}><b>{searched ? searchList.length : selected === 'All Categories' ? products.length : categorisedProducts.length} results</b></h5>
                <div>
                {
                    searched ? <>
                    {
                        searchList.length !== 0 ? <>
                        <div className="row">
                            {
                                searchList.map((item)=>(
                                    <div className="col-sm-12 col-lg-3">
                                        <div className="card b" style={{width: '262px',height: '400px', margin: '7px', marginLeft: '15px'}}>
                                            <div className="hover-animation2">
                                                <img src={`${item.img[1]}`} className="img-back" alt='img'></img>
                                                <img src={`${item.img[0]}`} className="img-front" alt='img'></img>
                                            </div>
                                            <div className="card-body">
                                                <h2 style={{fontSize: '100%',fontFamily: 'serif',textOverflow: 'ellipsis',overflow: 'hidden',whiteSpace: 'nowrap'}}><b>{item.title}</b></h2>
                                                <h8 style={{fontSize: '80%',color: '#888888'}} className="card-text">{item.primaryMaterial}</h8>
                                                <br/>
                                                <h8 style={{fontSize: '80%',color: '#888888'}} className="card-text">Rs. {item.price}</h8>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        </> : <>
                            <div style={{boxShadow: '0px 0px 5px 0px #888888',backgroundColor: 'white',marginLeft: '103px',marginRight: '100px',padding: '30px',marginTop: '100px'}}>
                                <div style={{padding: '50px',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                                    <img style={{width: '70px'}} src="https://learnifyme.com/theme/image.php/boost/block_timeline/1658463070/activities" alt="img"></img>
                                    <br></br>
                                    <h5 style={{color: 'grey'}}><b>No Result Found!</b></h5>
                                </div>
                            </div>
                        </>
                    }
                    </> : <>
                    {
                        selected==='All Categories'?<>
                        {
                            products.length!==0 ? <>
                                <div className="row">
                                    {
                                        products.map((item)=>(
                                            <div className="col-sm-12 col-lg-3">
                                                <div className="card b" style={{width: '262px',height: '400px', margin: '7px', marginLeft: '15px'}}>
                                                    <div className="hover-animation2">
                                                        <img src={`${item.img[1]}`} className="img-back" alt='img'></img>
                                                        <img src={`${item.img[0]}`} className="img-front" alt='img'></img>
                                                    </div>
                                                    <div className="card-body">
                                                        <h2 style={{fontSize: '100%',fontFamily: 'serif',textOverflow: 'ellipsis',overflow: 'hidden',whiteSpace: 'nowrap'}}><b>{item.title}</b></h2>
                                                        <h8 style={{fontSize: '80%',color: '#888888'}} className="card-text">{item.primaryMaterial}</h8>
                                                        <br/>
                                                        <h8 style={{fontSize: '80%',color: '#888888'}} className="card-text">Rs. {item.price}</h8>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </> : <>
                            <div style={{boxShadow: '0px 0px 5px 0px #888888',backgroundColor: 'white',marginLeft: '103px',marginRight: '100px',padding: '30px',marginTop: '100px'}}>
                                <div style={{padding: '50px',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                                    <img style={{width: '70px'}} src="https://learnifyme.com/theme/image.php/boost/block_timeline/1658463070/activities" alt="img"></img>
                                    <br></br>
                                    <h5 style={{color: 'grey'}}><b>No Result Found!</b></h5>
                                </div>
                            </div>
                            </>
                        }
                        </>:<>
                        {
                            categorisedProducts.length !== 0 ? <>
                                <div className="row">
                                    {
                                        categorisedProducts.map((item)=>(
                                            <div className="col-sm-12 col-lg-3">
                                                <div className="card b" style={{width: '262px',height: '400px', margin: '7px', marginLeft: '15px'}}>
                                                    <div className="hover-animation2">
                                                        <img src={`${item.img[1]}`} className="img-back" alt='img'></img>
                                                        <img src={`${item.img[0]}`} className="img-front" alt='img'></img>
                                                    </div>
                                                    <div className="card-body">
                                                        <h2 style={{fontSize: '100%',fontFamily: 'serif',textOverflow: 'ellipsis',overflow: 'hidden',whiteSpace: 'nowrap'}}><b>{item.title}</b></h2>
                                                        <h8 style={{fontSize: '80%',color: '#888888'}} className="card-text">{item.primaryMaterial}</h8>
                                                        <br/>
                                                        <h8 style={{fontSize: '80%',color: '#888888'}} className="card-text">Rs. {item.price}</h8>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </> : <>
                            <div style={{boxShadow: '0px 0px 5px 0px #888888',backgroundColor: 'white',marginLeft: '103px',marginRight: '100px',padding: '30px',marginTop: '100px'}}>
                                <div style={{padding: '50px',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                                    <img style={{width: '70px'}} src="https://learnifyme.com/theme/image.php/boost/block_timeline/1658463070/activities" alt="img"></img>
                                    <br></br>
                                    <h5 style={{color: 'grey'}}><b>No Result Found!</b></h5>
                                </div>
                            </div>
                            </>
                        }
                        </>
                    }
                    </>
                }
                </div>
            </div>
        </div>
    )
}
export default LandingPage