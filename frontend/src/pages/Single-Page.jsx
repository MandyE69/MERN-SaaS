
import axios from "axios"
import { useEffect, useState } from "react"
import NavBar from "../components/Nav-Bar"
import { useNavigate, useParams } from "react-router-dom"

function SinglePage() {
    const {id} =  useParams();
    
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const[book,setBook] = useState({})
    const [error, setError] = useState(null);

    const fetchBook = async()=>{

    try{
    const response = await axios.get("http://localhost:3000/api/books/" + id)
    setBook(response.data.datas)
    setError(null)
    console.log(response.data.datas)
    }catch(err){
      setError(err.message||"an error accured")
      setBook(false) 
    }finally {
        setLoading(false);
    }
   }
   
   useEffect(()=>{
    if(!id) return;
      fetchBook() 
    },[id])

    const deleteBook = async()=>{
      const response = await axios.delete("http://localhost:3000/api/books/" + id)
      if(response.status === 200){
        alert("Book deleted Succesfully")
        navigate("/")
      }
      else{
        alert("Something is wrong")
      }
    }
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!book) return <p>No data found.</p>;


  return (
    <div>
      <NavBar />
      <div className="max-w-5xl mx-auto mt-24 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Book Cover */}
        <div className="flex justify-center">
          <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" alt="Book Cover" className="rounded-xl shadow-lg w-72 h-auto object-cover" />
        </div>
        {/* Book Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.bookName}</h1>
          <p className="text-gray-600 text-lg mb-4">by <span className="font-medium text-gray-800">{book.bookAuthor}</span></p>
          {/* Rating */}
          <div className="flex items-center space-x-1 text-yellow-500 mb-4">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.574-.955L10 0l2.939 5.955 6.574.955-4.757 4.635 1.122 6.545z" /></svg>
            <span className="text-sm text-gray-700">(4.8/5 - 320 reviews)</span>
          </div>
          {/* Price */}
          <div className="text-2xl font-semibold text-blue-600 mb-6">Rs.{book.bookPrice}</div>
          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, commodi quas. Possimus nemo non nostrum esse veniam repellat sint numquam repellendus deleniti tenetur. Quam in nemo quas distinctio optio! Quibusdam.
          </p>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">Buy Now</button>
            <button className="border border-red-900 text-white bg-red-600 px-6 py-2 rounded-xl hover:bg-red-500 transition" onClick={deleteBook}>Delete Book</button>
            {/* <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">Delete Book</button> */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default SinglePage