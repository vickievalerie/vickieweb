const list = document.querySelector('.list'), 
    items = document.querySelectorAll('.blocks_item')
    listItems = document.querySelectorAll('.list_item')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target
        // console.log(targetId)

        if(target.classList.contains('list_item')) {
            listItems.forEach(listItem => listItem.classList.remove('active'))
            target.classList.add('active')
        }


        switch(targetId) {
            case 'all':
                getItems('blocks_item')
                break
            case 'deals':
                getItems(targetId)
                break
            case 'popular':
                getItems(targetId)
                break
            case 'recs':
                getItems(targetId)
                break
            case 'price':
                getItems(targetId)
                break
        }
    })
}
filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) { 
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }  
    })
}