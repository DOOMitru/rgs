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
        <>
            <AppSelector
                apps={apps}
                select={app => setSelectedApp(app)}>
            </AppSelector>
            <SelectedApp></SelectedApp>
        </>
    )
}

export default App
