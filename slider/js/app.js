const group = document.getElementsByClassName('group')

let activeIndex = 0
    
    
const leftBtn = () => {
      // BUMB index

      const active = activeIndex - 1 >= 0 ? activeIndex - 1 : group.length - 1,
            before = active - 1 >= 0 ? active - 1 : group.length - 1,
            unknown = activeIndex + 1 <= group.length - 1 ? activeIndex + 1 : 0
      
      const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
            beforeGroup = document.querySelector(`[data-index="${active}"]`),
            afterGroup = document.querySelector(`[data-index="${before}"]`),
            unknownGroup = document.querySelector(`[data-index="${unknown}"]`)

      // set the before index into active
      beforeGroup.dataset.status = 'active'

      // set the current active index into after
      currentGroup.dataset.status = 'after'

      // set the unknown index into before
      afterGroup.dataset.status = 'before'

      // set the last after index into unknown
      unknownGroup.dataset.status = 'unknown'
      
      activeIndex = active
}

const rightBtn = () => {
      // BUMB index

      const active = activeIndex + 1 <= group.length - 1 ? activeIndex + 1 : 0,
            after = active + 1 <= group.length - 1 ? active + 1 : 0,
            unknown = activeIndex - 1 >= 0 ? activeIndex - 1 : group.length - 1
      
      const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
            nextGroup = document.querySelector(`[data-index="${active}"]`),
            beforeGroup = document.querySelector(`[data-index="${after}"]`),
            unknownGroup = document.querySelector(`[data-index="${unknown}"]`)

      // set the after index into active status
      nextGroup.dataset.status = 'active'

      // set the current active index into before status
      currentGroup.dataset.status = 'before'

      // set the unknown index into after status
      beforeGroup.dataset.status = 'after'

      // set the last before index into unknown
      unknownGroup.dataset.status = 'unknown'

      activeIndex = active
}

document.querySelector('.slider').addEventListener('keydown', event => {
      if(event.key === 'ArrowLeft') {
            leftBtn()
      } else if(event.key === 'ArrowRight') {
            rightBtn()
      }
})