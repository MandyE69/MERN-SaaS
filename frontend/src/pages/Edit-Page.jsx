import EditCard from "../components/Edit-card"
import NavBar from "../components/Nav-Bar"



function EditPage(){
    return(
      <div>
          <NavBar/>
          <div className="pt-10">
            <EditCard />
          </div>
        </div>
    )
}

export default EditPage