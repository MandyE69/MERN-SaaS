import { Link } from "react-router-dom"
import Button from "./Buttton"

{/* <img src="" className="h-8 mr-3" alt="E-pustakalaya logo" / */ }

function NavBar() {
    return (
       
        <nav className="fixed top-0 border-solid w-full px-4 py-2 backdrop-filter bg-white z-50 ">
            <div className="container mx-auto ">
                <div className="w-full flex flex-col lg:flex-row">
                    <div className="flex justify-between w-full lg:flex-row ">
                       <Link to="/"> <div className="flex items-center ">
                            
                            <img src="https://t4.ftcdn.net/jpg/10/66/31/57/240_F_1066315729_jUqQ5MYMG0lEoij4iwn7eWBmQtvLoZIM.jpg" alt="brand image" className=" h-15 mr-3" />
                           <h1 className=" font-bold text-xl text-green-900">E-Pustakalya</h1>
                        </div></Link>
                        <div className="flex items-center">
                            <Link to="/create-page">
                            <Button value="Create Book" className=" bg-green-900"/>
                            </Link>                      
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default NavBar