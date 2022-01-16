import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Group, Vector3 } from 'three'
import { createNought, createCross, createSelector, createGrid, createGridCollisionBox } from './interactiveObjects'
import { createArena, createParticlesArena } from './sceneryObjects'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//AxesHelper

// const axesHelper = new THREE.AxesHelper()
// scene.add(axesHelper)

// Arena

// const arena = createArena();
// scene.add(arena)

// Particles Arena

const particlesArena = createParticlesArena();
scene.add( particlesArena );

// Grid

const grid = createGrid()
scene.add(grid)

//Grid Collision objects

const field1_collisionBox = createGridCollisionBox(-1.1, 1.1)
const field2_collisionBox = createGridCollisionBox(0, 1.1)
const field3_collisionBox = createGridCollisionBox(1.1, 1.1)
const field4_collisionBox = createGridCollisionBox(-1.1, 0)
const field5_collisionBox = createGridCollisionBox(0, 0)
const field6_collisionBox = createGridCollisionBox(1.1, 0)
const field7_collisionBox = createGridCollisionBox(-1.1, -1.1)
const field8_collisionBox = createGridCollisionBox(0, -1.1)
const field9_collisionBox = createGridCollisionBox(1.1, -1.1)

field1_collisionBox.name = 'field1_collisionBox'
field2_collisionBox.name = 'field2_collisionBox'
field3_collisionBox.name = 'field3_collisionBox'
field4_collisionBox.name = 'field4_collisionBox'
field5_collisionBox.name = 'field5_collisionBox'
field6_collisionBox.name = 'field6_collisionBox'
field7_collisionBox.name = 'field7_collisionBox'
field8_collisionBox.name = 'field8_collisionBox'
field9_collisionBox.name = 'field9_collisionBox'


scene.add(field1_collisionBox)
scene.add(field2_collisionBox)
scene.add(field3_collisionBox)
scene.add(field4_collisionBox)
scene.add(field5_collisionBox)
scene.add(field6_collisionBox)
scene.add(field7_collisionBox)
scene.add(field8_collisionBox)
scene.add(field9_collisionBox)

const objectsForRaycasterTest = [
    field1_collisionBox,
    field2_collisionBox,
    field3_collisionBox,
    field4_collisionBox,
    field5_collisionBox,
    field6_collisionBox,
    field7_collisionBox,
    field8_collisionBox,
    field9_collisionBox,
]

let selectedField;

// Selector

const selector = createSelector();
scene.add(selector)

// // Noughts

const nought1 = createNought()
const nought2 = createNought()
const nought3 = createNought()
const nought4 = createNought()
const nought5 = createNought()

const noughtsArray = [nought1, nought2, nought3, nought4, nought5]

// Crosses

const cross1 = createCross()
const cross2 = createCross()
const cross3 = createCross()
const cross4 = createCross()
const cross5 = createCross()

const crossesArray = [cross1, cross2, cross3, cross4, cross5]

// Lights

const pointLight1 = new THREE.PointLight(0xffffff, 0.6, 1)
scene.add(pointLight1)
pointLight1.position.z = 3

const pointLight2 = new THREE.PointLight(0xffffff, 0.3, 1)
scene.add(pointLight2)
pointLight2.position.z = -5
pointLight2.position.y = 3

const light = new THREE.HemisphereLight( 0xffffff, 0x000000, 0.6 ); 
scene.add( light );

// Game rules

const winsArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]

const player1fields = []
const player2fields = []

const checkWins = (playerFieldsArray) => {
    return winsArray.some(winArray => {
        if (playerFieldsArray.includes(winArray[0]) && playerFieldsArray.includes(winArray[1]) && playerFieldsArray.includes(winArray[2])) return true
        return false
    })
}

const resetToInit = () => {
    scene.remove(nought1);
    scene.remove(nought2);
    scene.remove(nought3);
    scene.remove(nought4);
    scene.remove(nought5);
    scene.remove(cross1)
    scene.remove(cross2)
    scene.remove(cross3)
    scene.remove(cross4)
    scene.remove(cross5)
    crossesArray.length = 0
    crossesArray.push(cross1)
    crossesArray.push(cross2)
    crossesArray.push(cross3)
    crossesArray.push(cross4)
    crossesArray.push(cross5)
    noughtsArray.length = 0
    noughtsArray.push(nought1)
    noughtsArray.push(nought2)
    noughtsArray.push(nought3)
    noughtsArray.push(nought4)
    noughtsArray.push(nought5)
    player1fields.length = 0
    player2fields.length = 0
    objectsForRaycasterTest.length = 0
    objectsForRaycasterTest.push(field1_collisionBox)
    objectsForRaycasterTest.push(field2_collisionBox)
    objectsForRaycasterTest.push(field3_collisionBox)
    objectsForRaycasterTest.push(field4_collisionBox)
    objectsForRaycasterTest.push(field5_collisionBox)
    objectsForRaycasterTest.push(field6_collisionBox)
    objectsForRaycasterTest.push(field7_collisionBox)
    objectsForRaycasterTest.push(field8_collisionBox)
    objectsForRaycasterTest.push(field9_collisionBox)
}

// Sizes

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Camera

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// HUD

const nextRoundButtonGeometry = new THREE.BoxGeometry(1, 1, 1)
const nextRoundButtonMaterial = new THREE.MeshLambertMaterial({color: 0xE1645B})
const nextRoundButton = new THREE.Mesh(nextRoundButtonGeometry, nextRoundButtonMaterial)
nextRoundButton.position.z = 2.5
// scene.add(nextRoundButton)

// Controls

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true;
const hudControls = new OrbitControls(nextRoundButton, canvas)
controls.enableDamping = false;

// Renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)

// Raycaster

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('mousemove', (event) => {
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
})

// Player figure spawn function

let currentPlayer = 1;
const spawnPlayerFigure = () => {
    if (currentPlayer === 1) {
        crossesArray[0].position.x = selector.position.x
        crossesArray[0].position.y = selector.position.y
        crossesArray[0].position.z = selector.position.z
        scene.add(crossesArray[0])
        crossesArray.shift();
        currentPlayer = 0;
    } else {
        noughtsArray[0].position.x = selector.position.x
        noughtsArray[0].position.y = selector.position.y
        noughtsArray[0].position.z = selector.position.z
        scene.add(noughtsArray[0])
        noughtsArray.shift();
        currentPlayer = 1;        
    }
}

// Double click event

const doubleClick = new THREE.Vector2();
window.addEventListener('dblclick', (event) => {
    event.preventDefault();
    doubleClick.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	doubleClick.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    spawnPlayerFigure(currentPlayer)
    let availableFields = objectsForRaycasterTest.map((obj) => {return obj.name})
    let indexToDelete = availableFields.indexOf(selectedField)
    objectsForRaycasterTest.splice(indexToDelete, 1);
    if (currentPlayer === 0) {
        player1fields.push(parseInt(selectedField.slice(5), 10))
        if (checkWins(player1fields)) {
            console.log('Player 1 wins')
            resetToInit()
        }
    } else {
        player2fields.push(parseInt(selectedField.slice(5), 10)) 
        if (checkWins(player2fields)) {
            console.log('Player 2 wins')
            resetToInit()
        }
    }
    if (objectsForRaycasterTest.length === 0) {
        console.log('It\'s a draw!')
        resetToInit()
    }
})

//Animation

function ticks() {
    requestAnimationFrame(ticks)
    
    // Selector
    
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(objectsForRaycasterTest)

    selector.position.x = 1000;

    for(const intersect of intersects) {
        selector.position.x = intersect.object.position.x
        selector.position.y = intersect.object.position.y
        selectedField = intersect.object.name
    }
    
    // HUD placements
    let multiplier = 3
    console.log(controls.target.distanceTo(controls.object.position))
    controls.target.distanceTo(controls.object.position) >= 3 ? multiplier = 3 : multiplier = 4
    nextRoundButton.scale.x = 0.5 * (Math.pow((controls.target.distanceTo(controls.object.position) / multiplier), 2))
    nextRoundButton.scale.y = 0.15 * (Math.pow((controls.target.distanceTo(controls.object.position) / multiplier), 2))
    nextRoundButton.scale.z = 0.1 * (Math.pow((controls.target.distanceTo(controls.object.position) / multiplier), 2))

    //

    nought1.rotation.x += 0.02
    nought2.rotation.x += 0.04
    nought3.rotation.x += 0.06
    nought4.rotation.x += 0.08
    nought5.rotation.x += 0.1

    cross1.rotation.y -= 0.02
    cross2.rotation.y -= 0.04
    cross3.rotation.y -= 0.06
    cross4.rotation.y -= 0.08
    cross5.rotation.y -= 0.1
    
    // Update controls

    controls.update()
    hudControls.update()

    //

	renderer.render( scene, camera );

}

ticks()

