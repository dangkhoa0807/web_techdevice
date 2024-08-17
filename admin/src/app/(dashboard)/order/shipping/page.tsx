import Grid from '@mui/material/Grid'

import ListOrderShipping from '@/views/dashboard/order/shipping/ListOrderShipping'

const Page = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ListOrderShipping />
      </Grid>
    </Grid>
  )
}

export default Page
