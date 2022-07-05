export default function VisibilitiControl({setshowCompleted,cleanTask,ischecked}){
    const handelDelete = ()=>{
        if(window.confirm('eliminar')){
            cleanTask()
        }
    }
    return(
        <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" onChange={(e)=> setshowCompleted(e.target.checked)} checked={ischecked} />
        <label>Ver Tarear</label>
        <button onClick={handelDelete} className="btn btn-danger btn-sm">Limpiar</button>
      </div>
    );
}