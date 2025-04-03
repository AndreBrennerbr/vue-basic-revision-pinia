import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  
  function increment(number = null) {
    if(number != null){
      count.value = count.value + number
    }else{
      count.value++
    }
    
  }

  function zerar(){
    count.value = 0
  }

  return { count, increment,zerar }
})
