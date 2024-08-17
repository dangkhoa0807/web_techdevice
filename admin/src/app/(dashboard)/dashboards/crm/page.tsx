// MUI Imports
import Grid from '@mui/material/Grid'

import LineChart from '@/views/charts/LineChart/page'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const DashboardCRM = () => {
  const serverMode = getServerMode()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <LineChart serverMode={serverMode} />
      </Grid>
    </Grid>
  )
}

export default DashboardCRM
