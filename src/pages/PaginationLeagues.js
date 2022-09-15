import { useState } from "react";
import Leagues from "./Leagues";
import { Pagination } from "@mui/material";
import filterData from "../components/filterData";


function PaginationLeagues({ leagues }) {
    const [word, setWord] = useState("")
    const [page, setPage] = useState(1)
    const [contentPerPage] = useState(12)
    const handleChange = (event, value) => {
        setPage(value)
    }

    const lastIndex = page * contentPerPage
    const firstIndex = lastIndex - contentPerPage
    const dataFiltered = filterData(word, leagues)
    const pageCount = Math.ceil(dataFiltered.length/contentPerPage)
    const currentContent = dataFiltered.slice(firstIndex, lastIndex)

    return(
        <div className="PaginatedPage">
        <Leagues leaguesPagination={currentContent}/>
        <Pagination
        size="large"
        count={pageCount}
        page={page}
        onChange={handleChange}
        />
        </div>
    )
}

export default PaginationLeagues