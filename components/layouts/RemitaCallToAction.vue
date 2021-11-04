<template>
	<div class="applynow text-center">
        <h4 class="text-dark">We have partnered with our friends at remita
        
		  to make it easy for you to pay. You can now </h4> 
          <a :href="remitaLink" target="_blank">
                <img class="btn-icon remita-transitions" src="/remita.png" width="150">
          </a>

	</div>
</template>

<script>
export default {
	name: "RemitaCallToAction",
    computed: {
    remitaLink: function () {
      return 'https://www.login.remita.net/remita/onepage/MONEYLINE/biller.spa' 
    }
  }
};
</script>


<style scoped>
.orange {
	color: orange;
}

.terms:hover {
	text-decoration: underline;
}
.applynow {
	/* background: #013a59; */
	color: #fff;
	padding: 3rem;
	font-size: 1.5rem;
}

.remita-transitions:hover{
    /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 0.5s;

  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>
