import { Route, Routes } from 'react-router-dom'
import { Home } from '@renderer/pages/Home'
import { TopBar } from '@renderer/components/top-bar/TopBar'

function App(): React.JSX.Element {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
