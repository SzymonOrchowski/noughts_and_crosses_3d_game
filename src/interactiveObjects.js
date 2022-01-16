import * as THREE from 'three'

// Nought

export const createNought = () => {
    const geometryNought = new THREE.TorusGeometry(0.38, 0.1, 20, 80);
    const materialNought = new THREE.MeshLambertMaterial({color: 0xE1645B})
    const nought = new THREE.Mesh(geometryNought, materialNought)
    return nought
}

// Cross

export const createCross = () => {
    const crossGroup = new THREE.Group()
    const geometry1Cross = new THREE.BoxGeometry(0.18, 0.95, 0.1)
    const geometry2Cross = new THREE.BoxGeometry(0.385, 0.18, 0.1)
    const materialCross = new THREE.MeshLambertMaterial({color: 0x9FFFCB})
    const crossElement1 = new THREE.Mesh(geometry1Cross, materialCross)
    const crossElement2 = new THREE.Mesh(geometry2Cross, materialCross)
    crossElement2.position.x = -0.2825
    const crossElement3 = new THREE.Mesh(geometry2Cross, materialCross)
    crossElement3.position.x = 0.2825
    crossGroup.add(crossElement1)
    crossGroup.add(crossElement2)
    crossGroup.add(crossElement3)
    crossGroup.rotation.z = Math.PI / 4
    crossGroup.scale.x = 1.1
    crossGroup.scale.y = 1.1
    crossGroup.scale.z = 1.1
    return crossGroup
}

// Selector

export const createSelector = () => {
    const selectorGroup = new THREE.Group()
    const geometry1Selector = new THREE.BoxGeometry(0.9, 0.05, 0.1)
    const geometry2Selector = new THREE.BoxGeometry(0.05, 0.9, 0.1)
    const materialSelector = new THREE.MeshLambertMaterial({ color: 0xFED4E7})
    
    const selectorElement1 = new THREE.Mesh(geometry1Selector, materialSelector)
    selectorGroup.add(selectorElement1)
    selectorElement1.position.y = 0.43
    
    const selectorElement2 = new THREE.Mesh(geometry1Selector, materialSelector)
    selectorGroup.add(selectorElement2)
    selectorElement2.position.y = - 0.43
    
    const selectorElement3 = new THREE.Mesh(geometry2Selector, materialSelector)
    selectorGroup.add(selectorElement3)
    selectorElement3.position.x = - 0.43
    
    const selectorElement4 = new THREE.Mesh(geometry2Selector, materialSelector)
    selectorGroup.add(selectorElement4)
    selectorElement4.position.x = 0.43
    selectorGroup.position.x = 100
    return selectorGroup
}

// Grid

export const createGrid = () => {
    const gridGroup = new THREE.Group();
    const geometry = new THREE.BoxGeometry(0.1, 3.2, 0.2)
    const geometry2 = new THREE.BoxGeometry(1, 0.1, 0.2)
    const material = new THREE.MeshLambertMaterial({ color: 0x474350 })
    const gridElementY1 = new THREE.Mesh(geometry, material)
    const gridElementY2 = new THREE.Mesh(geometry, material)
    gridGroup.add(gridElementY1)
    gridElementY1.position.x = -0.55
    gridGroup.add(gridElementY2)
    gridElementY2.position.x = 0.55
    const gridElementX1 = new THREE.Mesh(geometry2, material)
    const gridElementX2 = new THREE.Mesh(geometry2, material)
    const gridElementX3 = new THREE.Mesh(geometry2, material)
    const gridElementX4 = new THREE.Mesh(geometry2, material)
    const gridElementX5 = new THREE.Mesh(geometry2, material)
    const gridElementX6 = new THREE.Mesh(geometry2, material)
    gridGroup.add(gridElementX1)
    gridElementX1.position.x = -1.1
    gridElementX1.position.y = 0.55
    gridGroup.add(gridElementX2)
    gridElementX2.position.x = 0
    gridElementX2.position.y = 0.55
    gridGroup.add(gridElementX3)
    gridElementX3.position.x = 1.1
    gridElementX3.position.y = 0.55
    gridGroup.add(gridElementX4)
    gridElementX4.position.x = -1.1
    gridElementX4.position.y = -0.55
    gridGroup.add(gridElementX5)
    gridElementX5.position.x = 0
    gridElementX5.position.y = -0.55
    gridGroup.add(gridElementX6)
    gridElementX6.position.x = 1.1
    gridElementX6.position.y = -0.55
    return gridGroup
}

// Grid Collision Box

export const createGridCollisionBox = (x, y) => {
    const materialTemp = new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.0 })
    const geometryForSelector = new THREE.BoxGeometry(1, 1, 0.2)
    const fieldCollisionBox = new THREE.Mesh(geometryForSelector, materialTemp)
    fieldCollisionBox.position.x = x
    fieldCollisionBox.position.y = y
    return fieldCollisionBox
}