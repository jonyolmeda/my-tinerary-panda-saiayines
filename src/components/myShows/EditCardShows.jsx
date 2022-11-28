import {React,useState} from 'react'
import {URL} from '../../api/url'
import axios from 'axios'
import Swal from 'sweetalert2'
import './editcardshows.css'

export function EditCardShows({id}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState("");
    const [price, setPrice] = useState("");
    
    let submit = (e) => {
      e.preventDefault();
      let editShow = {
        name: name,
        description: description,
        photo: photo,
        price: price,
      };
  
      axios.patch(`${URL}/shows/${id}`, editShow, { 
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => {
        if (res.data.success) {
          Swal.fire({
            title: "Success",
            text: "The Show was updated succesfully",
            icon: "success",
          });
        }
      });
    };
    return (
        <form className="container-forms-byshow" onSubmit={submit}>
          <label className="">
            <p>Show Name</p>
            <input
              className=""
              type="text"
              name="name"
              onChange={(e) => (setName(e.target.value))}
              min="3"
              placeholder="New Name"
            />
          </label>
          <label className="">
            <p>Show Description</p>
            <input
              className=""
              type="text"
              name="description"
              onChange={(e) => (setDescription(e.target.value))}
              min="3"
              placeholder="New Description"
            />
          </label>
          <label className="">
            <p>Show Price</p>
            <input
              className=""
              type="number"
              name="price"
              onChange={(e) => (setPrice(e.target.value))}
              min="3"
              placeholder="New Description"
            />
          </label>
          <label className="">
            <p>Urls Photos</p>
            <input className="" onChange={e=> setPhoto(e.target.value)} type="url" name="photo" placeholder="New Image" />
          </label>
          <div className="">
            <input className="button_editshows" type="submit" value="Edit" />
          </div>
        </form>
      
    );
}