import React from 'react'

export default function Layout(props) {
    return (
        <React.Fragment>
            <header>
                <nav>
                   
                </nav>
            </header>
            <main>
                {props.children}
            </main>
            <footer>

            </footer>
        </React.Fragment>
    )
}
