const PRODUCTS = [
    {
        id: '1', 
        name:'A', 
        price:1, 
        img:'', 
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut corporis ipsum explicabo ut asperiores ratione fugiat, earum libero quasi eligendi natus rem eius quod quibusdam totam? Asperiores aperiam maiores quos?', 
        sectionId: 'Workstations'
    },
    {
        id: '2', 
        name:'B', 
        price:1, 
        img:'',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut corporis ipsum explicabo ut asperiores ratione fugiat, earum libero quasi eligendi natus rem eius quod quibusdam totam? Asperiores aperiam maiores quos?', 
        sectionId: 'Synthesizers'
    },
    {
        id: '3', 
        name:'C', 
        price:1, 
        img:'',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut corporis ipsum explicabo ut asperiores ratione fugiat, earum libero quasi eligendi natus rem eius quod quibusdam totam? Asperiores aperiam maiores quos?',
        sectionId: 'DigitalPianos'
    },
    {
        id: '4', 
        name:'D', 
        price:1, 
        img:'',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut corporis ipsum explicabo ut asperiores ratione fugiat, earum libero quasi eligendi natus rem eius quod quibusdam totam? Asperiores aperiam maiores quos?',
        sectionId: 'MidiControllers'
    },
    {
        id: '5', 
        name:'E', 
        price:1, 
        img:'', 
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut corporis ipsum explicabo ut asperiores ratione fugiat, earum libero quasi eligendi natus rem eius quod quibusdam totam? Asperiores aperiam maiores quos?',
        sectionId: 'VirtualInstruments'
    }
]



export const getProducts = (selectedSectionId) => {
    return new Promise (resolve => {
        setTimeout(()=>{
            const filteredProducts = PRODUCTS.filter(product => product.sectionId === selectedSectionId)
            console.log(filteredProducts);
            
            resolve(filteredProducts)
        }, 100)
    })
}