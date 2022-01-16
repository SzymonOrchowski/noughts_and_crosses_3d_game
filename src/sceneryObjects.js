import * as THREE from 'three'

// Arena

// // Stands

export const createArena = () => {

    const stands = new THREE.Group();
    const standsBlockGeometry = new THREE.BufferGeometry();
    
    const cNa = (Math.tan(22.5 * Math.PI / 180) * 5) 
    const cNb = Math.sqrt(25+(Math.pow(cNa)))
    const cNc = Math.sqrt(Math.pow(cNa) + 16)
    
    const vertices = new Float32Array( [
        // 1
        (-2-cNa), 0.0,  0.0,
         (2+cNa), 0.0,  0.0,
         (2+cNa), 4.0,  0.0,
        // 2
        (2+cNa), 4.0,  0.0,
        (-2.0-cNa), 4.0,  0.0,
        (-2.0-cNa), 0.0,  0.0,
        // 3
        (2+cNa), 0.0,  0.0, 
        2, 0, 5,
        -2, 0, 5, 
        // 4
        (2+cNa), 0.0,  0.0, 
        -2, 0, 5, 
        (-2-cNa), 0.0,  0.0, 
        // 5
        (2+cNa), 0.0,  0.0, 
        (2+cNa), 4.0,  0.0, 
        2, 0, 5, 
        // 6
        (-2-cNa), 0.0,  0.0,  
        -2, 0, 5, 
        (-2.0-cNa), 4.0,  0.0, 
        // 7
        (2+cNa), 4.0,  0.0,  
        (-2.0-cNa), 4.0,  0.0, 
        2, 0, 5, 
        // 8
        (-2.0-cNa), 4.0,  0.0,
         -2, 0, 5,
         2, 0, 5,   
    ] );
    
    const normals = new Float32Array( [
        // 1
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        // 2
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        // 3
        0, 0, 1,
        0, 0, 1,
        0, 0, 1, 
        // 4
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        // 5
        0, 0, 1,
        0, 0, 1,
        0, 0, 1, 
        // 6
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        // 7
        0, 0, 1,
        0, 0, 1,
        0, 0, 1, 
        // 8
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
    ] );
    
    const colors = new Float32Array( [
        // 1
        1, 1, 1,
        1, 1, 1,
        1, 1, 1,
        // 2
        1, 1, 1,
        1, 1, 1,
        1, 1, 1,
        // 3
        1, 1, 1,
        1, 1, 1,
        1, 1, 1, 
        // 4
        1, 1, 1,
        1, 1, 1,
        1, 1, 1,
        // 5
        1, 1, 1,
        1, 1, 1,
        1, 1, 1, 
        // 6
        1, 1, 1,
        1, 1, 1,
        1, 1, 1,
        // 7
        1, 1, 1,
        1, 1, 1,
        1, 1, 1,
        // 8
        1, 1, 1,
        1, 1, 1,
        1, 1, 1,
    ] );
    
    standsBlockGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    standsBlockGeometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
    standsBlockGeometry.setAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
    
    const standsMaterial = new THREE.MeshPhongMaterial({ color: 0xC9852C, side: THREE.DoubleSide})
    const standsMaterial2 = new THREE.MeshPhongMaterial({ color: 0x6A6D08, side: THREE.DoubleSide})
    standsMaterial.wireframe = false
    const standsElement1 = new THREE.Mesh(standsBlockGeometry, standsMaterial)
    standsElement1.position.x = - 5 - (2 + 2*Math.sqrt(2))
    standsElement1.position.z = 0
    standsElement1.rotation.y = 90 * Math.PI/180
    stands.add(standsElement1)
    const standsElement2 = new THREE.Mesh(standsBlockGeometry, standsMaterial2)
    standsElement2.position.x = (- 5 - (2 + 2*Math.sqrt(2))) * (Math.sqrt(2)/2)
    standsElement2.position.z = (- 5 - (2 + 2*Math.sqrt(2))) * (Math.sqrt(2)/2)
    standsElement2.rotation.y = 45 * Math.PI/180
    stands.add(standsElement2)
    const standsElement3 = new THREE.Mesh(standsBlockGeometry, standsMaterial)
    standsElement3.position.x = 0
    standsElement3.position.z = - 5 - (2 + 2*Math.sqrt(2))
    standsElement3.rotation.y = 0 * Math.PI/180
    stands.add(standsElement3)
    const standsElement4 = new THREE.Mesh(standsBlockGeometry, standsMaterial2)
    standsElement4.position.x = (5 + (2 + 2*Math.sqrt(2))) * (Math.sqrt(2)/2)
    standsElement4.position.z = (- 5 - (2 + 2*Math.sqrt(2))) * (Math.sqrt(2)/2)
    standsElement4.rotation.y = -45 * Math.PI/180
    stands.add(standsElement4)
    const standsElement5 = new THREE.Mesh(standsBlockGeometry, standsMaterial)
    standsElement5.position.x = 5 + (2 + 2*Math.sqrt(2))
    standsElement5.position.z = 0
    standsElement5.rotation.y = 270 * Math.PI/180
    stands.add(standsElement5)
    const standsElement6 = new THREE.Mesh(standsBlockGeometry, standsMaterial2)
    standsElement6.position.x = (5 + (2 + 2*Math.sqrt(2))) * (Math.sqrt(2)/2)
    standsElement6.position.z = (5 + (2 + 2*Math.sqrt(2))) * (Math.sqrt(2)/2)
    standsElement6.rotation.y = -135 * Math.PI/180
    stands.add(standsElement6)
    const standsElement7 = new THREE.Mesh(standsBlockGeometry, standsMaterial)
    standsElement7.position.x = 0
    standsElement7.position.z = 5 + (2 + 2*Math.sqrt(2))
    standsElement7.rotation.y = 180 * Math.PI/180
    stands.add(standsElement7)
    const standsElement8 = new THREE.Mesh(standsBlockGeometry, standsMaterial2)
    standsElement8.position.x = (- 5 - (2 + 2*Math.sqrt(2))) * (Math.sqrt(2)/2)
    standsElement8.position.z = (5 + (2 + 2*Math.sqrt(2))) * (Math.sqrt(2)/2)
    standsElement8.rotation.y = 135 * Math.PI/180
    stands.add(standsElement8)
    stands.scale.x = 0.75
    stands.scale.y = 0.75
    stands.scale.z = 0.75
    stands.position.y = -2
    return stands
}


//////////////////////////

export const createParticlesArena = () => {
    const particleArenaGroup1 = new THREE.Group()
    const particleArenaGroup2 = new THREE.Group()
    const particleArenaGroupAll = new THREE.Group()
    let particleCount = 15000;
    const particlesData = [];
    const r = 800;
    const segments = particleCount * particleCount;
    
    
    const pMaterial = new THREE.PointsMaterial( {
        color: 0xC9852C,
        size: 3,
        blending: THREE.AdditiveBlending,
        transparent: true,
        sizeAttenuation: false
    } );

    const pMaterial2 = new THREE.PointsMaterial( {
        color: 0x6A6D08,
        size: 3,
        blending: THREE.AdditiveBlending,
        transparent: true,
        sizeAttenuation: false
    } );
    
    let particles = new THREE.BufferGeometry();
    let particlePositions = new Float32Array( particleCount * 3 );
    
    for ( let i = 0; i < particleCount; i ++ ) {
        const x = Math.random() * 5;
        const y = Math.random() * 4/5 * x;
        const z = ((Math.random() * Math.tan(22.5 * Math.PI / 180) * x) + (Math.random() * 2)) * (Math.round(Math.random()) * 2 - 1);
    
        particlePositions[ i * 3 ] = x;
        particlePositions[ i * 3 + 1 ] = y;
        particlePositions[ i * 3 + 2 ] = z;
    
        particlesData.push( {
            velocity: new THREE.Vector3( - 1 + Math.random() * 2, - 1 + Math.random() * 2, - 1 + Math.random() * 2 ),
            numConnections: 0
        } );
    
    }
    
    particles.setDrawRange( 0, particleCount );
    particles.setAttribute( 'position', new THREE.BufferAttribute( particlePositions, 3 ).setUsage( THREE.DynamicDrawUsage ) );
    
    const pointCloud = new THREE.Points( particles, pMaterial );
    pointCloud.position.x = 5
    particleArenaGroup1.add(pointCloud)

    const pointCloud2 = new THREE.Points( particles, pMaterial );
    pointCloud2.position.x = -5
    pointCloud2.rotation.y = 180 * Math.PI / 180
    particleArenaGroup1.add(pointCloud2)

    const pointCloud3 = new THREE.Points( particles, pMaterial );
    pointCloud3.rotation.y = 90 * Math.PI / 180
    pointCloud3.position.z = -5
    particleArenaGroup1.add(pointCloud3)

    const pointCloud4 = new THREE.Points( particles, pMaterial );
    pointCloud4.rotation.y = -90 * Math.PI / 180
    pointCloud4.position.z = 5
    particleArenaGroup1.add(pointCloud4)

    particleArenaGroupAll.add(particleArenaGroup1)

    const pointCloud5 = new THREE.Points( particles, pMaterial2 );
    pointCloud5.position.x = 5
    particleArenaGroup2.add(pointCloud5)

    const pointCloud6 = new THREE.Points( particles, pMaterial2 );
    pointCloud6.position.x = -5
    pointCloud6.rotation.y = 180 * Math.PI / 180
    particleArenaGroup2.add(pointCloud6)

    const pointCloud7 = new THREE.Points( particles, pMaterial2 );
    pointCloud7.rotation.y = 90 * Math.PI / 180
    pointCloud7.position.z = -5
    particleArenaGroup2.add(pointCloud7)

    const pointCloud8 = new THREE.Points( particles, pMaterial2 );
    pointCloud8.rotation.y = -90 * Math.PI / 180
    pointCloud8.position.z = 5
    particleArenaGroup2.add(pointCloud8)

    particleArenaGroup2.rotation.y = 45 * Math.PI / 180
    
    particleArenaGroupAll.add(particleArenaGroup2)
    particleArenaGroupAll.scale.x = 0.75
    particleArenaGroupAll.scale.y = 0.75
    particleArenaGroupAll.scale.z = 0.75
    particleArenaGroupAll.position.y = -2

    return particleArenaGroupAll

}