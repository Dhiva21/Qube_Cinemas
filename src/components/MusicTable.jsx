import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Form, Dropdown, DropdownButton, FormControl } from "react-bootstrap";
import { FaSearch, FaEye } from "react-icons/fa";
import { format } from "date-fns";
import { Link } from "react-router-dom";





const allColumns = [
    {
        id: "name",
        name: "Collection Name",
        selector: row => (
          <div> 
          <p className=" mt-3 mb-0 fw-medium"><>{row.name}</></p> 
           <p className="artistColor">{row.artist}</p>
          </div>
        ),
        sortable: true,
        width: "500px",
      },
  { id: "type", name: "Type", selector: row => row.type, sortable: true },
  { id: "songCount", name: "Song Count", selector: row => row.songCount, sortable: true },
 {
  id: "durationInSeconds",
  name: "Duration",
  selector: row => formatDuration(row.durationInSeconds),
  sortable: true
},

  { id: "sizeInBytes", name: "Size", selector: row => row.sizeInBytes, sortable: true },
  {
    id: "releasedOn",
    name: "Released On",
    selector: row => format(new Date(row.releasedOn), "dd MMM yyyy, hh:mm a"),
    sortable: true
  },
  {
    id: "action",
    name: "Action",
    cell: row => (
      <div className="viewBtn">
       <Link to={`/collections/${row.id}`}>
          <div><FaEye /></div>
          <div className="ms-2">View Details</div>
        </Link>
      </div>
    )
  }
];
const formatDuration = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
const MusicTable = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState(allColumns.map(col => col.id));
  // const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/collections")
      .then(res => res.json())
      .then(data => {
        setData(data);
        setFilteredData(data); 
      });
  }, []);


  const handleTypeSelection = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type)); 
    } else {
      setSelectedTypes([...selectedTypes, type]); 
    }
  };


// const handleColumnSelection = (columnId) => {
//     setVisibleColumns((prevColumns) => {
//       if (prevColumns.includes(columnId)) {
//         return prevColumns.filter((col) => col !== columnId); 
//       } else {
//         return [...prevColumns, columnId]; 
//       }
//     });
//   };


  
  useEffect(() => {
    const filtered = data.filter(item =>
      (selectedTypes.length === 0 || selectedTypes.includes(item.type)) && 
      (item.name.toLowerCase().includes(search.toLowerCase()) ||
       item.type.toLowerCase().includes(search.toLowerCase()))
    );
    setFilteredData(filtered);
  }, [search, selectedTypes, data]);

 
  const filteredColumns = allColumns.filter(col => visibleColumns.includes(col.id));

  return (
    <div className="container-fluid px-0 ">
      <div className="boxShadow overView py-3">
        <h2>Overview</h2>
      </div>
       
      <div className="searchBox mx-3 mt-3 borderRadius">
        <div className="row">

          <div className="col-md-3">
            <Form className="mb-3 search">
              <FormControl
                type="text"
                placeholder="Search"
                className="searchBorder"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="search-icon">
                <FaSearch />
              </div>
            </Form>
          </div>


          <div className="col-md-3">
            <DropdownButton
              id="dropdown-basic-button"
              className="typeDrop"
              title={`Type ${selectedTypes.length > 0 ? `(${selectedTypes.length})` : ""}`}
              variant="primary"
            >
              {["Album", "EP", "Single"].map(type => (
                <Dropdown.Item key={type} onClick={() => handleTypeSelection(type)}>
                  <Form.Check 
                    type="checkbox" 
                    label={type} 
                    checked={selectedTypes.includes(type)} 
                    onChange={() => handleTypeSelection(type)}
                  />
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>

          {/* Show/Hide Columns Dropdown */}
          <div className="col-md-6 d-flex justify-content-end">
          <DropdownButton
  id="dropdown-columns-button"
  className="columnDrop pe-3"
  title="Show/Hide Columns"
  variant="secondary"
>
  {allColumns.map((column) => (
    <Dropdown.Item key={column.id} as="div">
      <Form.Check 
        type="checkbox"
        label={column.name}
        checked={visibleColumns.includes(column.id)}
        onClick={(e) => e.stopPropagation()} 
        onChange={() => {
          setVisibleColumns((prevColumns) =>
            prevColumns.includes(column.id)
              ? prevColumns.filter((col) => col !== column.id) 
              : [...prevColumns, column.id] 
          );
        }}
      />
    </Dropdown.Item>
  ))}
</DropdownButton>


          </div>
        </div>


        <DataTable 
          columns={filteredColumns} 
          data={filteredData} 
          pagination 
          highlightOnHover 
          className="tableInner"
        />
      </div>
    </div>
  );
};

export default MusicTable;
