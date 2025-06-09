import { use, useState } from "react";


export default function ChoseDate() {
    const [date, setDate] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    return (
        <>
            <section className="chose-date" >
                <h2>📅 Choose a Date</h2>

                <form method="get" style={{
                    display: "flex",
                    flexDirection: "row"
                }} >
                    <div className="input-field" style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder={date} />
                        <input type="date" id="startDate" name="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                        <input type="date" id="endDate" name="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                    <button className="fetch-btn" type="submit">🔍 Fetch Space Image</button>
                </form >
                {
                    // console.log(date, startDate, endDate, today)
                }
            </section>


        </>
    );
}