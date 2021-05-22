export const constants = {
    socketUrl: 'http://localhost:3000',
    // socketUrl: 'https://gila-socket-server.herokuapp.com',
    socketNamespaces: {
        room: 'room',
        lobby: 'lobby'
    },
    peerConfig: Object.values({
        id: undefined,
        config: {
            // host: 'gila-peerjs-server.herokuapp.com',
            // secure: true,
            // path: '/'
            port: 9000,
            host: 'localhost',
            path: '/'
        }
    }),
    pages: {
        lobby: '/pages/lobby',
        login: '/pages/login'
    },
    events: {
        USER_CONNECTED: 'userConnection',
        USER_DISCONNECTED: 'userDisconnection',
        JOIN_ROOM: 'joinRoom',
        LOBBY_UPDATED: 'lobbyUpdated',
        UPGRADE_USER_PERMISSION: 'upgradeUserPermission',
        SPEAK_REQUEST: 'speakRequest',
        SPEAK_ANSWER: 'speakAnswer'
    },
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    firebaseConfig : {
        apiKey: "AIzaSyASJlCyjDXFwple0qroBP3iuM4ned2DMgA",
        authDomain: "semana-js-expert-43f73.firebaseapp.com",
        projectId: "semana-js-expert-43f73",
        storageBucket: "semana-js-expert-43f73.appspot.com",
        messagingSenderId: "716912433688",
        appId: "1:716912433688:web:fb49e270a9b523742e416d",
        measurementId: "G-HBW1KPBF3J"
    },
    storageKey: 'jsexpertstorage:user'
}