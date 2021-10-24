import { useState } from 'react'

import CardListApp from './CardListApp/CardListApp'
import StarMatchApp from './StarMatchApp/StarMatchApp'

import AppSelector from './AppSelector'

const apps = {
    cardList: {
        title: 'GitHub Cards App',
        app: CardListApp,
    },
    starMatch: {
        title: 'Star Match Game',
        app: StarMatchApp
    }
}

const App = () => {
    const [selectedApp, setSelectedApp] = useState('cardList')
    const SelectedApp = apps[selectedApp].app

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr',
            gridTemplateAreas: `
                'menu content'
            `
        }}>
            <div style={{ gridArea: 'menu' }}>
                <AppSelector
                    apps={apps}
                    select={app => setSelectedApp(app)}>
                </AppSelector>
            </div>
            <div style={{ gridArea: 'content' }}>
                <SelectedApp></SelectedApp>
            </div>
        </div>
    )
}

export default App
