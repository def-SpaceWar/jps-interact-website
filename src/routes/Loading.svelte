<div class="c">
  <div class="loader"></div>
</div>

<style>
	.c
{
  margin:0;
  padding:0;
  width: 100vw;
  height: 100vh;
  background: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  margin: auto;
  border: 15px solid #E3E3E3;
  border-radius: 50%;
  border-top: 15px solid var(--primary);
  border-bottom: 15px solid var(--primary);
  width: 60px;
  height: 60px;
  animation: spinner 2s linear infinite;
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
