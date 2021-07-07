export default function createGame(){
    const state = {

        players: {},
        fruits: {},
        screen: {
            width: 10,
            height: 10
        }
    }

    function addPlayer(command){
        const playerId = command.playerId
        const playerX = command.playerX
        const playerY = command.playerY

        state.players[playerId] = {
            x: playerX,
            y: playerY
        }
    }


    function removePlayer(){
        const playerId = command.playerId
        delete state.players[playerId]
    }

    function addFruit(command){
        const fruitId = command.fruitId
        const fruitX = command.fruitX
        const fruitY = command.fruitY

        state.fruits[fruitId] = {
            x: fruitX,
            y: fruitY
        }
    }

    function removeFruit(command){
        const fruitId = command.fruitId
        delete state.fruits[fruitId]
    }
    function movePlayer(command){
        console.log(`game.moving() ->  ${command.playerId} with ${command.keyPressed}`)

        const acceptMoves = {
            //Com o novo recurso do JS, ele aproveita o nome das funções que são os valores e atribui nas chaves(ArrowUp: function ArrowUp(player){ console.log() })
                //Aparentemente só funciona para funções =)
            ArrowUp(player){
                console.log('Moving player Up')
                if(player.y - 1 >= 0){
                    player.y -= 1
                }
            },
            ArrowRight(player){
                console.log('Moving player Right')
                if(player.x + 1 < state.screen.width){
                    player.x += 1
                }
            },
            ArrowDown(player){
                console.log('Moving player Down')
                if(player.y + 1 < state.screen.height){
                    player.y += 1
                }
            },
            ArrowLeft(player){
                console.log('Moving player left')
                if(player.x - 1 >= 0){
                    player.x -= 1
                }
            }
        }

        const keyPressed = command.keyPressed
        const playerId = command.playerId
        const player = state.players[playerId]
        const moveFunction = acceptMoves[keyPressed]

        if(player && moveFunction){
            moveFunction(player)
            checkForFruitColission(playerId)
        }
        return //TEMPORARIO
    }
    
    function checkForFruitColission(playerId){
        const player = state.players[playerId]
        for(const fruitId in state.fruits){
            const fruit = state.fruits[fruitId]
            if(player.x === fruit.x && player.y === fruit.y){
                removeFruit({ fruitId: fruitId })
                console.log('passou')
            }
        }
        
    }
    return{
        addPlayer,
        removePlayer,
        movePlayer,
        addFruit,
        removeFruit,
        state
    }
}