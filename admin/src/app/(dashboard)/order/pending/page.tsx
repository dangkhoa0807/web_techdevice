import Grid from '@mui/material/Grid'

import ListOrderPending from '@/views/dashboard/order/pending/ListOrderPending'

const Page = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ListOrderPending />
      </Grid>
    </Grid>
  )
}

export default Page
