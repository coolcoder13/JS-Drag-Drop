const imagebox = document.querySelector('#imageDiv')
const customboxes = document.getElementsByClassName('customBox')

imagebox.addEventListener('dragstart', (e)=>{
    console.log('drag start');
    e.target.className += ' holdState';
    setTimeout(() => {
        e.target.className = ' hide';
    }, 0);
})

imagebox.addEventListener('dragend', (e)=>{
    console.log('drag end');
    e.target.className = 'imgBox';
})

for(custobox of customboxes){
    custobox.addEventListener('dragover', (e)=>{
        // enter -> over -> leave -> end
        // but now
        // enter -> over -> drop -> end
        e.preventDefault();
        console.log('dragover');
    })
    
    custobox.addEventListener('dragenter', (e)=>{
        console.log('dragenter');
        e.target.className += ' dragState';
    })
    
    custobox.addEventListener('dragleave', (e)=>{
        console.log('dragleave');
        e.target.className = 'customBox';
    })
    
    custobox.addEventListener('drop', (e)=>{
        console.log('drop');
        e.target.append(imagebox)
    })
}