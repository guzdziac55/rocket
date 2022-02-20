import React from 'react'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'

interface ParginationProps {
    activePage: number
    count: number
    rowsPerPage: number
    totalPages: number
    setActivePage: (page: number) => void
}

const Pagination: React.FC<ParginationProps> = ({
    activePage,
    count,
    rowsPerPage,
    totalPages,
    setActivePage,
}) => {
    const pagesToShow = totalPages === 0 ? 1 : totalPages
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            mb={4}
        >
            <Button
                onClick={() => setActivePage(1)}
                disabled={activePage === 1}
                variant="outlined"
                startIcon={<SkipPreviousIcon />}
            >
                first
            </Button>
            <Button
                onClick={() => setActivePage(activePage - 1)}
                disabled={activePage === 1}
                variant="outlined"
                startIcon={<NavigateBeforeIcon />}
            />
            <p>
                Page {activePage} of {pagesToShow}
            </p>
            <Button
                onClick={() => setActivePage(activePage + 1)}
                disabled={activePage === totalPages}
                variant="outlined"
                endIcon={<NavigateNextIcon />}
            />
            <Button
                onClick={() => setActivePage(totalPages)}
                disabled={activePage === totalPages}
                variant="outlined"
                endIcon={<SkipNextIcon />}
            >
                last
            </Button>
        </Stack>
    )
}

export default Pagination
