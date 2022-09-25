import { useState } from "react";
import { Pagination, Typography } from "@mui/material";
import Stack from "@mui/material/Stack"
import Teams from "../pages/Teams"
import SearchBar from '../components/SearchBar/SearchBar';
import filterData from "../usefulFunctions/filterData";


function PaginationTeams({ teams }) {
    const [query, setQuery] = useState("")
    const [page, setPage] = useState(1)
    const [contentPerPage] = useState(18)
    const handleChange = (event, value) => {
        setPage(value)
    }

    const updateQuery = (newQuery) => {
        setQuery(newQuery)
    }
    const lastIndex = page * contentPerPage
    const firstIndex = lastIndex - contentPerPage
    const dataFiltered = filterData(query, teams)
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
                    Команда с таким названием отсутствует
                </Typography>)
            }
                <>
                    <Teams teamsPagination={currentContent} />
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

export default PaginationTeams