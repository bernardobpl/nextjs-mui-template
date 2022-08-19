import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Home = () => {
  return (
    <Box display="flex" height="100vh" width="100vw">
      <Box
        display="flex"
        flex={1}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="body1">NextJS | Typescript | Material UI</Typography>
      </Box>
    </Box>
  )
}

export default Home
