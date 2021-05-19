import { constants } from "../../_shared/constants.js"
import RoomSocketBuilder from "./util/roomSocket.js"

const socketBuilder = new RoomSocketBuilder({
    socketUrl: constants.socketUrl,
    namespace: constants.socketNamespaces.room
})

const socket = socketBuilder
    .setOnUserConnected((user) => console.log('user connected', user))
    .setOnUserDisconnected((user) => console.log('user disconnected', user))
    .setOnRoomUpdated((room) => console.log('room list!', room))
    .build()

const room = {
    id: '0001',
    topic: 'JS Expert Kabelo'
}

const user = {
    img: 'https://cdn4.iconfinder.com/data/icons/game-of-thrones-4/64/game_of_thrones_game_thrones_series_character_avatar_jon_snow-512.png',
    username: 'Allan Gilabel ' + Date.now()
}

socket.emit(constants.events.JOIN_ROOM, { user, room })