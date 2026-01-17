import Link from 'next/link'
import { Box, Container, Typography, Link as MuiLink, Stack } from '@mui/material'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'

const socialLinks = [
  { icon: <LinkedIn />, href: 'https://linkedin.com/in/tgnz', label: 'LinkedIn' },
  { icon: <GitHub />, href: 'https://github.com/tonkatommy', label: 'GitHub' },
  { icon: <Email />, href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 'auto',
        borderTop: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Thomas Goodman. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            {socialLinks.map((link) => (
              <MuiLink
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                color="inherit"
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
              >
                {link.icon}
                <Typography variant="body2">{link.label}</Typography>
              </MuiLink>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
