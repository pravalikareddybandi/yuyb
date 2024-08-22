import { Box, Grid, Stack, Typography } from '@mui/material';

const Result =()=>{
    return (
<Stack sx={{px:3,py:2}} spacing={2}>
    <Box>
        <Grid conatiner>
            <Grid item md={6} xs={12}>
                <Typography>
                Found 100 more results based on your search
                </Typography>
                <Grid item md={6} xs={12}>
                    
                </Grid>

            </Grid>
        </Grid>
    </Box>
</Stack>   
 )
}
export default Result