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
    }
]



export const getProductsByPropertyValue = (property, value) => {
    return new Promise (resolve => {
        setTimeout(()=>{            
            let filteredProducts = PRODUCTS.filter(product => product[property] === value)
            
            property != 'id' || (filteredProducts = filteredProducts[0])

            resolve(filteredProducts)
        }, 500)
    })
}