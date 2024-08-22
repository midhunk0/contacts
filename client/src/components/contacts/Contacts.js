// // @ts-nocheck
// import React from "react";
// import "./Contacts.css";

// const Contacts = ({ users }) => {

//     return (
//         <div className="users">
//             <h4>Contacts</h4>
//             <div className="table-container">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Phone</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.length > 0 ? (
//                             users.map((user) => (
//                                 <tr key={user._id}>
//                                     <td>{user.name}</td>
//                                     <td>{user.email}</td>
//                                     <td>{user.phone}</td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="3">No users found</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Contacts;










// @ts-nocheck
import React from "react";
import "./Contacts.css";

const Contacts = ({ users, onUserClick }) => {
    return (
        <div className="users">
            <h4>Contacts</h4>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user._id} onClick={() => onUserClick(user)}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Contacts;
