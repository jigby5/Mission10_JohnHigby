import { useEffect, useState } from "react";
import type { Bowler } from "./types/bowler";

function BowlerList() {
    const [bowlers, setBowlers] = useState<Bowler[]>([]);

    // Fetch the data from your .NET backend
    useEffect(() => {
        const fetchBowlerData = async () => {
            const rsp = await fetch("https://localhost:5000/Bowling"); // Replace with your actual port
            const b = await rsp.json();
            setBowlers(b);
        };
        fetchBowlerData();
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Bowler Name</th>
                        <th>Team Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {bowlers.map((b) => (
                        <tr key={b.bowlerId}>
                            <td>{b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}</td>
                            <td className="team-cell">{b.team?.teamName}</td> 
                            <td>{b.bowlerAddress}</td>
                            <td>{b.bowlerCity}</td>
                            <td>{b.bowlerState}</td>
                            <td>{b.bowlerZip}</td>
                            <td>{b.bowlerPhoneNumber}</td>
                        </tr>       
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default BowlerList;