import { Data } from "@react-google-maps/api";
import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default class Director extends React.Component {

    state = {
        thoughtLeaders: [],
        boardMembers: [],
        error: null,
      };

    componentDidMount = async () => {
        try {
            const response1 = await axios.get('http://localhost:1337/api/thought-leaders?populate=*');
            const response2 = await axios.get('http://localhost:1337/api/board-members?populate=*');
            this.setState({ thoughtLeaders: response1.data.data, boardMembers: response2.data.data });
        } catch (error) {
            this.setState({ error });
        }
      };

    render() {
        
        const { error, thoughtLeaders } = this.state;
  
        if (error) {
            return <div>An error occured: {error.message}</div>;
        }

        return(
        <>
//             <section className="person-profile">
//                 <h2>DAMA Edmonton Board of Directors</h2>
//                 <div className="person-profile-flex">
//                     {presidentData.map((obj, id) => {
//                         return (
//                             <div className="person-profile-details">
//                             <Link className="navItem" to="/memberships" onClick="window.location.reload();">
//                                 <h3>{obj.title}</h3>
//                                 <img src={process.env.PUBLIC_URL + `/assets/images/profile-picture/${obj.imageName}`} alt="images"/>
//                                 <h4>{obj.name}</h4>
//                                 <p>{obj.position}</p>
//                             </Link>
//                             </div>
//                         )
//                     })}
//                 </div>

//                 <div className="person-profile">
//                     <h3>Vice President</h3>
//                     <div className="person-profile-flex">
//                         {vicePresidentData.map((obj, id) => {
//                             return (
//                                 <div className="person-profile-details">
//                                 <Link className="navItem" to="/memberships" onClick="window.location.reload();">
//                                     <img src={process.env.PUBLIC_URL + `/assets/images/profile-picture/${obj.imageName}`} alt="images"/>
//                                     <h4>{obj.name}</h4>
//                                     <p>{obj.position}</p>
//                                 </Link>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </section>

            <section className="person-profile">
                <h3>Data Management - Data Science - Thought Leaders</h3>
                        
                <div className="person-profile-flex">
                    {this.state.thoughtLeaders.map(thoughtLeader=>(
                        <div className="person-profile-details" key={thoughtLeader.id}>
                            <Link className="navItem" to="/memberships" onClick="window.location.reload();">
                                <img src={`http://localhost:1337${thoughtLeader.attributes.portrait.data.attributes.url}`} alt="images"/>
                                <h4>{thoughtLeader.attributes.name}</h4>
                                <p>{thoughtLeader.attributes.career}</p>
                            </Link>
                        </div>
                    ))}
                </div> 
            </section>
        </>
        )
    }
}
