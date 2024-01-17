import Table from 'react-bootstrap/Table';
import { formatDate } from '../utils';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";


function PostTable({ post }) {

    const tableStyle = {
        marginLeft: '12px',
        width: '100%',
        tableLayout: 'fixed',
        maxWidth: 'calc(100% - 12px)',
        borderSpacing: '10px',
    };
    const cellStyle = {
        padding: "10px",
    }


    return (
        <Table striped hover size="sm" style={tableStyle}>
            <thead>
                <tr>
                    <th style={cellStyle} width="10%">#</th>
                    <th style={cellStyle} width="30%">Title</th>
                    <th style={cellStyle} width="20%">Tags</th>
                    <th style={cellStyle} width="20%">CreatedAt</th>
                    <th style={cellStyle} width="20%">Action</th>
                </tr>
            </thead>
            <tbody>
                {post?.map((item, index) => (
                    <tr key={index}>
                        <td style={cellStyle}>{index + 1}</td>
                        <td style={cellStyle}>{item?.title}</td>
                        <td style={cellStyle}>{item?.tags}</td>
                        <td style={cellStyle}>{formatDate(item?.createdAt)}</td>
                        <td colSpan={2} style={cellStyle}>
                            <span className='p-10 post-table-icon'><CiEdit height={20} width={20} /></span>
                            <span className='p-10 post-table-icon'><MdDelete height={20} width={20} /></span>
                        </td>
                    </tr>
                ))}


            </tbody>
        </Table>
    );
}

export default PostTable;