import Grid from '@mui/material/Grid'

import ListOrderComplete from '@/views/dashboard/order/complete/ListOrderComplete'

const Page = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ListOrderComplete />
      </Grid>
    </Grid>
  )
}

export default Page
