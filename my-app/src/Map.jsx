import {Table} from 'react-bootstrap'

function Map () {
    const students = [
        {name: 'ali', age: '22'},
        {name: 'ali', age: '22'},
        {name: 'ali', age: '22'},
        {name: 'ali', age: '22'},
        {name: 'ali', age: '22'},
    ]
    
    return (
        <>
       <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
        {
            students.map((s , index)=> 
            <tr key={index}>
            <td> {s.name} </td>
            <td> {s.age} </td>
            </tr>)
        }
        </tbody>
        </Table>
        </>
    )
}

export default Map;