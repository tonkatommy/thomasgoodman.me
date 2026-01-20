'use client'

import { Box, Typography, Button } from '@mui/material'
import Link from 'next/link'
import { Home as HomeIcon } from '@mui/icons-material'

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '4rem', md: '6rem' }, fontWeight: 700, mb: 2 }}>
        404
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 2 }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500 }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </Typography>
      <Button
        LinkComponent={Link}
        href="/"
        variant="contained"
        size="large"
        startIcon={<HomeIcon />}
      >
        Go Home
      </Button>
    </Box>
  )
}
