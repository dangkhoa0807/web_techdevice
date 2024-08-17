import Grid from '@mui/material/Grid'

import Profile from '@/views/dashboard/Profile/page'

const Page = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Profile />
      </Grid>
    </Grid>
  )
}

export default Page
