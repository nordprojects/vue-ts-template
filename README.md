# {Projectname}

## Development

Use VS Code for development.

- Install the 'Vetur' plugin for vue component file support.
- Install the 'EditorConfig for VS Code' for correct formatting.
- `npm install`
- `npm run dev`
- Go to http://localhost:8080

## Firebase

To use with Firebase Realtime Database, add your Firebase project config
to the `initializeApp` call in `src/firebaseApp.ts`.

## Debugging in VS Code

- Install the 'Debugger for Chrome' plugin.
- Ensure the dev server is running at port 8080.
- Type `debugger;` in the code where you want to break.
- In the debugger panel, start the `vuejs: chrome` configuration
