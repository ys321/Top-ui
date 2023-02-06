import { Box, Stack, Typography, LinearProgress } from "@mui/material"

function PageLoader ({
    pageMessage
}) {
    return (
        <Box sx={{ height: '80vh', width: '100%' }}>
            <Stack 
                justifyContent={'center'}
                alignItems={'center'}
                sx={{ height: '100%', width: '100%' }}
                spacing={2}
            >
                {pageMessage 
                ?   (<Typography variant="h4">{pageMessage}</Typography>)
                :   (<Typography variant="h4">Loading....</Typography>)
                }
                
                <LinearProgress sx={{ width: '40%', height: '1.5%', borderRadius: '15px' }} />
            </Stack>
        </Box>
    )
}

export {
    PageLoader
}