import Grid from '@mui/material/Grid'

import AddProduct from '@/views/dashboard/AddProduct/page'

const Page = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <AddProduct />
      </Grid>
    </Grid>
  )
}

export default Page
