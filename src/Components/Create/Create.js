import React, { Fragment,useContext,useState } from 'react';
import './Create.css';
import {useHistory} from 'react-router-dom';
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from '../../store/FirebaseContext';

const Create = () => {
  const {firebase}=useContext(FirebaseContext)
  const {user}=useContext(AuthContext)
  const history = useHistory()
  const [name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState(null)
  const date= new Date()
  const handeleSubmit=(e)=>{
   firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
    ref.getDownloadURL().then((url)=>{
      console.log(url);
      firebase.firestore().collection('products').add({
        name,
        category,
        price,
        image:url,
        userId:user.uid,
        createdAt:date.toDateString()
      })
      history.push('/');
    })
   })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
<form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname"
             value={price}
             onChange={(e)=>setPrice(e.target.value)}
             name="Price" />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : "https://boschbrandstore.com/wp-content/uploads/2019/01/no-image.png"}></img>
         
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handeleSubmit} className="uploadBtn">upload and Submit</button>
            </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
