import {React,useState} from 'react'
import {URL} from '../../api/url'
import axios from 'axios'
import Swal from 'sweetalert2'
import '../myShows/editcardshows.css'

export function EditCardItineraries({id}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState("");
    const [price, setPrice] = useState("");
    
    let submit = (e) => {
      e.preventDefault();
      let editItinerary = {
        name: name,
        description: description,
        photo: photo,
        price: price,
      };
  
      axios.put(`${URL}/itineraries/${id}`, editItinerary, { 
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          Swal.fire({
            title: "Success",
            text: "The Itinerary was updated succesfully",
            icon: "success",
          });
        }
      });
    };
    return (
        <form className="container-forms-byshow" onSubmit={submit}>
          <label className="">
            <p>Itinerary Name</p>
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
            <p>Itinerary Description</p>
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
            <p>Itinerary Price</p>
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