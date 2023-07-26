import Card from './components/Card'
import Navbar from './components/Navbar'
import './styles.css'
import data from './data'

function App() {
	const cardData = data.map(data => {
		return <Card key={data.title} data={data} />
	})
	return (
		<div className='App'>
			<Navbar />
			<section className='section'>{cardData}</section>
		</div>
	)
}

export default App
