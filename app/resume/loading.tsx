import { Container, Skeleton, Box, Stack } from '@mui/material'

export default function ResumeLoading() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Skeleton variant="text" width={200} height={48} sx={{ mb: 3 }} />
      <Stack spacing={3}>
        <Box>
          <Skeleton variant="text" width={150} height={32} />
          <Skeleton variant="rectangular" height={120} sx={{ mt: 1 }} />
        </Box>
        <Box>
          <Skeleton variant="text" width={150} height={32} />
          <Skeleton variant="rectangular" height={200} sx={{ mt: 1 }} />
        </Box>
        <Box>
          <Skeleton variant="text" width={150} height={32} />
          <Skeleton variant="rectangular" height={160} sx={{ mt: 1 }} />
        </Box>
      </Stack>
    </Container>
  )
}
