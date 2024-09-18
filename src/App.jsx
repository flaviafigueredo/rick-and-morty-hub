import './App.css'

import 'antd/dist/reset.css'
import { Layout } from "antd"

import { Header } from './components/header/Header'

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
    </Layout>
  )
}

export default App
