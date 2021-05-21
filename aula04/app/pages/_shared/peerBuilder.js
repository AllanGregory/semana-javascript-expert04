class PeerCustomModule extends globalThis.Peer {
    constructor({ config, onCall }) {
        super(config)

        this.onCall = onCall
    }

    call(...args) {
        const originalCallResult = super.call(...args)

        //Aqui acontece a magia, interceptamos o call e adicionamos
        //o comportamento do call para todos os objetos
        this.onCall(originalCallResult)

        return originalCallResult
    }
}

export default class PeerBuilder {
    constructor({ peerConfig }) {
        this.peerConfig = peerConfig
        this.onError = () => {}
        this.onConnectionOpened = () => {}
        this.OnCallError = () => {}
        this.setOnCallClose = () => {}
        this.setOnCallReceived = () => {}
        this.setOnStreamReceived = () => {}
    }

    setOnError(fn) {
        this.onError = fn
        
        return this
    }

    setOnConnectionOpened(fn) {
        this.onConnectionOpened = fn
        
        return this
    }

    setOnCallError(fn) {
        this.OnCallError = fn

        return this
    }

    setOnCallClose(fn) {
        this.OnCallClose = fn

        return this
    }

    setOnCallReceived(fn) {
        this.OnCallReceived = fn

        return this
    }

    setOnStreamReceived(fn) {
        this.OnStreamReceived = fn

        return this
    }

    _prepareCallEvent(call) {
        call.on('stream', (stream) => this.OnStreamReceived(call, stream))
        call.on('error', (stream) => this.OnCallError(call, error))
        call.on('close', () => this.OnCallClose(call))

        this.OnCallReceived(call)
    }

    build() {
        //O peer recebe uma lista de argumentos,
        //new Peer(id, config1, config2)
        //params = [], new Peer(...params)

        //const peer = new globalThis.Peer(...this.peerConfig)
        const peer = new globalThis.PeerCustomModule({
            config: [ ...this.peerConfig ],
            onCall: this._prepareCallEvent.bind(this)
        })

        peer.on('error', this.onError)
        peer.on('call', this._prepareCallEvent.bind(this))

        return new Promise((resolve) => peer.on('open', () => {
            this.onConnectionOpened(peer)
            return resolve(peer)
        }))
    }
}