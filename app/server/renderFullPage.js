export default function renderFullPage(head, body, preloadedState) {
    return `
        <!doctype html>
        <html>
        <head>
            <title>Your SSR React Router Node App initialised with data!</title>
            ${head}
        </head>
        <body>
            <div id="root">${body}</div>
            <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script src="/bundle.js"></script>
        </body>
        </html>
    `
}
