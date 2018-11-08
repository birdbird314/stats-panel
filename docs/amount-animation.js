(() => {
  document.querySelectorAll('.amount').forEach(animate)

  function animate(amount) {
    let targetAmount = amount.innerHTML
    amount.innerHTML = 0 
    for (let i = 0; i < targetAmount; i++) {
      setTimeout(() => amount.innerHTML++, i * (1500/targetAmount))
    }
  }
})()