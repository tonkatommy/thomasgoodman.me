'use client'

import { Box, Typography, Card, CardContent, Grid, Link, Chip } from '@mui/material'
import { Verified as VerifiedIcon } from '@mui/icons-material'
import { formatDate } from '@/lib/utils'

interface Certification {
  id: string
  name: string
  issuer: string
  issueDate: Date
  expiryDate?: Date | null
  credentialId?: string | null
  credentialUrl?: string | null
  description?: string | null
}

interface CertificationsSectionProps {
  certifications: Certification[]
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  if (certifications.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
        No certifications yet.
      </Typography>
    )
  }

  const isExpired = (expiryDate: Date | null | undefined) => {
    if (!expiryDate) return false
    return new Date(expiryDate) < new Date()
  }

  const isExpiringSoon = (expiryDate: Date | null | undefined) => {
    if (!expiryDate) return false
    const daysUntilExpiry = Math.floor((new Date(expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    return daysUntilExpiry > 0 && daysUntilExpiry <= 90
  }

  return (
    <Grid container spacing={3}>
      {certifications.map((cert) => {
        const expired = isExpired(cert.expiryDate)
        const expiringSoon = isExpiringSoon(cert.expiryDate)

        return (
          <Grid item xs={12} md={6} key={cert.id}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'start', gap: 2, mb: 2 }}>
                  <VerifiedIcon color={expired ? 'error' : 'primary'} sx={{ fontSize: 40 }} />
                  <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                        {cert.name}
                      </Typography>
                      {expired && <Chip label="Expired" size="small" color="error" />}
                      {!expired && expiringSoon && <Chip label="Expiring Soon" size="small" color="warning" />}
                    </Box>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {cert.issuer}
                    </Typography>
                    {cert.credentialId && (
                      <Typography variant="body2" color="text.secondary">
                        Credential ID: {cert.credentialId}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Issued: {formatDate(cert.issueDate, { month: 'long', year: 'numeric' })}
                </Typography>
                {cert.expiryDate && (
                  <Typography
                    variant="body2"
                    color={expired ? 'error.main' : expiringSoon ? 'warning.main' : 'text.secondary'}
                    sx={{ mb: 1 }}
                  >
                    {expired ? 'Expired' : 'Expires'}: {formatDate(cert.expiryDate, { month: 'long', year: 'numeric' })}
                  </Typography>
                )}
                {cert.credentialUrl && (
                  <Link href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" sx={{ display: 'inline-block', mt: 1 }}>
                    Verify Credential →
                  </Link>
                )}
                {cert.description && (
                  <Typography variant="body2" sx={{ mt: 2, whiteSpace: 'pre-line' }}>
                    {cert.description}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}
