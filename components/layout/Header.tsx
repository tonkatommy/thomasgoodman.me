'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from '@/components/providers/ThemeProvider'
import { AppBar, Toolbar, Typography, IconButton, Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material'
import { Menu as MenuIcon, LightMode, DarkMode, Brightness4 } from '@mui/icons-material'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Resume', href: '/resume' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { mode, setMode, resolvedMode } = useTheme()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const toggleTheme = () => {
    if (mode === 'light') {
      setMode('dark')
    } else if (mode === 'dark') {
      setMode('system')
    } else {
      setMode('light')
    }
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        thomasgoodman.me
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Link href={item.href} style={{ width: '100%', textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary={item.label} sx={{ textAlign: 'center' }} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar position="static" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 600 }}
          >
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              thomasgoodman.me
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
            {navItems.map((item) => (
              <Button key={item.label} LinkComponent={Link} href={item.href} color="inherit">
                {item.label}
              </Button>
            ))}
          </Box>
          <IconButton onClick={toggleTheme} color="inherit" sx={{ ml: 1 }}>
            {resolvedMode === 'dark' ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}
