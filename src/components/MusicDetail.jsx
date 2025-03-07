import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { format } from "date-fns";



const columns = [
    { name: "Song Name", selector: row => row.name, sortable: true },
    { name: "Performers", selector: row => row.performers, sortable: false,width:"500px" },
    { name: "Duration", selector: row => row.duration, sortable: true },
    { name: "Size", selector: row => row.size, sortable: true },
  ];



const MusicDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  

  useEffect(() => {
    fetch(`http://localhost:3000/collections/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
            setDetails(data)
  });
  }, [id]);

  if (!details) return <h2>Loading...</h2>;
  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} minutes ${secs} seconds`;
  };
  

  return (
    <>
    <div className="container-fluid ">
        <div className="row">
             <div className="col-md-12  mt-2 px-0">
             <div className="px-2">
      <nav
  style={{
    "--bs-breadcrumb-divider":
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E\")",
  }}
  aria-label="breadcrumb"
>

        <ol className="breadcrumb mb-0">
  <li className="breadcrumb-item">
    <Link to="/" className="overviewBreadCrumb">Overview</Link>
  </li>
  <li className="breadcrumb-item">
  {details.name}
  </li>
</ol>

</nav>
            </div>
            

            <div className="boxShadow mt-3 ">
               <h2>{details.name}</h2>
          </div>
             </div>
        </div>
    </div>
      


    <div className="container-fluid mt-4 ">

    
      <div className="row">
         <div className="col-md-12">
            <div className="boxShadow borderRadius">

           
         
        <div className="row mt-3">
          <div className="col-xl-2 col-lg -2 col-md-4 col-sm-6 col-6">
          <p className="font-size"><strong>Artist:</strong> {details.artist}</p>
          </div>
          <div className="col-xl-2 col-lg -2 col-md-4 col-sm-6 col-6">
            <p className="font-size"><strong>Type:</strong> {details.type}</p>
            </div>
            <div className="col-xl-2 col-lg -2 col-md-4 col-sm-6 col-6">
              <p className="font-size"><strong>Song Count:</strong> {details.songCount}</p>
            </div>
            <div className="col-xl-2 col-lg -2 col-md-4 col-sm-6 col-6">
             <p className="font-size">
           <strong>Total Duration:</strong> {formatDuration(details.durationInSeconds)}
                   </p>

            </div>
            <div className="col-xl-2 col-lg -2 col-md-4 col-sm-6 col-6">
              <p className="font-size"><strong>Total Size:</strong> {details.sizeInBytes}</p>
            </div>
            <div className="col-xl-2 col-lg -2 col-md-4 col-sm-6 col-6">
                <p className="font-size">
                <strong>Released On:</strong> {format(new Date(details.releasedOn), "dd MMM yy")}
                </p>
            </div>
      </div>

      </div>
         </div>
      </div>
    
     
     <div className="container-fluid">
         <div className="row mt-4">
             <div className="col-md-12 borderRadius">
             <DataTable
        columns={columns}
        data={details.songs}
        pagination
        highlightOnHover
        striped
      />
             </div>
         </div>
     </div>
   
     
     
    </div>
    </>
  );
};

export default MusicDetail;
