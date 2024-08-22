// // @ts-nocheck
// import React, { useEffect, useState } from "react";
// import "./Topbar.css";

// function Topbar({users, setFilteredUsers}){
//     const [searchTerm, setSearchTerm]=useState('');

//     useEffect(()=>{
//         setFilteredUsers(users);
//     }, [users, setFilteredUsers]);

//     const searchUser=(e)=>{
//         const term=e.target.value.toLowerCase();
//         setSearchTerm(term);
//         const filtered=users.filter(user=>
//             (user.name?.toLowerCase().includes(term)) ||
//             (user.phone?.includes(term)) ||
//             (user.email?.toLowerCase().includes(term))
//         );
//         setFilteredUsers(filtered);
//     }

//     const enterKey=(e)=>{
//         if(e.key==="Enter"){
//             searchUser(e);
//         }
//     }


//     return(
//         <div className="topbar">
//             <div className="title">
//                 <h2>hello</h2>
//             </div>
//             <div className="options">
//                 <input
//                     className="search"
//                     type="text"
//                     placeholder="search"
//                     value={searchTerm}
//                     onChange={searchUser}
//                     onKeyDown={enterKey}
//                 />
//                 <button className="create"><img src="/create.png" alt="create"/></button>
//             </div>
//         </div>
//     )
// }

// export default Topbar;











// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./Topbar.css";

function Topbar({users, setFilteredUsers, startCreateUser}){
    const [searchTerm, setSearchTerm]=useState('');

    useEffect(()=>{
        setFilteredUsers(users);
    }, [users, setFilteredUsers]);
    const searchUser=(e)=>{
        const term=e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered=users.filter(user=>
            (user.name?.toLowerCase().includes(term)) ||
            (user.phone?.includes(term))
        );
        setFilteredUsers(filtered);
    }

    const enterKey=(e)=>{
        if(e.key==="Enter"){
            searchUser(e);
        }
    }

    return (
        <div className="topbar">
            <div className="title">
                <h2>Hello</h2>
            </div>
            <div className="options">
                <input
                    className="search"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => searchUser(e)}
                    onKeyDown={enterKey}
                />
                <button className="create" onClick={startCreateUser}>
                    <img src="create.png" alt="create"/>
                </button>
            </div>
        </div>
    );
}

export default Topbar;
