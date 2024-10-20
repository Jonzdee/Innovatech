// React import removed as it's not used in this file
import HeroSerction from './components/HeroSection';
import FeactureSection from './components/FeactureSection';
import Bento from './components/Bento';
import Stats from './components/Stats';
import Trust from './components/Trust';
import OurTeam from './components/OurTeam';
import Cta from './components/Cta'; // Add this import for the Cta component

const App = () => {
  return (
    <div>
      <HeroSerction />
      <Cta />
      <FeactureSection />
      <Bento/>
      <Stats />
      <Trust />
      <OurTeam />
      
      {/* Add your other components here */}
    </div>
  )
}

export default App