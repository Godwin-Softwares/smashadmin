import DataTable from '../../components/dataTable/DataTable'
import { GridColDef } from '@mui/x-data-grid';
import './passenger.scss'
import { userRows } from '../../data';
const Passenger = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { 
        field: 'image', headerName: 'Image', width: 80,
        renderCell : (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt=''/>
        },
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 100,
    //   editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 100,
    //   editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 180,
    //   editable: true,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      type: 'number',
      width: 120,
    //   editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 120,
    //   editable: true,
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },

    { field: 'verified', headerName: 'Verified', width: 90, type:'boolean' },

  ];


  return (
    <div className='passenger'>
      <div className='info'>
        <h1>Passengers</h1>
        <button>Add New Rider</button>
      </div>
     <DataTable slug='riders' columns={columns} rows={userRows}/>
    </div>
  )
}

export default Passenger
