import { Route, Routes } from 'react-router-dom'
import { Home } from '@renderer/pages/Home'
import { Settings } from '@renderer/pages/Settings'
import { TopBar } from '@renderer/components/top-bar/TopBar'

function App(): React.JSX.Element {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  )
}

export default App
