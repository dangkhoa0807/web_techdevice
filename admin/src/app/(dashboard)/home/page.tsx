import Grid from '@mui/material/Grid'

import Home from '@/views/dashboard/Home/page'

export default function Page() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Home />
      </Grid>
    </Grid>
  )
}
