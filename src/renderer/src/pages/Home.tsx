import { Box, Button, Paper, Typography } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine'

export const Home = (): React.JSX.Element => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setReady(true)
    })
  }, [])

  //TODO. Move options to file.
  const particlesOptions = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: '#222222' } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'push' },
          onClick: { enable: true, mode: 'push' }
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { quantity: 4 }
        }
      },
      particles: {
        number: { value: 240, density: { enable: true, area: 300 } },
        color: { value: '#00FFFF' },
        links: {
          enable: true,
          distance: 120,
          color: '#00FFFF',
          opacity: 1,
          width: 1,
          triangles: { enable: true, color: '#00FFFF', opacity: 0.1 }
        },
        move: {
          enable: true,
          speed: 2,
          direction: MoveDirection.none,
          outModes: { default: OutMode.bounce }
        },
        size: { value: { min: 1, max: 3 } },
        opacity: { value: 0.6 }
      },
      detectRetina: true
    }),
    []
  )

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%'
      }}
    >
      <Typography variant="h4" gutterBottom color="text.primary">
        CRSolver
      </Typography>
      {ready && <Particles id="tsparticles" options={particlesOptions} />}
      <Paper
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
        elevation={3}
      >
        <Button variant="contained" sx={{ m: 1, flex: 1 }}>
          New Simulation
        </Button>
        <Button variant="contained" sx={{ m: 1, flex: 1 }}>
          Load Simulation
        </Button>
        <Button variant="contained" sx={{ m: 1, flex: 1 }}>
          Settings
        </Button>
        <Button variant="contained" sx={{ m: 1, flex: 1 }}>
          Exit
        </Button>
      </Paper>
    </Box>
  )
}
