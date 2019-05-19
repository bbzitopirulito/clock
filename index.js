const body = document.querySelector("body").onload = () => {
    const hourHand = document.querySelector('.hour-hand')
    const minuteHand = document.querySelector('.min-hand')
    const secondHand = document.querySelector('.second-hand')
    function setDate() {
      
      const now = new Date();

      const hours = now.getHours()
      const hoursDegrees = ((hours/12) * 360) + 90
      console.log(hours)

      const minutes = now.getMinutes()
      const minutesDegrees = ((minutes / 60) * 360) + 90
      console.log(minutes)

      const seconds = now.getSeconds()
      const secondsDegrees = ((seconds / 60) * 360) + 90
      console.log(seconds)

      // if(hoursDegrees === 90) {
      //   hourHand.style.transition = null
      // }
      // if(minutesDegrees === 90) {
      //   minuteHand.style.transition = null
      // }
      // if(secondsDegrees === 90) {
      //   secondHand.style.transition = null
      // }

      hourHand.style.transform = `rotate(${hoursDegrees}deg)`
      minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`

      // hourHand.style.transition = "all 0,5s"
      // minuteHand.style.transition = "all 0,5s"
      // secondHand.style.transition = "all 0,5s"
    }

    setInterval(setDate, 1000)
}