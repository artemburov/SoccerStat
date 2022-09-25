import { useState } from "react";
import { Pagination, Typography } from "@mui/material"
import Stack from "@mui/material/Stack"
import Leagues from "../pages/Leagues"
import SearchBar from '../components/SearchBar/SearchBar'
import filterData from "../usefulFunctions/filterData";


function PaginationLeagues({ leagues }) {
    const [query, setQuery] = useState("")
    const [page, setPage] = useState(1)
    const [contentPerPage] = useState(12)
    const handleChange = (event, value) => {
        setPage(value)
    }

    const updateQuery = (newQuery) => {
        setQuery(newQuery)
    }
    const lastIndex = page * contentPerPage
    const firstIndex = lastIndex - contentPerPage
    const dataFiltered = filterData(query, leagues)
    const pageCount = Math.ceil(dataFiltered.length / contentPerPage)
    const currentContent = dataFiltered.slice(firstIndex, lastIndex)

    return (
        <>
            <SearchBar query={query} updateQuery={updateQuery} />
            <Stack
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
                sx={{ height: "84vh" }}
            >
                {(!currentContent.length) &&
                    (<Typography variant="h5">
                        Лига с таким названием отсутствует
                    </Typography>)
                }
                <>
                    <Leagues leaguesPagination={currentContent} />
                    <Pagination
                        size="large"
                        count={pageCount}
                        page={page}
                        color="primary"
                        onChange={handleChange}
                    />
                </>
            </Stack>
        </>
    )
}

export default PaginationLeagues