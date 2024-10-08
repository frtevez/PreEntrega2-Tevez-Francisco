const PRODUCTS = [
    {
        id: '1', 
        name:'Nord Stage 4', 
        price:5699, 
        img:'https://d1aeri3ty3izns.cloudfront.net/media/63/637412/1200/preview.jpg', 
        description:'The Nord Stage 4 features a brand new panel design with dedicated LED faders for each Layer, providing exceptional overview and flexibility when creating sounds and performing live. The new Preset Library is packed with inspiring ready-to-use Piano, Synth and Organ sounds for quick and smooth patch creation.', 
        section: 'DigitalPianos'
    },
    {
        id: '2', 
        name:'Casio Privia PX-S7000', 
        price:2568.99, 
        img:'https://img.kirstein.de/out/pictures/generated/product/2/2000_2000_75/c588eaaec41074877f22d5c99992a90e_2.jpg',
        description: 'Put simply, the Privia PX-S7000 is the best-sounding, best-feeling, best-looking Privia ever made. With brilliant style to match its breathtaking sound and touch, the Privia PX-S7000 is a stunning musical centerpiece for your home. It brings harmony to your life in more ways than one, with a striking modern design in your choice of finishes. Complementing a diverse range of lifestyles and interior décor, the PX-S7000’s sophisticated and minimalist style reimagines how piano can be incorporated into everyday life. Unlike most instruments, the PX-S7000 is beautiful from every angle, giving you the freedom to place it anywhere in your home.', 
        section: 'DigitalPianos'
    },
    {
        id: '3', 
        name:'Yamaha CK88 Stage Keyboard', 
        price:1499.99, 
        img:'https://galerimusikindonesia.com/image/data/keyboard/yamaha/CK88/yamaha-ck88-88-key-stage-keyboard-a116518.jpg',
        description: 'The CK88 Stage Keyboard offers authentic piano, organ, and synth sounds in a portable package that\'s perfect for any musician on the go. Its 88 keys feature a Graded Hammer Standard action, making it ideal for both acoustic and electric piano styles. With a range of sounds and effects, including pianos, electric pianos, strings, brass, organ, and modern synth sounds, you can explore new sonic palettes with ease. The easy-to-use controls allow you to focus on the music, not the menu, with dedicated organ controls and Synth and Effect controls. With its long battery life, the CK88 is perfect for turning any place into a stage or studio, from campgrounds and tour buses to hotel rooms.',
        section: 'DigitalPianos'
    },
    {
        id: '4', 
        name:'Kawai CA901 Digital Piano', 
        price:7299, 
        img:'https://cdn.merriammusic.com/2020/08/Kawai-NV5-Hybrid-Digital-Piano.jpg',
        description: 'Combining Kawai’s leading Grand Feel III wooden-key keyboard action, brand new SK-EX Competition Grand sounds with multi-channel sampling and resonance modelling, premium audio processing technologies, and an authentic wooden soundboard, the CA901 delivers one of the finest grand piano experiences available in a digital instrument.',
        section: 'DigitalPianos'
    },
    {
        id: '5', 
        name:'Roland LX708 Digital Piano', 
        price:6399.99, 
        img:'https://www.rimmersmusic.co.uk/images/roland-lx708-digital-piano-polished-ebony-p42896-87711_image.jpg', 
        description:'As the flagship of Roland’s LX700 series, the LX708 recreates all the pleasures of playing a traditional grand piano in a great live venue. Standing out among the LX range with its tall, commanding cabinet and a lid that opens for optimum sound projection, this luxurious instrument makes a bold statement in your home. And with its powerful eight-speaker system ready to fill your home with music, the LX708 is the ultimate choice for discerning players.',
        section: 'DigitalPianos'
    },
    {
        id: '6', 
        name:'Roland Fantom 8 EX Workstation Keyboard', 
        price:4199.99, 
        img:'https://kraftmusic.com/cdn/shop/files/ROL-FANTOM8EX_top.jpg?v=1713987589&width=1944', 
        description:`Roland Fantom 8 EX is the most potent creative keyboard on the planet. The latest chapter in the Fantom legacy supercharges Roland's premier synth platform with next-level capabilities, offering multiple advanced sound engines, enhanced composition and performance tools and superior playability.`,
        section: 'Workstations'
    },
    {
        id: '7', 
        name:'Kurzweil K2700 88-Key Music Workstation', 
        price:2999.00, 
        img:'https://kraftmusic.com/cdn/shop/files/kur-k2700_top.jpg?v=1695406860&width=1080', 
        description:`Kurzweil K2700: witness the evolution of legendary Kurzweil K2 Series workstations.`,
        section: 'Workstations'
    },
    {
        id: '8', 
        name:'Yamaha Montage M8x Synthesizer', 
        price:4499.99, 
        img:'https://kraftmusic.com/cdn/shop/files/YAM-MONTAGEM8X_top.jpg?v=1696873027&width=1944', 
        description:`Yamaha Montage M8x will help you realize amazing sound with three engines that recreate warm vintage analog synths, cutting-edge FM synths and ultra-realistic instruments. The Motion Control engine enhances these capabilities, adding a unique fourth dimension of control to your music making. Unlike traditional hardware synthesizers, Montage M8x seamlessly bridges stage and studio with deep computer connectivity and integration. Designed to meet the needs of synthesists, keyboardists and pianists, Montage M8x introduces a new era of sound, control and workflow in music creation.`,
        section: 'Workstations'
    },
    {
        id: '9', 
        name:'Korg Nautilus 88-Key Music Workstation', 
        price:2499.99, 
        img:'https://kraftmusic.com/cdn/shop/files/kor-nautilus88_top.jpg?v=1695406743&width=1080', 
        description:`Korg Nautilus gives you all the dazzling sounds you need in a streamlined performance synth and workstation with a Kronos pedigree. With the power of nine engines to drive a new approach to sounds, plentiful sampling, audio recording, effects and ample processing power, there is simply no other synth that delivers more to explore sonically, with the workflow to get you there faster than ever.`,
        section: 'Workstations'
    },
]



// export const getProductsByPropertyValue = (property, value) => {
//     return new Promise (resolve => {
//         setTimeout(()=>{            
//             let filteredProducts = PRODUCTS.filter(product => product[property] === value)
            
//             property != 'id' || (filteredProducts = filteredProducts[0])

//             resolve(filteredProducts)
//         }, 500)
//     })
// }