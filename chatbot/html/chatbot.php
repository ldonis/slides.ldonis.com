
<header>
	<?php echo Html::img('bot.png', ['alt'=>'']) ?>
	<hr></hr>	
	<h1>- Chatbots -</h1>
</header>

<?php include $this->partial('header', 'Template'); ?>

<section>
	<h3>Que es un chatbot?</h3>
	<hr>
	<p>Es un programa informatico el cual puede mantener una conversacon con un humano</p>
</section>

<section class="origen">
	<h3>Historia</h3>
	<hr>
	<ul>
		<li>1950 Alan Turing - Computing Machinery and Intelligence</li>
		<li>1966 Joseph Weizenbaum - Crea ELIZA</li>
		<li>1994 Michael Mauldin - Creador de verbot</li>
	</ul>
</section>

<section class="use">
	<h3>Para que puedo utilizar un chatbot?</h3>
	<hr>
	<ul>
		<li>Soporte tecnico y atencion al cliente</li>
		<li>Gestion de pedidos (ventas)</li>
		<li>Envio o entrega de informacion a peticion</li>
	</ul>
</section>

<section class="ai">
	<h3>Inteligencia artificial?</h3>
	<hr>
	<ul>
		<li>Lenguaje natural</li>
		<li>Empatia con el usuario</li>
		<li>Aprender</li>
	</ul>
</section>

<section class="iniciar">
	<h3>Como iniciar?</h3>
	<hr>
</section>

<section>
	<h3>Demo</h3>
</section>

<section class="chat">
	<div class="container">
		<div id="chat-history"></div>
		<div class="control">
			<input id="chat-message" type="" name="" placeholder="Mensaje">
			<button id="chat-send">enviar</button>
		</div>
	</div>
</section>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script type="text/javascript">

	function mensaje(){

		var mensaje = jQuery("#chat-message").val()

		axios.post('https://api.dialogflow.com/v1/query?v=20150910', {
			"q": mensaje,
			"lang": "en",
			"sessionId": "12345"
		},{
			headers: {'Authorization': "bearer 2dd79f54fbd345fc9be7751e9a8d3406"}
	   }).then(function (response) {

			var el = document.getElementById('chat-history')
			var html = ''
			html += '<p class="question"><span>'+mensaje+'</span></p>';
			html += '<p class="response"><span>'+response.data.result.fulfillment.speech+'</span></p>';
			jQuery(el).append(html)

		}).catch(function (error) {
			console.log(error);
		});

		jQuery("#chat-message").val("")

	}

	jQuery("#chat-send").click(()=>{
		mensaje()
	})

</script>

<?php include $this->partial('footer', 'Template'); ?>
