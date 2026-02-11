import { Container, Skeleton, Box, Grid } from '@mui/material'

export default function BlogLoading() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Skeleton variant="text" width={160} height={48} sx={{ mb: 2 }} />
      <Skeleton variant="rectangular" height={48} sx={{ mb: 3 }} />
      <Grid container spacing={3}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box>
              <Skeleton variant="rectangular" height={180} />
              <Skeleton variant="text" width="90%" sx={{ mt: 1 }} />
              <Skeleton variant="text" width="70%" />
              <Skeleton variant="text" width="40%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
